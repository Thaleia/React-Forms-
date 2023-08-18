import { useState } from 'react';

export default function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(JSON.stringify(inputs));
    alert(`Welcome ${inputs.username} aged ${inputs.age}`);

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:{' '}
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <br></br>
      <label>Enter your age:{' '}
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <br />
        <input type="submit" />
    </form>
  )
}