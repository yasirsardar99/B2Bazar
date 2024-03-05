import React from "react";
import { NavbarOfCart } from "./../Routes.js";
import { Box } from "@mui/material";
import '../Style/OrderSummary.css' // Import your CSS file

const OrderSummary = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: 1 }}>
        <Box className="address-box">
          Address:
          
          <div>
            <il>Yasir</il>
          </div>

          <div>
            <il>Fahad</il>
          </div>

        </Box>

        <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 0.1 }}/>
              <input type = "checkbox" /> 
              <label style={{margin: 10}}> Billing Address is same as Shipping Address</label>
        </div>


        <Box className="payment-options-box">
          Payment Options
        </Box>
        <Box className="Additional-Information">
          Additional Information
        </Box>
      </div>
      <div style={{ flex: 1, marginLeft: "200px" }}>
        <Box className="Order-Summary">
          Order Summary
        </Box>
      </div>
    </div>
  );
};

export default OrderSummary;
