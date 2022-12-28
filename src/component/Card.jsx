import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../features/BasketSlice";

function BasicExample({ product }) {
    const {basket}=useSelector((state)=>state.basket)
    const dispatch = useDispatch()
    const addbasket =(product)=>{
        dispatch(addBasket(product))
    }
    useEffect(()=>{
        localStorage.setItem("basket",JSON.stringify(basket))
    },[basket])
  return (
    <Card style={{ width: "15rem",height:"30rem",boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",position:"relative"}}>
      <Card.Img
        variant="top"
        src={product?.image}
        style={{ width: "8rem", margin: "1rem auto" }}
      />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{product?.title}</Card.Title>
        <Card.Text
          style={{
            width: "180px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            margin:"1rem 0"
          }}
        >
          {product?.description}
        </Card.Text>
        <div style={{position:"absolute", bottom:"1rem" ,left:"50%",translate:"transform(-50%)",display:"flex",gap:"1rem"}}>
        <Button variant="secondary" >{product?.price} TL</Button>
        <Button variant="secondary" onClick={()=>addbasket(product)}>add Basket</Button>
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
