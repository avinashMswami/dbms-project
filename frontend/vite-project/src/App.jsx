import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [hourly_pay, setHourly_pay] = useState(0);
  const [datas, setDatas] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          hourly_pay: parseFloat(hourly_pay),
        }),
      });

      if (response.ok) {
        const newData = await response.json();
        setDatas(newData);
        console.log('Data submitted successfully!');
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Enter Your Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label> Enter Your hourly pay:</label>
        <input
          type="number"
          value={hourly_pay}
          onChange={(e) => setHourly_pay(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {datas.map((data, index) => (
          <li key={index}>
            Name: {data.name}, Hourly Pay: {data.hourly_pay}, Salary: {data.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
