import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { fetchTvShows } from "../../store/thunks/thunk";

const ShowInfo = () => {
  useEffect(() => {
    if (query.name.length > 0) {
      dispatch(fetchTvShows(query.name));
    }
  }, [query, dispatch]);

  return <div></div>;
};

export default ShowInfo;
