import { useParams } from "react-router-dom";
import products from "../data/products";
import { Container, Typography, Button, Rating } from "@mui/material";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useContext(CartContext);

  if (!product) return <Typography>Product not found</Typography>;

  return (
    <Container sx={{ mt: 5 }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "300px" }}
        />
        <Typography variant="h4">{product.name}</Typography>
        <Rating value={Number(product.rating)} readOnly />
        <Typography variant="h6">₹{product.price}</Typography>
        <Button
          variant="contained"
          onClick={() => addToCart(product)}
          sx={{ mt: 2 }}
        >
          Add to Cart
        </Button>
      </motion.div>
    </Container>
  );
}

export default ProductDetails;