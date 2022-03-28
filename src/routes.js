import Home from './pages/Home';
import Detail from './pages/Detail';
import TopArtists from './pages/TopArtists';


const routes = [
  {title: "Home", path:"/", element: Home },
  {title: "TopArtists", path:"/top-artists", element: TopArtists },
  {title: "Detail", path: "/artist/:artist_url", element: Detail },
]

export default routes