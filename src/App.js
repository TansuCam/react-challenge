import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";
import SearchResult from "./components/ListPage";
import AddLink from "./components/AddLink";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/listpage" element={<SearchResult />} />
          <Route exact path="/addlink" element={<AddLink />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
