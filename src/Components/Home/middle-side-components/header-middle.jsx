import '../../../App.css';
import Profile from '../../../assets/profile.svg'
function Headermiddle({username='me'}){
  return(
    <div className="story-header">
      <section className="story-picture-mid">
        <img className='story-dp' src={Profile} alt="Profile-pictur"/>
      </section>
      <section className="story-username">
        {username}
      </section>
    </div>
  );
}
export default Headermiddle