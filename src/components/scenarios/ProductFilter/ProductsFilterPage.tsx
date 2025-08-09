import React, { useState } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem, Slider, Typography, Checkbox, FormControlLabel, Rating, Button } from "@mui/material";
import { products } from "./ProductsData";






const categories = ["All", "Electronics", "Sports", "Clothing"];

const ProductFilters: React.FC = () => {
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState<number[]>([0, 80000]);
  const [rating, setRating] = useState<number | null>(null);
  const [inStock, setInStock] = useState(false);

  const handleReset = () => {
    setCategory("All");
    setPriceRange([0, 80000]);
    setRating(null);
    setInStock(false);
  };

  const filteredProducts = products.filter((p) => {
    const categoryMatch = category === "All" || p.category === category;
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
    const ratingMatch = rating ? p.rating >= rating : true;
    const stockMatch = inStock ? p.inStock : true;
    return categoryMatch && priceMatch && ratingMatch && stockMatch;
  });

  return (
    <Box className="p-4 border rounded-xl shadow-md bg-white space-y-6">
      <Typography variant="h6" className="font-semibold">Filters</Typography>

      {/* Category */}
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Price Range */}
      <Box>
        <Typography gutterBottom>Price Range (₹)</Typography>
        <Slider
          value={priceRange}
          onChange={(_, newValue) => setPriceRange(newValue as number[])}
          valueLabelDisplay="auto"
          min={0}
          max={80000}
          step={1000}
        />
      </Box>

      {/* Rating */}
      <Box>
        <Typography gutterBottom>Minimum Rating</Typography>
        <Rating
          value={rating}
          onChange={(_, newValue) => setRating(newValue)}
          precision={0.5}
        />
      </Box>

      {/* Stock */}
      <FormControlLabel
        control={
          <Checkbox checked={inStock} onChange={(e) => setInStock(e.target.checked)} />
        }
        label="In Stock Only"
      />

      {/* Reset */}
      <Button variant="outlined" color="secondary" onClick={handleReset} fullWidth>
        Reset Filters
      </Button>

      {/* Products List */}
      <Box className="space-y-3 overflow-y-auto" style={{ maxHeight: '500px' }}>
        <Typography variant="subtitle1" className="font-semibold">Products</Typography>
        {filteredProducts.length ? (
          filteredProducts.map((p) => (
            <Box key={p.id} className="border p-3 rounded-lg shadow-sm">
              <Typography className="font-medium">{p.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {p.category} • ₹{p.price} • ⭐ {p.rating}
              </Typography>
              <Typography variant="caption" color={p.inStock ? "success.main" : "error.main"}>
                {p.inStock ? "In Stock" : "Out of Stock"}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography color="error">No products found</Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProductFilters;
