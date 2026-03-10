import "./message-bar.css";
import sendButton from "./../../../assets/sendIcon.svg";
import pfpButton from "../../../assets/profile.svg";
function MessageBar() {
  return (
    <div className="main-message-bar">
      <div className="send-icon-div">
        <img className="sendButton" src={sendButton} alt="" />
      </div>
      <div className="send-mid-block">Messages</div>
      <div className="send-right-block">
        <img className="profileButton" src={pfpButton} alt="" />
        <img className="profileButton1" src={pfpButton} alt="" />
        <img className="profileButton2" src={pfpButton} alt="" />
      </div>
    </div>
  );
}
export default MessageBar;
