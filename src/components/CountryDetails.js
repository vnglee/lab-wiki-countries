import countriesData from '../countries.json'
import { useParams, Link } from "react-router-dom"
import {useState, useEffect} from "react"

const CountryDetails = ({countries}) => {

    const [country, setCountry] = useState(null)

    const {alpha3Code} = useParams()
    console.log('alpha3code', alpha3Code)


    const getInfo = (code) => {
        console.log('country', countries.find((country) => country.alpha3Code === code))
        return countries.find((country) => country.alpha3Code === code)
    }

    // const getName = (code) => {
    //     return countries.find()
    // }
    // const info = countries.find((country) => {
    //     return country.alpha3Code === alpha3Code
    // })
    useEffect(() => {


        setCountry(getInfo(alpha3Code))
        // if (info) {
        //     setCountry(info)
        // }
    }, [countries, alpha3Code])

  return (
    <div>

        {country ? 
        
        
        <div className="col-7">
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>{country.area}</td>
                  <td>
                    km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {country.borders.map((border) => {
                            return  <li><Link to={`/${border}`}>{getInfo(border).name.common}</Link></li>
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          :

          <p>Loading...</p>
        }
    </div>

  )
}

export default CountryDetails