import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTvShows } from "../../store/thunks/thunk";
import { SearchShows } from "../../store/slices/slice";
import { IChannel } from "../../types";

const SearchForm: React.FC = () => {
  const [query, setQuery] = useState({ name: "" });
  const dispatch = useAppDispatch();
  const shows = useAppSelector(SearchShows);

  useEffect(() => {
    if (query.name.length > 0) {
      dispatch(fetchTvShows(query.name));
    }
  }, [query, dispatch]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery((prev) => ({
      ...prev,
      name: event.target.value,
    }));
  };

  return (
    <div>
      <div className="input-group flex-nowrap" style={{ width: "500px" }}>
        <span className="me-4 pt-2">Search for TV show:</span>
        <input
          type="text"
          className="form-control"
          placeholder="Choose show"
          aria-label=""
          aria-describedby="addon-wrapping"
          value={query.name}
          onChange={onChange}
        />
      </div>
      <div className="autocomplete mt-4" style={{ position: "absolute" }}>
        {shows.length <= 0 ? (
          <div>Не найдено</div>
        ) : (
          <ul className="list-unstyled">
            {shows.map((show: IChannel) => (
              <li key={show.id} className="show-item">
                <NavLink to={`/shows/${show.id}`}>{show.name}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
      <></>
    </div>
  );
};

export default SearchForm;
