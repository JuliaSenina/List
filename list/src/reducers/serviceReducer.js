const initialState = {
  error: null,
  items: [],
  loading: false,
};

export default function serviceReducer(state = initialState, action) {
  switch (action.type) {
    case "SERVICES_LIST_REQUEST":
      return { ...state, items: [], error: null, loading: true };
    case "SERVICES_LIST_SUCCESS":
      const { items } = action.payload;
      return { ...state, items, loading: false, error: null };
    case "SERVICES_LIST_FAILURE":
      const { error } = action.payload;
      return { ...state, items: [], loading: false, error };
    default:
      return state;
  }
}
