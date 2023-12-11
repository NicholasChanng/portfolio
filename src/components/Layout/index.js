import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import './index.scss';
import Bottombar from '../Bottombar';

const Layout = () => {
    return (
        <>
        <div className="App">
          <Sidebar/>
          <Outlet/>
          <Bottombar/>
      </div>
      </>
    )
}

export default Layout;


