import '../../App.css';
import Home from '../../assets/home.svg';
import Explore from '../../assets/explore.svg';
import Search from '../../assets/search.svg';
import Reels from '../../assets/reels.svg';
import Messages from '../../assets/messages.svg';
import Notification from '../../assets/notifications.svg';
import Create from '../../assets/upload .svg';
import Profile from '../../assets/profile.svg';
import InstagramLogo from '../../assets/Instagram_logo.svg.png';
import More from '../../assets/more.svg';
import Meta from '../../assets/Meta.svg';
import '../../Components/Home/leftside-links.css';
import LoginPage from '../Login/login';


function Leftside(){
  return(
    <div className='leftside-div'>
        <a href='./../Login/login.jsx'>
        <div className='Instagram-logo-div'>
          <img className='Instagram-logo' src={InstagramLogo} alt="Instagram" />
        </div> 
        </a>
        <div className='Instagram-sidebar-links'>
          {/*this is Middle part of instagram sidebar */}
          <div className="Instagram-sidebar-links-mid">
            <div className="sidebar-links">
              <a href="../../App.jsx">
              <div className="sidebar-link-inside">
                <img className='sidebar-icons' src={Home}alt="" />
                Home
              </div>
              </a>
            </div>
            <div className="sidebar-links">
              <div className="sidebar-link-inside">
                <img className='sidebar-icons' src={Search} alt="" />
                Search
              </div>
            </div>
            <div className="sidebar-links">
              <div className="sidebar-link-inside">
               <img className='sidebar-icons' src={Explore} alt="" />
               Explore
              </div>
            </div>
            <div className="sidebar-links">
              <div className="sidebar-link-inside">
                <img className='sidebar-icons reel-icon' src={Reels} alt="" />
                Reels
              </div>
           </div>
            <div className="sidebar-links">
              <div className="sidebar-link-inside">
                <img className='sidebar-icons' src={Messages} alt="" />
                Messages
              </div>
            </div>
            <div className="sidebar-links">
              <div className="sidebar-link-inside">
               <img  className="sidebar-icons" src={Notification} alt="" />
               Notifications
              </div>
            </div>
            <div className="sidebar-links">
              <div className="sidebar-link-inside">
                <img className='sidebar-icons' src={Create} alt="" />
                Create
              </div>
            </div>
            <div className="sidebar-links">
              <div className="sidebar-link-inside">
               <img className='sidebar-icons' src={Profile} alt="" />
                Profile
              </div>
            </div>
          </div>
          {/*this is last part of instagram sidebar */}
          <div className="Instagram-sidebar-bottom">
            <div className="sidebar-links">
              <div className="sidebar-link-inside">
                <img className='sidebar-icons' src={More} alt="" />
                More
              </div>
            </div>
            <div className="sidebar-links">
              <div className="sidebar-link-inside">
                <img className='sidebar-icons' src={Meta} alt="" />
                Meta
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
export default Leftside