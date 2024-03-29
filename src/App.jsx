import React from "react";
import CustomerAdd from "./CustomerAdd";
import { Provider } from "react-redux";
import { store } from "./store";
import CustomerView from "./CustomerView";

const App = () => {
  return (
    <Provider store={store}>
      <>
        <h1>React Redux Example</h1>
        <CustomerAdd />
        <CustomerView />
      </>
    </Provider>
  );
};

export default App;
