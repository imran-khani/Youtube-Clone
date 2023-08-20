import "./App.css";
import { AppContext } from "./context/contextApi";
import Feed from "./components/Feed";
import Header from "./components/Header";
import LeftNav from "./components/LeftNav";
import LeftMenuItems from "./components/LeftMenuItems";
import searchResults from "./components/searchResults";
import searchResultVideoCard from "./components/searchResultVideoCard";
import VideoCard from "./components/VideoCard";
import VideoDetails from "./components/VideoDetails";
import SuggestionCard from "./components/SuggestionCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/searchResult/:searchQuery" element={<searchResults/>} />
          <Route path="/video/:id"  element={<VideoDetails/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
