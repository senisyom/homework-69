import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchShowDetailsLoading } from "../../store/thunks/thunk";
import { useParams } from "react-router-dom";

const ShowInfo: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const isLoading = useAppSelector((state) => state.channel.fetchLoading);
  const showDetails = useAppSelector((state) => state.channel.showDisplay);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id, 10);
      if (!isNaN(parsedId)) {
        dispatch(fetchShowDetailsLoading(parsedId));
      }
    }
  }, [id, dispatch]);

  return (
    <div>
      {isLoading ? (
        <h2>Loading Show Information...</h2>
      ) : (
        <div>
          <h3>{showDetails?.name}</h3>
          <p>{showDetails?.summary || "No description available"}</p>
          {showDetails?.image && (
            <img src={showDetails.image.medium} alt={showDetails.name} />
          )}
        </div>
      )}
    </div>
  );
};
export default ShowInfo;
