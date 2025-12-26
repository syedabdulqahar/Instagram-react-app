import '../../../App.css';
import Rightside_Profile from './../right-side-components/right-top-profile.jsx';
function Suggestions(){
  return(
    <div className='Main-Suggestion'>
     
      <Rightside_Profile buttonText='Follow' UserName='User1' />
      <Rightside_Profile buttonText='Follow' UserName='User2'/>
      <Rightside_Profile buttonText='Follow' UserName='User3'/>
      <Rightside_Profile buttonText='Follow' UserName='User4'/>
      <Rightside_Profile buttonText='Follow' UserName='User5'/>
      <Rightside_Profile buttonText='Follow' UserName='User6'/>
      <div style={{textAlign:'center' ,fontWeight:'bold',fontSize:'larger'}}>&middot;&middot;&middot;</div>
     
    </div>
  ); 
}
export default Suggestions