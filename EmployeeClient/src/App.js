import './App.css';
import { useState } from 'react'
import axios from 'axios'

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);

  const [employeeList, setemployeeList] = useState([]);

  const addEmployee = () => {
    axios.post(`${process.env.REACT_APP_BASIC_URL}/create`, { 
      name: name, 
      age: age, 
      country: country, 
      position: position, 
      wage: wage 
    });
  };

  const getEmployees = () => {
    axios.get(`${process.env.REACT_APP_BASIC_URL}/employees`).then((res) => {
      setemployeeList(res.data);
    });
  }

  return (
    <div className="App">
      <h1>Employee</h1>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <label>Name:</label>
            </td>
            <td>
              <input type="text" onChange={ (e) => setName(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Age:</label>
            </td>
            <td>
              <input type="number" onChange={ (e) => setAge(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Country:</label>
            </td>
            <td>
              <input type="text" onChange={ (e) => setCountry(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Position:</label>
            </td>
            <td>
              <input type="text" onChange={ (e) => setPosition(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>
              <label>Wage (year):</label>
            </td>
            <td>
              <input type="number" onChange={ (e) => setWage(e.target.value)} />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={ addEmployee }>Add Employee</button>
      <hr/>
      <button onClick={ getEmployees }>Show Employees</button>
      {employeeList.length!==0 &&
        <table align='center'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Country</th>
              <th>Position</th>
              <th>Wage</th>
            </tr>
          </thead>
          {employeeList.map((val) => {
            return <tbody key={val.employeeID}>
                <tr>
                  <td>{val.employeeID}</td>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.country}</td>
                  <td>{val.position}</td>
                  <td>{val.wage}</td>
                </tr>
              </tbody>
          })}
        </table>
      }
    </div>
  );
}

export default App;
