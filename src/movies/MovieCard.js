import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





function MovieCard({title,description,poster,rate}) {
    const movie={
        title,description,poster,rate
    }
   

  
   
  return (
    <Card style={{ width: '18rem' }}>
    
      <Card.Img variant="top" src={poster} /> 
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         <p>description:{description}</p> 
         <p>rate:{rate}</p>
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
