import React from 'react'
import { useFetch } from './hook/useFetch';

function App() {

  const { data } = useFetch('users/thiagomendesdeveloper/repos')

  return (
    <ul>
      {data?.map( repo => {
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