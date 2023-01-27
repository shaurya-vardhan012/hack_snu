import { Route, Routes } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Customer from "./pages/customer";
import Distributor from "./pages/distributor";
import Manufacture from "./pages/manufacture";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/customer" element={<Customer/>}/>
        <Route path="/distributor" element={<Distributor/>}/>
        <Route path="/manufacture" element={<Manufacture/>}/>
      </Routes>
    </div>
  );
}

export default App;
