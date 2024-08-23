import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from 'react-dom/client'; // Correct import
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store/ReduxStore";
import App from "./App";

// stack overflow

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <Routes>
//         <Route path="*" element={<App />} />
//       </Routes>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);