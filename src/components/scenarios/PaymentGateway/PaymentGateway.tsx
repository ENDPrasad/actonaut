import { useRef, useEffect, useState } from "react";
import { Box, Button, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";

const IframeContent = () => `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        body {
          font-family: sans-serif;
          padding: 20px;
          margin: 0;
          background-color: #f9f9f9;
        }
        h2 {
          font-size: 18px;
          margin-bottom: 16px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 20px;
        }
        .form-group input {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }
        #pay-btn {
          padding: 10px;
          background-color: #1976d2;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .error {
          color: red;
          font-size: 13px;
          margin-top: -6px;
          margin-bottom: 8px;
        }
      </style>
    </head>
    <body>
      <h2>Secure Payment</h2>
      <div class="form-group">
        <input id="cardNumber" placeholder="Card Number" />
        <div id="cardNumberError" class="error"></div>
        <input id="expiry" placeholder="Expiry Date (MM/YY)" />
        <div id="expiryError" class="error"></div>
        <input id="cvv" placeholder="CVV" type="password" />
        <div id="cvvError" class="error"></div>
        <button id="pay-btn">Pay Now</button>
      </div>
      <script>
        document.getElementById('pay-btn').addEventListener('click', () => {
          const cardNumber = document.getElementById('cardNumber').value.trim();
          const expiry = document.getElementById('expiry').value.trim();
          const cvv = document.getElementById('cvv').value.trim();

          const cardNumberError = document.getElementById('cardNumberError');
          const expiryError = document.getElementById('expiryError');
          const cvvError = document.getElementById('cvvError');

          cardNumberError.textContent = '';
          expiryError.textContent = '';
          cvvError.textContent = '';

          let isValid = true;

          if (!/^\\d{16}$/.test(cardNumber)) {
            cardNumberError.textContent = 'Card number must be 16 digits.';
            isValid = false;
          }

          if (!/^(0[1-9]|1[0-2])\\/(\\d{2})$/.test(expiry)) {
            expiryError.textContent = 'Expiry must be in MM/YY format.';
            isValid = false;
          }

          if (!/^\\d{3}$/.test(cvv)) {
            cvvError.textContent = 'CVV must be 3 digits.';
            isValid = false;
          }

          if (isValid) {
            window.parent.postMessage({ cardNumber, expiry, cvv }, '*');
          }
        });
      </script>
    </body>
  </html>
`;

export default function IframePaymentMock() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [open, setOpen] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({ cardNumber: '', expiry: '', cvv: '' });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.error) {
        setError(event.data.error);
        return;
      }

      if (event.data.cardNumber && event.data.expiry && event.data.cvv) {
        setPaymentDetails(event.data);
        setOpen(true);
        setError(null);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <Box className="max-w-xl mx-auto mt-10 p-6 rounded-xl shadow-lg bg-white">
      <Typography variant="h5" className="mb-4">
        Checkout Page
      </Typography>

      <iframe
        ref={iframeRef}
        title="Payment Form"
        srcDoc={IframeContent()}
        className="w-full h-[380px] border rounded-md"
      />

      {error && (
        <Typography color="error" className="mt-4">
          {error}
        </Typography>
      )}

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Payment Successful</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your payment has been processed successfully with the following details:
          </DialogContentText>
          <Box className="mt-4 space-y-2">
            <Typography>Card Number: {paymentDetails.cardNumber}</Typography>
            <Typography>Expiry Date: {paymentDetails.expiry}</Typography>
            <Typography>CVV: {paymentDetails.cvv}</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
