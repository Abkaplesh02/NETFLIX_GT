import { signOut } from "firebase/auth";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header=()=>{
    const navigate=useNavigate();
    const store=useSelector((store)=>store.user);

    const handleSignOut=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }
    return(
<div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between" >
            <img className="w-44" src={LOGO} alt="Logo" />

            {store && <div className="flex p-2">
                <img className="w-12 h-12 rounded-full" src="https://lh3.googleusercontent.com/ogw/AF2bZygS19Vnb1PQ0rOPC3BWIbJzy8-8EgCWbEsy6RoQeaoQgw=s32-c-mo" alt="userIcon" />
                <button className=" text-white font-bold" onClick={handleSignOut}>(Sign Out)</button>
            </div>}
        </div>
    )
}

export default Header;