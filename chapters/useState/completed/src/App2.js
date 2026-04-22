import './App.css';

import { useState } from 'react';
import './App.css';

function App() {
  //this useState has an object for its one value. That object can hold multiple properties
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted! Name: ${formData.name}, Email: ${formData.email}, Password: ${formData.password}`);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            //Here, we use an anonymous function for the handler that just calls the useState setter function, with a new object as the parameter
            //To define that object, we use the spread operator to assign all of the current properties of formData, then we override the one for this field
            onChange={e => setFormData({ ...formData, name: e.target.value })}  
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
