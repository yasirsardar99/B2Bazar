import React from "react";
import { NavbarOfCart } from "./../Routes.js";
import { Box } from "@mui/material";
import "../Style/OrderSummary.css";

const OrderSummary = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        {/* ADDRESS BOX */}
        <Box className="address-box">
          <h>Address:</h>

          <div>
            <il>Yasir</il>
          </div>
          <div>
            <il>Fahad</il>
          </div>
        </Box>

        {/* BILLING IS SAME TEXT */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 0.1 }} />
          <input type="checkbox" />
          <label style={{ margin: 10 }}>
            {"Billing Address is same as Shipping Address"}
          </label>
        </div>

        {/* PAYMENT OPTION BOX */}
        <Box className="payment-options-box">
          <h>Payment Options</h>
        </Box>

        {/* ADDITIONAL INFORMATION */}
        <Box className="Additional-Information">
          <h>Additional Information</h>
        </Box>
      </div>

      {/* ORDER SUMMARY */}
      <div style={{ flex: 1, marginLeft: "170px" }}>
        <Box className="Order-Summary">
          <h>Order Summary</h>
        </Box>
      </div>
    </div>
  );
};
export default OrderSummary;
