import Leftside from "../Home/leftside";
import MessageBar from "../Secondary-Components/MessageBar/message-bar";
import Reels from "../Secondary-Components/ReelOnClick/reels";
import "./main-reel.css";
function MainReel() {
  return (
    <>
      <div className="leftside">
        <Leftside />
      </div>
      <div className="Main-ReelPage">
        <div className="Reel_VH">
          <Reels username="me" />
        </div>
        <div className="Reel_VH">
          <Reels username="qahar" />
        </div>
        <div className="Reel_VH">
          <Reels username="fahad" />
        </div>
        <div className="Reel_VH">
          <Reels username="irfan" />
        </div>
        <div className="Reel_VH">
          <Reels username="junejo" />
        </div>
      </div>
      <MessageBar />
    </>
  );
}
export default MainReel;
