import Sidebar from '../Sidebar';
import Menu from '../Menu'
import { Outlet } from 'react-router-dom';
import './index.scss';
import Bottombar from '../Bottombar';

const Layout = () => {
    return (
        <>
        <div className="App">
          <Menu/>
          <Sidebar/>
          <Outlet/>
          <Bottombar/>

      </div>
      </>
    )
}

export default Layout;


