import Sidebar from '../Sidebar';
import Menu from '../Menu'
import './index.scss';

const Layout = () => {
    return (
        <div className="App">
          <Sidebar/>
          <div>
            <Menu/>
          </div>
          <div className="page">
            <span className="tags middle-text">Hi! My Name is Nicholas Channg and
            I am a Freshman studying Computer Science at Cornell University.</span>
          </div>
      </div>
    )
}

export default Layout;


