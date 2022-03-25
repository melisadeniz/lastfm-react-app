import Home from './pages/Home';
import Details from './pages/Details';
// import NotFound from './pages/NotFound';


const routes = [
  {title: "Home", path:"/", element: Home },
  {title: "Details", path: "/artist/:mbid", element: Details },
  // {title:"NotFound", path: "*", element: NotFound }
]

export default routes