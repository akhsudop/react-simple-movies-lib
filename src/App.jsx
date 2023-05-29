import { SharedLayout } from "./components/SharedLayout.jsx";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import NotFound from "./pages/NotFound.jsx";

const MovieDetail = lazy(() => import("./pages/MovieDetail.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Movies = lazy(() => import("./pages/Movies.jsx"));
const Cast = lazy(() => import("./components/Cast.jsx"));
const Reviews = lazy(() => import("./components/Reviews.jsx"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetail />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
