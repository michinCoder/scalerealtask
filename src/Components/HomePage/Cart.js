import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import CartContext from "../../CartContext";
import NavigationBar from "./NavigationBar";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Cart = () => {
  const { item } = useContext(CartContext);
  console.log(item);

  return (
    <div>
      <NavigationBar />
      <Link to="/">
        <BiArrowBack className="nav-icon" />
      </Link>
      <div className="shoppingBG">
        {item.length !== 0 ? (
          item.map((data) => (
            <Card
              key={data.product.id}
              style={{
                margin: "1em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                width: " 50%",
              }}
            >
              <Card.Img
                variant="top"
                src={data.product.image}
                style={{ width: "200px", padding: "20px" }}
              />
              <Card.Body style={{ marginLeft: "3em" }}>
                <Card.Title>{data.product.title}</Card.Title>
                <Card.Text>{data.product.description}</Card.Text>
                <small className="text-muted">$ {data.product.price}</small>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Link to="/">
            <h5 style={{ textAlign: "center", marginTop: "2em" }}>
              Start Shopping
            </h5>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
