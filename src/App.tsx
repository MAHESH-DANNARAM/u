import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Page from "./page";
import Page1 from "./page1";


function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Page/>} />
      <Route path="/page1" element={<Page1/>} />
    </Routes>
    
  );
}
export default App;
