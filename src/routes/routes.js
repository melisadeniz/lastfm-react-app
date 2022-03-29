import Home from "../pages/Home";
import Detail from "../pages/Detail";

const routes = [
  { title: "Home", path: "/", element: Home },
  { title: "Detail", path: "/artist/:artist_url", element: Detail },
];

export default routes;
