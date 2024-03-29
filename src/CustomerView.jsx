import React from "react";

export default function CustomerView({ customer }) {
  return (
    <div>
      <h3>Customer List</h3>
      <ul style={{ listStyle: "none" }}>
        {customer.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}
