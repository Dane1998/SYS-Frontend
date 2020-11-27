
import React from 'react';

import "../Css-files/wrapper.css"



  class MySearchSite extends React.Component {

    constructor(props) {
      super(props)
      
      this.state = {
        query: '',
        loadingData: true,
        hideSuggestions: false,
        data: []
      }
      
      this.loadInitialData()
    }
    
    async loadInitialData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/')
      const json = await response.json()
      
      this.setState({ isLoading: false, data: json })
    }
    
    filterByQuery(query) {
      if (query.length === 0) {
        return []
      }
      
      const matches = [
        (element) => element.name,
        (element) => element.email
      ]
      
      const queryValue = query.toLowerCase()
      
      return this.state.data.filter(element => {
        for (let match of matches) {
          const comparableValue = match(element).toLowerCase()
          
          if (queryValue === comparableValue || comparableValue.includes(queryValue)) {
            return true
          }
        }
        
        return false
      })
    }
    
    render() {
      const { query, isLoading, hideSuggestions } = this.state
      
      if (isLoading) {
        return <p>Initializing</p>
      }
      
      const filteredData = this.filterByQuery(query)
      
      return (
        <div className='wrapper'>
          
          <div>
            <input  className="searcher"value={ query } onFocus={ () => this.setState({ hideSuggestions: false })} onChange={ (event) => this.setState({ query: event.target.value }) } type='text' placeholder='Food or destination'/>
            <div>
              <ul className="table">
                { !hideSuggestions && filteredData.map(entry => {
                  return (
                    <li className="tableContent"key={ entry.name } onClick={ () => this.setState({ hideSuggestions: true, query: entry.name })}>
                        { entry.name }
                    </li>
                  )
                }) }
              </ul>
            </div>
          </div>
          <button className="searchButton" type="button" onClick={console.log("implement something please")} >Search</button>
        <div id="result" className="returnedResult" ></div>
        </div>
      )
    }
  }
  
 
  export default MySearchSite;