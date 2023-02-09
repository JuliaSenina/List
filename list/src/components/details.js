import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Loader from "./loader";

export default function Details() {
  const { id } = useParams();
  const { items } = useSelector((state) => state.services);
  const current = items.find((el) => el.id === +id);
  const { loading } = useSelector((state) => state.services);

  return (
    <div className="details">
      {!loading ? (
        <>
          <div className="details-name">
            <span className="details-label">Услуга:</span> {current.name}
          </div>
          <div className="details-price">
            <span className="details-label">Цена:</span> {current.price}
          </div>
          <Link to="/" className="redirect">
            Вернуться назад
          </Link>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
