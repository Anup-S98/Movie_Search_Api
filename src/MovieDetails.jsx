import { React, useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API } from "./Context";

const MovieDetails = () => {
  const { id } = useParams();
  const [Loading, setLoading] = useState(true);
  const [Movie, setMovie] = useState();

  const GetMoviesApi = async (URL) => {
    setLoading(true);
    try {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setLoading(false);
        setMovie(data);
      } else if (data.Response === "False") {
        // console.log(IsError.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const debouncing = setTimeout(() => {
      GetMoviesApi(`${API}&i=${id}`);
    });
    return () => clearTimeout(debouncing);
  }, [id]);

  if(Loading){
    return <h1 className="text-center mt-5">Loading...</h1>
   }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto my-5">
            <div className="card mb-3 shadow-lg border-0">
              <img
                src={Movie.Poster}
                className="card-img-top"
                alt="..."
                style={{ maxHeight: "21rem" }}
              />
              <div className="card-body">
                <h5 className="card-title">{Movie.Title}</h5>
                <p className="card-text">{Movie.Plot}</p>
                <p className="card-text">{Movie.Actors}</p>
                <p className="card-text">{Movie.Language}</p>
                <p className="card-text">
                  <small className="text-muted">{Movie.Year}</small>
                </p>
                <NavLink to={"/"}><button type="button" className="btn btn-primary">Back</button></NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
