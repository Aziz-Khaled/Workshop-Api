import React from 'react';
import Axios from 'axios'
import {useState} from 'react'
import UserCard from './UserCard'
function CardList() {

    const [data ,setData] = useState ([])
    

    const GetUsers = () => {
        Axios.get ('https://jsonplaceholder.typicode.com/users')
        .then ((response) => setData (response.data))
    }
  return <div>

<h1>ContactList</h1>
<button onClick ={GetUsers}> console log</button>

<div >
{data.map ( (el,i) =><UserCard user ={el} key={i}  />
 ) }
</div>
  </div>;
}

export default CardList;
