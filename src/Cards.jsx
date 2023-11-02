import React from 'react';
import { Card, Button } from 'react-bootstrap';


function Cards() {
  const foxDataArray = JSON.parse(localStorage.getItem('foxData')) || [];
  if(foxDataArray.length < 2){
    return <p>No saved cards</p>
  }

  return (
      <>
        <h4>Saved Cards</h4>
        <div className="cardz">
            {foxDataArray.map((foxData, index) => (
                <Card key={index} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={foxData.name} />
                <Card.Body>
                    <Card.Title>Old Fox</Card.Title>
                    <Card.Text>Here is a Fox</Card.Text>
                    <Button variant="primary">
                    <a href={foxData.link} target="_blank" rel="noopener noreferrer">Visit Fox API</a>
                    </Button>
                </Card.Body>
                </Card>
            ))}
        </div>
      </>
    
   )
  }

export default Cards;
