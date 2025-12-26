import '../Login/login.css';
import InstagramLogo from '../../assets/Instagram_logo.svg.png';

function LoginPage(){
  return(
    <div className="Login-Page-Main">
      <main className="Login-Page-Block">
        <div className="logo-div">
          <img className='Login-insta-logo' src={InstagramLogo} alt="" />
        </div>
        <div className="input-section">
          <div className='UserName'>
            Username: 
            <input className='input' type="text"  />
          </div>
          <div className='Password'>
            Password:
            <input className='input' type="text" />
          </div>
          <div className="button-div">
            <button className='signup'>
              Sign Up
            </button>
            
            <button className='Login'>
                Login
            </button>
           
          </div>
           <div className="register-div">
                 Register account ?
            
           </div>
          </div>
      </main>
    </div>
  );
}
export default LoginPage