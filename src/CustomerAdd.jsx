import React, { useState } from "react";
import { addCustomer as addCustomerAction } from "./slices/CustomerSlice";
import { useDispatch } from "react-redux";

export default function CustomerAdd() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input) {
      dispatch(addCustomerAction(input));
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
    </div>
  );
}
