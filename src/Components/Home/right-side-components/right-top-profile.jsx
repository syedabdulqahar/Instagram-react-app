import Profile from '../../../assets/profile.svg';
import "../../../App.css";
function Rightside_Profile({buttonText ='Switch',UserName='Me'}){
 
  return(
    <main className='main-block-right'>
      <div className='left-block-right'>
        <img className='profilepic-right-main' src={Profile} alt="" />
      </div>
      <div className='middle-block-right'>
        <section className="firstrow-right">
          {UserName}
        </section>
        <section className="secondrow-right">
          this is my instagram account
        </section>
      </div>
      <div className='right-block-right'>
          <li><a href="">{buttonText}</a></li>
      </div>
    </main>
  );
}
export default Rightside_Profile