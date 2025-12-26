import '../Profile/profilePage.css';
import GridIcon from '../../assets/grid-1524-svgrepo-com.svg';
import Mentions from '../../assets/user-card-svgrepo-com.svg';
import Profile from '../../assets/profile.svg';

function ProfilePage(){
  return (
   
    <div className="Profile-Page-Main">
     
        <div className="profile-header">
          <section className='profile-picture-div'>
            <img className='profile-pic' src={Profile} alt="" />
          </section>
          <section className='profile-data'>
            <div className="profile-name">
              User
            </div>
            <div className='profile-subname'>
              ~subname
            </div>
            <div className='profile-pff'>
              <section className='left-profile'>
                <span>0</span> posts
              </section>
              <section className='middle-profile'>
                <span>0</span> followers
              </section>
              <section className='right-profile '>
                <span>0</span> followings
              </section>
            </div>
            <div className='caption'>
              this is my caption
              <span>@UserThreads</span>
            </div>
          </section>
        </div>
        <div className='profile-button-div'>
            <button>
              Edit Profile
            </button>
            <button>
              View Archive
            </button>
        </div>
        <div className='profile-icon-div'>
          <img src={GridIcon} alt="" />
          <img className='mention' src={Mentions} alt="" />
          
        </div>
        <div className='break'>
         _______________________________________________________________________________________________________________
        </div>
        <div className='NoPostDiv'>
              <h1>No Post Yet</h1>
        </div>
      
    </div>
  );

}
export default ProfilePage