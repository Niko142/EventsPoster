import { BrowserRouter, Route, Routes } from "react-router-dom";

import "@/index.scss";
import HomePage from "@/pages/Home";
import Contacts from "@/pages/Contacts";
import InfoBlock from "@/pages/Information";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/info" element={<InfoBlock />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
