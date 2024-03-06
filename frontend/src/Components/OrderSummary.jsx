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
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        {/* ADDRESS BOX */}
        <Box className="address-box">
          <Typography variant="h6">Address:</Typography>

          <div>
            <il>
              <input type="radio" value="" id="yasir" name="person" />
              <label for="yasir">Yasir</label>
              <p>Johar colony</p>
            </il>

            {/* <il>
              <input type="radio" value="" id="fahad" name="person" />
              <label for="fahad">Fahad</label>
            </il> */}
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
            style={{ marginLeft: 10 }}
          />
        </div>

        {/* PAYMENT OPTION BOX */}
        <Box className="payment-options-box">
          <Typography variant="h6">Payment Options</Typography>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "20px" }}>
              <Badge badgeContent={0} color="warning">
                <PaymentIcon className="mx-1" />
              </Badge>
              <p>Mobile Account</p>
            </div>

            <div style={{ marginRight: "20px" }}>
              <Badge badgeContent={0} color="warning">
                <CurrencyBitcoinIcon className="mx-1" />
              </Badge>
              <p>Crypto</p>
            </div>

            <div>
              <Badge badgeContent={0} color="warning">
                <LocalShippingIcon className="mx-1" />
              </Badge>
              <p>Cash On Delivery</p>
            </div>
          </div>
        </Box>

        {/* ADDITIONAL INFORMATION */}
        <Box className="Additional-Information">
          <Typography variant="h6">Additional Information</Typography>
        </Box>
      </div>

      {/* ORDER SUMMARY */}
      <div style={{ flex: 1, marginLeft: "170px" }}>
        <Box className="Order-Summary">
          <Typography variant="h6">Order Summary</Typography>
        </Box>
      </div>
    </div>
  );
};

export default OrderSummary;
