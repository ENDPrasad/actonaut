import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import PromoCodeInput from "./PromoCodeInput";

const CheckoutWithPromo: React.FC = () => {
  const originalPrice = 1000;
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleApplyCode = (code: string) => {
    if (code.toUpperCase() === "SAVE10") {
      setDiscountPercent(10);
      setSnackbar({
        open: true,
        message: "Promo code applied: 10% off",
        severity: "success",
      });
    } else {
      setDiscountPercent(0);
      setSnackbar({
        open: true,
        message: "Invalid promo code",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const discountAmount = (originalPrice * discountPercent) / 100;
  const finalAmount = originalPrice - discountAmount;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Typography variant="h5" gutterBottom>
        🧾 Checkout Summary
      </Typography>

      <Card className="shadow-lg">
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <Typography>Product: Hair Dryer</Typography>
            <Typography>₹{originalPrice.toFixed(2)}</Typography>
          </div>

          <Divider />

          <PromoCodeInput onApply={handleApplyCode} />

          {discountPercent > 0 && (
            <div className="text-green-600 text-sm">
              You saved ₹{discountAmount.toFixed(2)}!
            </div>
          )}

          <Divider />

          <div className="flex justify-between font-semibold text-lg">
            <Typography>Total</Typography>
            <Typography>₹{finalAmount.toFixed(2)}</Typography>
          </div>
        </CardContent>
      </Card>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CheckoutWithPromo;
