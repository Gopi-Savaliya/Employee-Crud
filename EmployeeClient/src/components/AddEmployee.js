import React, { useState } from "react";

export const AddEmployee = ({
  employeeData,
  setEmployeeData,
  addEmployee,
  countryList,
}) => {

  const handleChange = (event) => {
    setEmployeeData({
      ...employeeData,
      [event.target.name]: event.target.value,
    });
  };

  const [isValidate, setIsValidate] = useState();

  const validation = () => {
    if(employeeData.name !== '') {
        if(employeeData.position !== '') {
            setIsValidate(true);
            addEmployee();
        } else {
            setIsValidate(false);
        }
    } else {
        setIsValidate(false);
    }
  }

  return (
    <>
      <table align="center">
        <tbody>
          <tr>
            <td>
              <label>Name:</label>
            </td>
            <td>
              <input
                type="text"
                name="name"
                value={employeeData.name}
                placeholder="Name"
                onChange={handleChange}
              />
            </td>
            <td>
                {isValidate===false && employeeData.name==='' && <div style={{color: "red"}}>Please Input Valid Employee Name</div>}
            </td>
          </tr>
          <tr>
            <td>
              <label>Age:</label>
            </td>
            <td>
              <input
                type="number"
                name="age"
                value={employeeData.age}
                placeholder="Age"
                min={1}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Country:</label>
            </td>
            <td>
              {countryList.length !== 0 ? (
                <select
                  name="country"
                  value={employeeData.country_name}
                  onChange={handleChange}
                >
                  {countryList.map((country) => {
                    return (
                      <option key={country.id} value={country.country_name}>
                        {country.country_name}
                      </option>
                    );
                  })}
                </select>
              ) : (
                <div>Please add Country First</div>
              )}
            </td>
          </tr>
          <tr>
            <td>
              <label>Position:</label>
            </td>
            <td>
              <input
                type="text"
                name="position"
                value={employeeData.position}
                placeholder="Position"
                onChange={handleChange}
              />
            </td>
            <td>
            {isValidate===false && employeeData.position==='' && <div style={{color: "red"}}>Please Input Valid Position</div>}
            </td>
          </tr>
          <tr>
            <td>
              <label>Wage (year):</label>
            </td>
            <td>
              <input
                type="number"
                name="wage"
                value={employeeData.wage}
                placeholder="Wage"
                min={0.1}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={validation}>Add Employee</button>
    </>
  );
};
