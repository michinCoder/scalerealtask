import React from "react";
import { Row, Col, Card, Container, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";


function Products({products}) {

  return (
    <Container className="mt-4">
      <Row className="mt-4 mb-4">
        {products.map((product)=>{
          // console.log("product: ", product)
          return(
            <Col key={product.id} className="mt-4">
            <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={product.image} style={{ width: '300px', height:'300px', objectFit:'contain', padding: "20px"}} />
            <Card.Body>
              <Card.Title style={{fontSize:'16px'}}>{product.title}</Card.Title>
              <Link to={`/product/${product.id}`}><Button variant="secondary">See Details</Button>{' '}</Link>
            </Card.Body>
          </Card>
          </Col>
          )
        })}
         
        
      </Row>
    </Container>
  );
}

export default Products;
