import React from "react";
import { NavbarOfCart } from "./../Routes.js"; // Assuming the path is correct
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Badge,
} from "@mui/material";
import "../Style/OrderSummary.css"; // Assuming the CSS file exists
import PaymentIcon from "@mui/icons-material/Payment";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const OrderSummary = () => {
  return (
    <div className="Address-Pay-Additional">
      <div>
        {/* ADDRESS BOX */}
        <Box className="address-box">
          <Typography variant="h6">Address:</Typography>

          <div className="divider" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className="Address-list">
              <il>
                <input type="radio" value="" id="Home" name="person" />
                <label for="yasir">HOME</label>
                <p>Johar colony</p>
              </il>

              <il>
                <input type="radio" value="" id="Office" name="person" />
                <label for="yasir">OFFICE</label>
                <p>DHA Karachi</p>
              </il>
            </div>
          </div>
        </Box>

        {/* BILLING IS SAME TEXT */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Billing Address is same as Shipping Address"
            labelPlacement="end"
            b
            style={{ marginLeft: 13, marginTop: -9 }}
          />
        </div>

        {/* PAYMENT OPTION BOX */}
        <Box className="payment-options-box">
          <Typography variant="h6">Payment Options</Typography>
          <div className="divider" />

          <div
            style={{
              display: "flex",
              padding: "24px",
              align: "flex-start",
              gap: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: "50px",
                marginLeft: "20px",
              }}
            >
              <input type="radio" value="" id="Mobile Account" name="person" />
              <Badge badgeContent={0} color="warning">
                <PaymentIcon className="mx-1" />
              </Badge>
              <p style={{ margin: "0" }}>Mobile Account</p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: "50px",
              }}
            >
              <input type="radio" value="" id="Crypto" name="person" />
              <Badge badgeContent={0} color="warning">
                <CurrencyBitcoinIcon className="mx-1" />
              </Badge>
              <p style={{ margin: "0" }}>Crypto</p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                type="radio"
                value=""
                id="Cash On Delivery"
                name="person"
              />
              <Badge badgeContent={0} color="warning">
                <LocalShippingIcon className="mx-1" />
              </Badge>
              <p style={{ margin: "0" }}>Cash On Delivery</p>
            </div>
          </div>
        </Box>

        {/* ADDITIONAL INFORMATION */}
        <Box className="Additional-Information">
          <Typography variant="h6">Additional Information</Typography>
          <div className="divider" />
          <Typography variant="h7">Order Notes (Optional)</Typography>
          <p>Notes about your order, e.g. special notes for delivery</p>
        </Box>
      </div>

      {/* ORDER SUMMARY */}
      <div style={{ flex: 1, marginLeft: "170px" }}>
        <Box className="Order-Summary">
          <Typography variant="h6">Order Summary</Typography>
          <div className="divider" />
          <p>Sub-Total</p>
          <p>Shipping</p>
          <p>Discount</p>
          <p>Tax</p>
          <p>TOTAL: </p>
        </Box>
      </div>
    </div>
  );
};

export default OrderSummary;
