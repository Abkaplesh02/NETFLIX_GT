import { LOGO } from "../utils/constants";

const Header=()=>{
    return(
<div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between" >
            <img className="w-44" src={LOGO} alt="Logo" />

            <div className="flex p-2">
                <img className="w-12 h-12" s alt="userIcon" />
                <button className=" text-white font-bold" >(Sign Out)</button>
            </div>
        </div>
    )
}

export default Header;