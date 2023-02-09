import React from "react";
import { Link } from "react-router-dom";

export default function Item({ name, id }) {
  return (
    <div className="services-item">
      <Link to={`/${id}/details`}>{name}</Link>
    </div>
  );
}
