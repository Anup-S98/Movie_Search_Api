import React from "react";
import { NavLink } from "react-router-dom";
import { UseGlobalContext } from "./Context";

const Movies = () => {
  const { Movie, Loading, Page, dispatch } = UseGlobalContext();
  if (Loading) {
    return <h1 className="text-center mt-5">Loading...</h1>;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="my-4 text-center">
          <button
            type="button"
            className="btn btn-primary px-4 btn-lg float-start"
            // onClick={() => Page !== 1 && setPage(Page - 1)}
            onClick={() =>
              Page !== 1 &&
              dispatch({
                type: "pageno",
                payload: {
                  nav: Page - 1,
                },
              })
            }
          >
            Prev
          </button>
          <span className="fw-bold">Page {`${Page} of 100`}</span>
          <button
            type="button"
            className="btn btn-primary px-4 btn-lg float-end"
            onClick={() =>
              dispatch({
                type: "pageno",
                payload: {
                  nav: Page + 1,
                },
              })
            }
          >
            Next
          </button>
        </div>
        {Movie.map((ele) => {
          const { Title, Poster, imdbID } = ele;
          return (
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={imdbID}>
              <NavLink to={`movie/${imdbID}`} className="text-decoration-none">
                <div className="card border-0 shadow-lg ">
                  <img
                    src={Poster}
                    className="card-img-top "
                    alt="..."
                    style={{ maxHeight: "25rem" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-dark">
                      {Title.length > 20
                        ? Title.substring(0, 20) + "..."
                        : Title + "."}
                    </h5>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
        <div className="my-4 text-center">
          <button
            type="button"
            className="btn btn-primary px-4 btn-lg float-start"
            // onClick={() => Page !== 1 && setPage(Page - 1)}
            onClick={() =>
              Page !== 1 &&
              dispatch({
                type: "pageno",
                payload: {
                  nav: Page - 1,
                },
              })
            }
          >
            Prev
          </button>
          <span className="fw-bold">Page {`${Page} of 100`}</span>
          <button
            type="button"
            className="btn btn-primary px-4 btn-lg float-end"
            onClick={() =>
              dispatch({
                type: "pageno",
                payload: {
                  nav: Page + 1, 
                },
              })
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movies;
