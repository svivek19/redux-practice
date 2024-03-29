import React, { useState } from "react";
import CustomerView from "./CustomerView";

export default function CustomerAdd() {
  const [input, setInput] = useState("");
  const [customer, setCustomer] = useState([]);

  const handleAdd = () => {
    if (input) {
      setCustomer((prev) => [...prev, input]);
      setInput("");
    }
  };

  return (
    <div>
      <h3>Add new customer</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <div>
        <CustomerView customer={customer} />
      </div>
    </div>
  );
}
