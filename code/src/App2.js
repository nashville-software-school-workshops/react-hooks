import { useForm2 } from './useForm2';

export default function App2() {
  const { fields, handleChange, submit, reset } = useForm2({
    email: { validators: ['required', 'email'] },
    password: { validators: ['required'] }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    submit((values) => {
      alert(`Logged in with ${values.email}`);
      reset();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={fields.email.value}
          onChange={handleChange}
        />
        {fields.email.error && <p style={{ color: 'red' }}>{fields.email.error}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={fields.password.value}
          onChange={handleChange}
        />
        {fields.password.error && <p style={{ color: 'red' }}>{fields.password.error}</p>}
      </div>
      <button type="submit">Login</button>
      <button type="button" onClick={reset}>Reset</button>
    </form>
  );
}
