import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Customer from "./pages/customer";
import Distributor from "./pages/distributor";
import Manufacture from "./pages/manufacture";
import Manufacture_login from "./pages/manufacture_login";
import Distributer_login from "./pages/distributer_login";
import Customer_login from "./pages/customer_login";
import Choose from "./pages/choose";
import Analytic from "./pages/analytic";

import { useContext } from 'react';
import loginContext from './context/usecontext';
import Context from './context/context'

function App() {
  return (
    <Context>
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/analytic" element={<Analytic/>}/>
        <Route path="/choose" element={<Choose/>}/>
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/distributor" element={<Distributor/>}/>
        <Route path="/manufacture" element={<Manufacture/>}/>
        <Route path="/manufacture_login" element={<Manufacture_login/>}/>
        <Route path="/distributer_login" element={<Distributer_login/>}/>
        <Route path="/customer_login" element={<Customer_login/>}/>
      </Routes>
    </div>
    </Context>
  );
}

export default App;
