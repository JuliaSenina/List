export function servicesListRequest() {
  return {
    type: "SERVICES_LIST_REQUEST",
    payload: {},
  };
}

export function servicesListSuccess(items) {
  return {
    type: "SERVICES_LIST_SUCCESS",
    payload: { items },
  };
}

export function servicesListFailure(error) {
  return {
    type: "SERVICES_LIST_FAILURE",
    payload: { error },
  };
}
