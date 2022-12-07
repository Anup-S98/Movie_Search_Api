import React, {
  useContext,
  useEffect,
  // useState,
  createContext,
  useReducer,
} from "react";
import reducer from "./reducer";

export const API = `https://www.omdbapi.com/?apikey=1a4141aa`;

const AppContext = createContext();

// const AppProvider = ({Children}) => {
//   return <AppContext.Provider>{Children}</AppContext.Provider>;
// };
const initialValue = {
  Loading: true,
  Movie: [],
  IsError: {
    show: true,
    msg: "",
  },
  Query: "movie",
  Page: 1,
};

const AppProvider = ({ children }) => {
  // const [Loading, setLoading] = useState(true);
  // const [Movie, setMovie] = useState([]);
  // const [IsError, setIsError] = useState({
  //   show: false,
  //   msg: "",
  // });
  // const [Query, setQuery] = useState("movie");
  // const [Page, setPage] = useState(1);

  const [state, dispatch] = useReducer(reducer, initialValue);
  // const Loading = state.Loading;
  const GetMoviesApi = async (URL) => {
    // setLoading(true);
    dispatch({
      type: "loading",
      payload: { load: true },
    });
    try {
      const res = await fetch(URL);
      const data = await res.json();
      // console.log(data);
      if (data.Response === "True") {
        // setLoading(false);
        dispatch({
          type: "loading",
          payload: { load: false },
        });
        // setMovie(data.Search);
        dispatch({
          type: "movieArr",
          payload: {
            setMovie: data.Search,
          },
        });
        // setIsError({
        //   show: false,
        //   msg: "",
        // });
        dispatch({
          type: "error",
          payload: {
            show: false,
            msg: "",
          },
        });
      } else if (data.Response === "False") {
        dispatch({
          type: "error",
          payload: {
            show: true,
            msg: data.Error,
          },
        });
        // console.log(IsError.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const debouncing = setTimeout(() => {
      GetMoviesApi(`${API}&s=${state.Query}&page=${state.Page}`);
    }, 500);
    return () => clearTimeout(debouncing);
  }, [state.Query, state.Page]);

  return (
    <AppContext.Provider
      value={{...state, dispatch}}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook for context api
const UseGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, UseGlobalContext };
