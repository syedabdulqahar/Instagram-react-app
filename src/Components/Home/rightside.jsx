import Rightside_Profile from './right-side-components/right-top-profile.jsx';
import Suggestion_Info_Block from './right-side-components/suggestion-info.jsx';
import Suggestions from './right-side-components/suggestions.jsx';
import '../../App.css';
import Footer from './right-side-components/right-footer.jsx';
function Rightside(){
  return(
    <div className='rightside-div'>
      <div className='MyProfile'>
        <Rightside_Profile />
      </div>
      <div className='Suggestion-info-block' >
        <Suggestion_Info_Block/>
      </div>
      <div className='Suggestions-right'>
        <Suggestions/>
      </div>
      <div className='Right-Links'>
        <ul>
          <li>About</li> 
          <li>Help</li>
          <li>Press</li>
          <li>API</li>
          <li>Jobs</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Locations</li>
          <li>Language</li>
        </ul>
      </div>
      <div className='Footer'>
        <Footer/>
      </div>
    </div>
  );
}
export default Rightside