import React from 'react';
import {Card} from 'react-bootstrap'
function UserCard({user}) {

  console.log (user)
  return <div >
    <Card  style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.w3schools.com/howto/img_avatar.png" />
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
      {user.address.city}
      
    </Card.Text>
    
  </Card.Body>
</Card>
  </div>;
}

export default UserCard;
