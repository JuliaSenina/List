import React, { useEffect } from "react";
import Services from "./components/services";
import Details from "./components/details";
import { Routes, Route } from "react-router-dom";
import { servicesListRequest } from "./actions/servicesActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(servicesListRequest());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Services />} />
      <Route path="/:id/details" element={<Details />} />
    </Routes>
  )
}

export default App;