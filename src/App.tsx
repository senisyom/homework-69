import Header from "./container/Header/Header";
import "./App.css";
import SearchForm from "./components/SearchForm/SearchForm";

const App = () => {


  
  return (
    <>
      <Header />
      <div className="container-sm mt-5">
        <SearchForm />
      </div>
    </>
  );
};

export default App;
