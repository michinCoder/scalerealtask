import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import CartContext from "../../CartContext";
import NavigationBar from "./NavigationBar";
import { BiArrowBack} from 'react-icons/bi';


const ProductDetail = () => {
  const [itemsDetail, setItemDetails] = useState("");
  const {addToCart} = useContext(CartContext);

  const params = useParams();
  // console.log(params.productID);

  useEffect(() => {
    showDetails();
  }, []);

  const showDetails = async () => {
    const { data } = await Axios.get(
      `https://fakestoreapi.com/products/${params.productID}`
    );
    setItemDetails(data);
  };

  return (
    <>
      <NavigationBar />
      <Link to='/'><BiArrowBack className='nav-icon'/></Link>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: "4em"
          }}
        >
          <Card.Img
            variant="top"
            src={itemsDetail.image}
            style={{ width: "300px", padding: "3em" }}
          />
          <div style={{marginLeft: "10em"}}>
            <Card.Body>
              <Card.Title>{itemsDetail.title}</Card.Title>
              <Card.Text>{itemsDetail.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Price: <b>${itemsDetail.price}</b>
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Button variant="primary" onClick={() => addToCart(itemsDetail)}>Add to cart</Button>
            </Card.Body>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ProductDetail;
