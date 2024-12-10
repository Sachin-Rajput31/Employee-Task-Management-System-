import { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";
import AdminDashboard from "../Dashboard/AdminDashboard";
import EmployeeDashboard from "../Dashboard/EmployeeDashboard";

const Header = (props) => {
  // const [username, setusername] = useState('')
  // if(!data){
  //   setusername('admin')
  // }else{
  //   setusername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser('')
    // window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
   {!<EmployeeDashboard/> ?  <h1 className="text-2xl font-medium ">
        Hello <br />
        <span className="text-3xl font-bold ">{Data.firstName}</span>
      </h1> :  <h1 className="text-2xl font-medium ">
        Hello <br />
        <span className="text-3xl font-bold ">Admin👨‍💻</span>
      </h1>}
     
      <button
        onClick={logOutUser}
        className="bg-red-500 text-white font-medium px-5 py-2 rounded-sm "
      >
        log Out
      </button>
    </div>
  );
};

export default Header;
