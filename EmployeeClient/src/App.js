import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AddEmployee } from './components/AddEmployee';
import { ShowEmployee } from './components/ShowEmployee';
import { AddCountry } from './components/AddCountry';
import { ShowCountry } from './components/ShowCountry';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  //employee
  const [employeeData, setEmployeeData] = useState({
    name: '',
    age: 1,
    country: 'India',
    position: '',
    wage: 0.1
  });

  const [employeeList, setemployeeList] = useState([]);

  const addEmployee = () => {
    axios.post(`${process.env.REACT_APP_BASIC_URL}/create`, { 
      name: employeeData.name, 
      age: employeeData.age, 
      country: employeeData.country, 
      position: employeeData.position, 
      wage: employeeData.wage 
    }).then(() => {
      setEmployeeData({
        name: '',
        age: 1,
        country: 'India',
        position: '',
        wage: 0.1
      });
    });
  };

  const getEmployees = () => {
    axios.get(`${process.env.REACT_APP_BASIC_URL}/employees`).then((res) => {
      setemployeeList(res.data);
    });
  }

  //country
  const [countryName, setCountryName] = useState('');
  const [countryList, setCountryList] = useState([]);

  const addCountry = () => {
    axios.post(`${process.env.REACT_APP_BASIC_URL}/addcountry`, { 
      country_name: countryName
    }).then(() => {
      setCountryName('');
      getCountry();
    });
  };

  const getCountry = () => {
    axios.get(`${process.env.REACT_APP_BASIC_URL}/country`).then((res) => {
      setCountryList(res.data);
    });
  }

  useEffect(() => {
    getCountry();
  }, []);

  useEffect(() => {
  }, [countryList]);

  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to="/" activeclassname="active">Employee</Link>
            </li>
            <li>
              <Link to="/country" activeclassname="active">Country</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
            <h1>Employee</h1>
              <AddEmployee 
                employeeData = {employeeData}
                setEmployeeData = {setEmployeeData}
                addEmployee = {addEmployee}
                countryList = {countryList}
              />
              <hr/>
              <ShowEmployee getEmployees={getEmployees} employeeList={employeeList} />
            </React.Fragment>
          } />
          <Route path="/country" element={
            <React.Fragment>
              <h1>Country</h1>
              <AddCountry addCountry={addCountry} countryName={countryName} setCountryName={setCountryName}/>
              <br/><br/>
              <ShowCountry countryList={countryList}/>
            </React.Fragment>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
