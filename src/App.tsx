import Header from "./container/Header/Header";
import "./App.css";
import { useAppSelector } from "./app/hooks";
import { fetchAllChannels } from "./store/thunks/thunk";

const App = () => {
  const fetchLoading = useAppSelector(fetchAllChannels);
  return (
    <>
      <Header />
      <div></div>
    </>
  );
};

export default App;
