import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Rating,
  IconButton,
  Box,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Slider
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import products from "../data/products";

function Shop() {
  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, wishlist } = useContext(WishlistContext);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [priceRange, setPriceRange] = useState([0, 15000]);

  const categories = ["Rings", "Necklaces", "Earrings", "Bracelets"];

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category ? product.category === category : true
    )
    .filter(
      (product) =>
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        Shop Our Collection 💎
      </Typography>

      {/* Filters Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <TextField
            label="Search"
            fullWidth
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel>Sort</InputLabel>
            <Select
              value={sort}
              label="Sort"
              onChange={(e) => setSort(e.target.value)}
            >
              <MenuItem value="">Default</MenuItem>
              <MenuItem value="low">Price: Low to High</MenuItem>
              <MenuItem value="high">Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={3}>
          <Typography gutterBottom>
            Price Range ₹{priceRange[0]} - ₹{priceRange[1]}
          </Typography>
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            valueLabelDisplay="auto"
            min={0}
            max={15000}
          />
        </Grid>
      </Grid>

      {/* Product Grid */}
      <Grid container spacing={3}>
        {filteredProducts.map((product) => {
          const isWishlisted = wishlist.find(
            (item) => item.id === product.id
          );

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card
                sx={{
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 6
                  }
                }}
              >
                <CardMedia
                  component={Link}
                  to={`/product/${product.id}`}
                  image={product.image}
                  sx={{ height: 250 }}
                />

                <CardContent>
                  <Typography variant="h6">
                    {product.name}
                  </Typography>

                  <Rating
                    value={Number(product.rating)}
                    precision={0.1}
                    readOnly
                    size="small"
                  />

                  <Typography sx={{ my: 1, fontWeight: "bold" }}>
                    ₹{product.price}
                  </Typography>

                  <IconButton
                    onClick={() => toggleWishlist(product)}
                  >
                    <FavoriteIcon
                      color={isWishlisted ? "error" : "inherit"}
                    />
                  </IconButton>

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Shop;