import { useState } from 'react';

export function useForm2(config) {
  const initialFields = {};
  Object.keys(config).forEach(fieldName => {
    initialFields[fieldName] = { value: '', error: null };
  });

  const [fields, setFields] = useState(initialFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        value
      }
    }));
  };

  const validate = () => {
    const newFields = { ...fields };
    let isValid = true;

    Object.keys(config).forEach(fieldName => {
      const validators = config[fieldName].validators;
      let error = null;

      for (let validator of validators) {
        const [type, param] = validator.split(':');
        const value = fields[fieldName].value;

        if (type === 'required' && !value) {
          error = `${fieldName} is required`;
          break;
        }
        if (type === 'email' && value && !value.includes('@')) {
          error = `${fieldName} must be a valid email`;
          break;
        }
        if (type === 'minLength' && value && value.length < parseInt(param)) {
          error = `${fieldName} must be at least ${param} characters`;
          break;
        }
      }

      newFields[fieldName] = {
        ...newFields[fieldName],
        error
      };

      if (error) isValid = false;
    });

    setFields(newFields);
    return isValid;
  };

  const reset = () => {
    setFields(initialFields);
  };

  const submit = (callback) => {
    if (validate()) {
      const values = {};
      Object.keys(fields).forEach(fieldName => {
        values[fieldName] = fields[fieldName].value;
      });
      callback(values);
    }
  };

  return {
    fields,
    handleChange,
    submit,
    reset
  };
}
