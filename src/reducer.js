const reducer = (state, action) => {
  // console.log(state,action);
  switch (action.type) {
    case "loading":
      return {
        ...state,
        Loading: action.payload.load,
      };

    case "movieArr":
      return {
        ...state,
        Movie: action.payload.setMovie,
      };

    case "error":
      return {
        ...state,
        IsError: {
          show: action.payload.show,
          msg: action.payload.msg,
        },
      };
    case "search":
      return {
        ...state,
        Query: action.payload.query,
      };
    case "pageno":
      return {
        ...state,
        Page: action.payload.nav,
      };
    default:
      return { ...state };
  }

  //   return state;
};

export default reducer;
