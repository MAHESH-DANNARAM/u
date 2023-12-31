import { Routes, Route } from "react-router-dom";
import Page from "./page";
import Page1 from "./page1";
import Page2 from "./page2";
import Login from "./Login";


function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Page/>} />
      <Route path="/page1" element={<Page1/>} />
      <Route path="/page2" element={<Page2/>} />
      <Route path="/pop" element={<Login/>} />
    </Routes>
    
  );
}
export default App;
