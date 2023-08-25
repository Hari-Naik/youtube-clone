import React from "react";
import { RxAvatar } from "react-icons/rx";
import { SiYoutubestudio } from "react-icons/si";
import { MdSwitchAccount, MdKeyboardArrowRight } from "react-icons/md";
import { BsBoxArrowInRight } from "react-icons/bs";
import "./index.css";
import { auth } from "../../firebse";
import { useNavigate } from "react-router-dom";

type props = {
  photoUrl: any;
  userName: string | null | undefined;
  email: string | null | undefined;
  onClick: () => void;
};

function UserProfile({ photoUrl, userName, email, onClick }: props) {
  const navigate = useNavigate();
  const signOut = () => {
    auth.signOut();
    localStorage.removeItem("token");
    onClick();
    navigate("/");
  };
  return (
    <section className="user_profile">
      <div className="user_info">
        <img src={photoUrl || ""} alt="profile pic" />
        <div>
          <span className="user_name">{userName}</span>
          <span className="user_email">{email}</span>

          <p>Manage your Google Account</p>
        </div>
      </div>
      <div className="signout_section">
        <div>
          <RxAvatar className="icons" />
          <span>Create a channel</span>
        </div>
        <div>
          <SiYoutubestudio className="icons" />
          <span>YouTube Studio</span>
        </div>
        <div>
          <MdSwitchAccount className="icons" />
          <span>Switch account</span>
          <MdKeyboardArrowRight className="icons flex_end" />
        </div>
        <div className="sign_out" onClick={signOut}>
          <BsBoxArrowInRight className="icons" />
          <span>Sign out</span>
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
