import "./reels.css";
import picture from "../../../assets/userimage.png";
import reel from "../../../assets/video.mp4";
import like from "../../../assets/love-svgrepo-com.svg";
import comment from "../../../assets/comment-svgrepo-com.svg";
import send from "../../../assets/sendIcon.svg";
import save from "../../../assets/save-svgrepo-com.svg";
import threedot from "../../../assets/three-dots-menu.svg";
function Reels({ username = "me" }) {
  return (
    <>
      <div className="Main-Reels-Block">
        <div className="video-block">
          <video className="video" src={reel} autoPlay muted loop playsInline />
          <div className="content-maker-info">
            <div className="first-block">
              <picture>
                <img className="picture" src={picture} alt="" />
              </picture>
              <div className="content-maker"> {username}</div>
              <div className="btn-div">
                <button className="Follow-btn">Follow</button>
              </div>
            </div>
            <div className="second-block">
              caption <span>....more</span>
            </div>
            <div className="third-block">
              <marquee behavior="" direction="">
                {username} &middot; Orginal song
              </marquee>
            </div>
          </div>
        </div>
        <div className="action-block">
          <div className="icon-div">
            <img className="reels-icons" src={like} alt="" />
          </div>
          <div className="icon-div">
            <img className="reels-icons" src={comment} alt="" />
          </div>
          <div className="icon-div-reel">
            <img className="reels-icons" src={send} alt="" />
          </div>
          <div className="icon-div-reel">
            <img className="reels-icons-save" src={save} alt="" />
          </div>
          <div className="icon-div-reel">
            <img className="reels-icons" src={threedot} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Reels;
