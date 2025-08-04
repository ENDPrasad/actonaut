import { useState } from "react";
import { Button } from "@mui/material";
import { Snackbar, Alert } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function AddToCartWithToast() {
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    setTimeout(() => {
      setOpen(true);
    }, 3000); // Simulate network delay
  };

  return (
    <div className="p-6 max-w-sm mx-auto text-center shadow-xl rounded-xl border">
      <h2 className="text-xl font-semibold mb-4">Product: Wireless Headphones</h2>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ShoppingCartIcon />}
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={() => setOpen(false)} sx={{ width: "100%" }}>
          Item successfully added to cart!
        </Alert>
      </Snackbar>
    </div>
  );
}
