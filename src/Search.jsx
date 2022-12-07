import React from "react";
import { UseGlobalContext } from "./Context";
// import reducer from "./reducer";


const Search = () => {
  const { Query, dispatch , IsError} = UseGlobalContext();
  return (
    <>
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="col-lg-3 col-md-5 mx-auto my-4 px-3">
          <label htmlFor="search" className="form-label">
          search any movie name...
          </label>
          <input
            type="email"
            className="form-control shadow fs-5"
            id="search"
            placeholder="search any movie name..."
            value={Query}
            onChange={(e) => {
              // setQuery(e.target.value);
              dispatch({
                type: "search",
                payload:{
                  query : e.target.value,
                }
              })
            }}
          />
        </div>
      </form>
      <div>
        <p className="text-center text-danger text-decoration-underline fw-bold">
          {IsError.show && IsError.msg}
        </p>
      </div>
    </>
  );
};

export default Search;
