import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HojaPrincipal from "./Componente/Hoja_Principal";
import Principal from "./Componente/Principal";


function App() {

  return (
    <Router>
      <>
      <Routes>
          <Route exact path="/HOJA_VIDA/" element={<Principal/>} />
          <Route exact path="/HojaVida1" element={<HojaPrincipal />} />
      </Routes>
      </>
    </Router>
  );
}

export default App;
