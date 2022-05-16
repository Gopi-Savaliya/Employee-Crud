import React, { useState } from 'react'

export const AddCountry = ({ addCountry, countryName, setCountryName }) => {

    const [isValidate, setIsValidate] = useState();

    const validation = () => {
        if(countryName !== '') {
            setIsValidate(true);
            addCountry();
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
                    <label>Country Name:</label>
                </td>
                <td>
                    <input type="text" value={countryName} placeholder="Name" onChange={(e) => setCountryName(e.target.value)} required/>
                </td>
                <td>
                    {isValidate===false && countryName==='' && <div style={{color: "red"}}>Please Input Valid Country Name</div>}
                </td>
            </tr>
            </tbody>
        </table>
        <br/>
        <button onClick={validation}>Add Country</button>
    </>
  )
}
