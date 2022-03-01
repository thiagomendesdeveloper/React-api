import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [ repositories, setRepositories ] = useState([])

  useEffect( ()=> {

    axios.get('https://api.github.com/users/thiagomendesdeveloper/repos')
    .then( response => {
      setRepositories(response.data)
    })

  },[])
  

  return (
    <ul>
      {repositories.map( repo => {
        return(
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  );

}

export default App;