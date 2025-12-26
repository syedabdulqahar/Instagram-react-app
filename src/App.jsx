import './App.css';
import MiddleExplore from './Components/Explore/middle-explore';

import Leftside from "./Components/Home/leftside";
import  MiddleSide from "./Components/Home/middle";
import Rightside from "./Components/Home/rightside";
import GridIcon from '../src/assets/grid-1524-svgrepo-com.svg';
import Mentions from '../src/assets/user-card-svgrepo-com.svg';
import './Components/Profile/profilePage.css';
import Profile from '../src/assets/profile.svg';
import ProfilePage from './Components/Profile/profilePage';
import LoginPage from './Components/Login/login';
function App(){
  return(
   
    
    
  <div className="App">

     {/**     INSTRUCTIONS  
      * Sir i have partitioned every page with comments
      * You are requestion to just remove comments from blocks one by one
      * BY DEFAULT EXECUTION is LOGIN PAGE
      * first block -> Login page 
      * second block -> comment component call of LoginPage and remove comment from Home block
      * thirdblock-> comment home execution and remove comments from Explore page
      * fourthblock-> comment home execution and remove comments from Profile page
      
      */}
        
         <LoginPage/>
  
     
     {/** Remove Comments To Exectute */}

      
     {/** ---------------- Home Execution      
        <div className="leftside">
          <Leftside/>
        </div>
        <div className="middle">
          <MiddleSide />
        </div>
        <div className="rightside">
         <Rightside />
        </div>
      */}

      
      {/** -----------------Explore Execution
         
        <div className="leftside">
          <Leftside/>
        </div>
        <div className='middle'>
          <MiddleExplore/>
        </div>
        <div className="rightside">
          Explore  
        </div>
      
         * 
         * 
         * 
         */}


    {/** ----------------------Profile Page
       *<div className="leftside">
          <Leftside/>
        </div>
        <ProfilePage/>
     * 
     */}   
      
        
    </div>
    
  );      
   
}

export default App;