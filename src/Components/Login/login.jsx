import '../Login/login.css';
import InstagramLogo from '../../assets/Instagram_logo.svg.png';
import { Link } from 'react-router-dom';
import LandingImg from './Picture-Logo/landing.png';
import Register from '../Register/register';
function LoginPage(){
  return(
      <main className='main-login-block'>
        <section className='Login-page'>
          <div className="left-section-login">
            <img className='Landingimg'  src={LandingImg} alt="landing Page Image" />
          </div>
          <div className="right-section-login">
            <div className="Login-Block">
              <section className='Logo-Div'>
                <img className='instagram-logo' src={InstagramLogo} alt="" />
              </section>
              <section className='input-div'>
                <input className='inputbar' type="text" placeholder='phone number ,username or email' />
              </section>
              <section className='input-div'>
                <input className='inputbar' type="Password" placeholder='Password' />
              </section>
              <section className='login-btn-div'>
                <Link to="/home">
                <button className='login-btn'>Log in</button>
                </Link>
              </section>
              <section className='or-div'>
               _____________________________________
               <div className='OR'>
                OR
               </div>
              </section>
              <section className='Account'>
                Dont you have account ?  
                <Link to="/Register">
                  <span className='Signup'>
                     Sign up
                  </span>
                </Link>
                
              </section>
              <section></section>
              <section></section>
            </div>
          </div>
        </section>
      </main>
  );
}
export default LoginPage