import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import Countries from '../countries.json'

class CountryDetail extends React.Component {

  state= {
    countries: []
  }

  fetchCountries = () => {
    this.setState({countries: Countries})
  }

  componentDidMount() {
    this.fetchCountries()
  }


  render() {

    const countries = this.state.countries.map(c => <Link key={c.name.official} to="#" className="list-group-item list-group-item-action">{`${c.flag} ${c.name.official}`}</Link>)
     
    return(
      < Fragment>
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {countries}          
            </div>
          </div>
          <div className="col-7">Column 7/12</div>
        </div>
        
      </Fragment>
    )
  }
}

export default CountryDetail