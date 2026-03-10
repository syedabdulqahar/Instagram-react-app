import "./App.css";
import MiddleExplore from "./Components/Explore/middle-explore";
import Leftside from "./Components/Home/leftside";
import MiddleSide from "./Components/Home/middle";
import Rightside from "./Components/Home/rightside";
import GridIcon from "../src/assets/grid-1524-svgrepo-com.svg";
import Mentions from "../src/assets/user-card-svgrepo-com.svg";
import "./Components/Profile/profilePage.css";
import Profile from "../src/assets/profile.svg";
import ProfilePage from "./Components/Profile/profilePage";
import LoginPage from "./Components/Login/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Components/Register/register";
import MessageBar from "./Components/Secondary-Components/MessageBar/message-bar.jsx";
import Reels from "./Components/Secondary-Components/ReelOnClick/reels.jsx";
import MainReel from "./Components/Reel/main-reel.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/Login",
      element: (
        <>
          <div className="leftside">
            <Leftside />
          </div>
          <div className="middle">
            <MiddleSide />
          </div>
          <div className="rightside">
            <Rightside />
          </div>
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <div className="leftside">
            <Leftside />
          </div>
          <div className="middle">
            <MiddleSide />
          </div>
          <div className="rightside">
            <Rightside />
          </div>
          <MessageBar />
        </>
      ),
    },
    {
      path: "/Explore",
      element: (
        <>
          <div className="leftside">
            <Leftside />
          </div>
          <div className="middle">
            <MiddleExplore />
          </div>
          <MessageBar />
        </>
      ),
    },
    {
      path: "/Reels",
      element: (
        <>
          <MainReel />
        </>
      ),
    },
    {
      path: "/Profile",
      element: (
        <>
          <div className="leftside">
            <Leftside />
          </div>
          <ProfilePage />
        </>
      ),
    },
    {
      path: "/Register",
      element: (
        <>
          <Register />
        </>
      ),
    },
  ]);
  return (
    <div className="App">
      <>
        <RouterProvider router={router} />
      </>
    </div>
  );
}
export default App;
