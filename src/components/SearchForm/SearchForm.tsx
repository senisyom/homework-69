import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTvShows } from "../../store/thunks/thunk";
import { SearchShows } from "../../store/slices/slice";
import { IChannel } from "../../types";

const SearchForm: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const dispatch = useAppDispatch();
  const shows = useAppSelector(SearchShows);
  const isLoading = useAppSelector((state) => state.channel.fetchLoading);

  useEffect(() => {
    if (query.trim().length > 0) {
      dispatch(fetchTvShows(query));
    }
  }, [query, dispatch]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <div className="input-group flex-nowrap" style={{ width: "500px" }}>
        <span className="me-4 pt-2">Search for TV show:</span>
        <input
          type="text"
          className="form-control"
          placeholder="Choose show"
          aria-label="Search"
          value={query}
          onChange={onChange}
        />
      </div>

      {query.length > 0 && !isLoading && (
        <div className="autocomplete mt-4" style={{ position: "absolute" }}>
          {shows.length === 0 ? (
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
      )}

      {isLoading && <div>Загрузка...</div>}
    </div>
  );
};

export default SearchForm;
