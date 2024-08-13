import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Monthly from "../Pages/Monthly";
import Weekly from "../Pages/Weekly";
import Daily from "../Pages/Daily";
import Navbar from "./Navbar";
import GlobalStyles from "../styles/GlobalStyles";

function AppLayout() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Navigate replace to="Weekly" />} />
          <Route path="Weekly" element={<Weekly />} />
          <Route path="Daily" element={<Daily />} />
          <Route path="Monthly" element={<Monthly />} />
          <Route path="*" element={<Navigate replace to="Weekly" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppLayout;
