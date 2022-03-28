import Home from './pages/Home';
import Detail from './pages/Detail';
// import NotFound from './pages/NotFound';


const routes = [
  {title: "Home", path:"/", element: Home },
  {title: "Detail", path: "/artist/:artist_url", element: Detail },
  // {title:"NotFound", path: "*", element: NotFound }
]

export default routes