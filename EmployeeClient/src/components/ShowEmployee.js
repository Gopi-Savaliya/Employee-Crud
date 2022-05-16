import React from "react";

export const ShowEmployee = ({getEmployees, employeeList}) => {
  return (
    <>
      <button onClick={getEmployees}>Show Employees</button>
      {employeeList.length !== 0 && (
        <table align="center">
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
          {employeeList.map((employee) => {
            return (
              <tbody key={employee.employeeID}>
                <tr>
                  <td>{employee.employeeID}</td>
                  <td>{employee.name}</td>
                  <td>{employee.age}</td>
                  <td>{employee.country}</td>
                  <td>{employee.position}</td>
                  <td>{employee.wage}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      )}
    </>
  );
};
