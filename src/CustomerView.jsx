import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "./slices/CustomerSlice";

export default function CustomerView() {
  const customer = useSelector((state) => state.customer);
  const dispatch = useDispatch();

  const delHandler = (customer) => {
    dispatch(deleteCustomer(customer));
  };

  return (
    <div>
      <h3>Customer List</h3>
      <ul style={{ listStyle: "none" }}>
        {customer.map((element, index) => (
          <li key={index}>
            {element} <button onClick={() => delHandler(element)}>del</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
