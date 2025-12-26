import '../../App.css';
import Headermiddle from './middle-side-components/header-middle.jsx';
import PostMiddle from './middle-side-components/body-middle.jsx';
function MiddleSide(){
  return(
     <div className="main-middleside-div">
        <section className="Header-middle-main">
          <Headermiddle />
          <Headermiddle username='User1'/>
          <Headermiddle username='User2'/>
          <Headermiddle username='User3'/>
          <Headermiddle username='User4'/>
          <Headermiddle username='User5'/>
          <Headermiddle username='User6'/>
          <Headermiddle username='User7'/>

        </section>
        <section className="Body-middle-main">
          <PostMiddle/>
          <PostMiddle username='user1' location='pakistan'/>
          <PostMiddle username='user2' location='india'/>
          <PostMiddle username='user3' location='zimbsabve'/>
        </section>
      </div>
  );
}
export default MiddleSide