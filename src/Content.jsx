import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Content({ data, link }) {
  return (
    <>

      <Card style={{ width: '24rem' }}>
        <Card.Img variant="top" src={data} />
        <Card.Body>
          <Card.Title>New Fox</Card.Title>
          <Card.Text>
            This is a fox and you can click the button to download
          </Card.Text>
          <Button variant="primary"><a href={link}></a>Visit fox API</Button>
        </Card.Body>
      </Card>
    </>

  )
}


export default Content;