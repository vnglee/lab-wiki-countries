import { Link } from "react-router-dom"

const CountriesList = ({countries}) => {

    const getPhoto = (code) => {
        return "https://flagpedia.net/data/flags/icon/72x54/" + code.toLowerCase() + ".png"
    }

  return (

    <div className="col-5" style={{maxHeight: "90vh", overFlow: "scroll"}}>
            <div className="list-group">

            <h1>Countries</h1>

            {countries.map((country) => {

                return (
                    <div key={country.alpha3Code} 
                    className="list-group-item list-group-item-action">
                    <Link to={`/${country.alpha3Code}`}>
                   
                    <img src={getPhoto(country.alpha2Code)} 
                    alt={`${country.name.common}`} />
                    {country.name.common}
                    </Link>
                    </div>
                )
            })}
        </div>
    </div>

  )
}

export default CountriesList