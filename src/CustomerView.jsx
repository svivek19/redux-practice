import React from "react";
import { useSelector } from "react-redux";

export default function CustomerView() {
  const customer = useSelector((state) => state.customer);

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
