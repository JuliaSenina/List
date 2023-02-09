import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { servicesListRequest } from "../actions/servicesActions";
import Item from "./item";
import Loader from "./loader";

export default function List() {
  const { items, loading, error } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  function requestReply() {
    dispatch(servicesListRequest());
  }
  if (error) {
    return (
      <div className="error">
        <span className="error-text">Произошла ошибка</span>
        <button className="error-btn" onClick={requestReply}>
          Повторить запрос
        </button>
      </div>
    );
  }
  return (
    <>
      {loading ? <Loader /> : items.map((el) => <Item {...el} key={el.id} />)}
    </>
  );
}
