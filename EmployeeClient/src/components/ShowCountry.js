import React, { useEffect } from 'react';

export const ShowCountry = ({ countryList }) => {
  return (
    <>
        {countryList.length !== 0 && (
        <table align="center">
          <thead>
            <tr>
              <th>Country ID</th>
              <th>Country Name</th>
            </tr>
          </thead>
          {countryList.map((country) => {
            return (
              <tbody key={country.id}>
                <tr>
                  <td>{country.id}</td>
                  <td>{country.country_name}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      )}
    </>
  )
}
