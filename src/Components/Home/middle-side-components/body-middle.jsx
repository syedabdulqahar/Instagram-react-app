import Profile from '../../../assets/profile.svg';
import threedot from '../../../assets/three-dots-menu.svg';
import instagrampostlogo from '../../../assets/InstaPost.svg';
import loveicon from '../../../assets/love-svgrepo-com.svg';
import comment from '../../../assets/comment-svgrepo-com.svg';
import share from '../../../assets/share-1-svgrepo-com.svg';
import save from '../../../assets/save-svgrepo-com.svg';
import '../../../App.css';

function PostMiddle({username='Me',time='4h',location='doha'}){
  return(
      <div className="Main-Post-Block">
        <section className='Header-Post'>
          <div className='Post-left-block-h'>
            <img className='Post-profile-pic' src={Profile} alt="" />
          </div>
          <div className='Post-middle-block-h'>
              <div className='Post-username'>
                {username}  <span> <span>&middot;</span> {time} </span>
              </div>
              <div className='Post-user-location'>
                {location}
              </div>
          </div>
          <div className='Post-right-block-h'>
            <img className='Post-menu' src={threedot} alt="" />
          </div>
        </section>
        <section className='main-middle-post'>
          <img className='instagram-post-logo' src={instagrampostlogo} alt="" />
        </section>
        <section className='Post-icon-div'>
          <div className='left-side-icon'>
            <img className='icon-post' src={loveicon} alt="" />
            <img className='icon-post' src={comment} alt="" />
            <img className='icon-post1' src={share } alt=""/>
          </div>
          <div className='right-side-icon'>
            <img className='icon-post-save' src={save} alt="" />
          </div>

        </section>
        <section className='Post-info-div'>
          <span>{username}</span> this is the information of my post
        </section>
        <section className='Post-translation-div'>
          See translation
        </section>
      </div>

  );
}
export default PostMiddle