import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample({ product }) {
  return (
    <Card style={{ width: "15rem",height:"30rem",boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}}>
      <Card.Img
        variant="top"
        src={product.image}
        style={{ width: "8rem", margin: "1rem auto" }}
      />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{product.title}</Card.Title>
        <Card.Text
          style={{
            width: "180px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            margin:"1rem 0"
          }}
        >
          {product.description}
        </Card.Text>
        <Button variant="secondary" style={{position:"absolute", bottom:"1rem" ,left:"1rem"}}>{product.price} TL</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
