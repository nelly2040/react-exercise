import React from "react";
import items from "./items";
import "./index.css";

function ShopKeeperApp() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* Render rows for actual items */}
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              {/* Format unit price with commas */}
              <td>{item.unit_cost.toLocaleString()}</td>
              <td>{item.qty}</td>
              {/* Calculate total and format with commas */}
              <td>{(item.unit_cost * item.qty).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShopKeeperApp;
