import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

export default function Header() {
  const navigateTo = useNavigate();
  const { state: loggedUser } = useLocation();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  //checking if loggedUser have a valid value By optional chaining if not ->loggedName===null\undefind
  let loggedName = loggedUser?.uName;

  //checking if loggedUser have a valid value By optional chaining
  const atIndex = loggedName?.indexOf("@");

  loggedName = loggedName?.slice(0, atIndex);

  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{ backgroundColor: "rgba(255, 255, 255, 0.425)" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand fs-3 " onClick={() => navigateTo("/")}>
          K-9-TDWAG
        </a>
        <button
          className="navbar-toggler"
          onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        >
          <span className=" navbar-toggler-icon"></span>
        </button>
        <div className={` navbar-collapse ${isHamburgerOpen && "collapse"}`}>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
             <hr/>
            </li>
            <li class="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item dropdown ">
              <a
                class="nav-link dropdown-toggle"
                role={"button"}
                onClick={() => setIsDropDown(!isDropDown)}
              >
                Dropdown
              </a>
              <ul
                className={`dropdown-menu text-center ${isDropDown && "show"}`}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.825)" }}
              >
                <li class="dropdown-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="dropdown-item">
                  <a class="nav-link" href="#">
                    K-9-Shop
                  </a>
                </li>
                <li class="dropdown-item">
                  <hr class="dropdown-divider" />
                </li>
                <li class="dropdown-item">
                  <a
                    class="nav-link fs-4"
                    href="#"
                    onClick={() => navigateTo('/LoginPage')}
                  >
                    {loggedName ? "Profile" : "Sign-In"}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <header className="myNav">
    //   <div className="nav_link">
    //  <span className="nav_link" onClick={()=>navigateTo('/',{state:loggedUser})}>Home</span>
    //   </div>

    //   <span className="guest">
    //     Welcome<span>{loggedName ? loggedName : `Guest`}</span>
    //   </span>

    //   <span
    //     onClick={() => {
    //       navigateTo(`/`, {});
    //     }}
    //     className="nav_link"
    //   >
    //     Logout
    //   </span>

    //   <ul>
    //     {
    //       //putting those tags in drop down menu and render according to the loggeduser if it an admin ..-in the drop down he should also see the addProduct comp and AllUserComp with allow info,also if it doable try to clone and implement some Bootstrap!
    //     }
    //     {loggedName && (
    //       <li>
    //         <span
    //           className="nav_link"
    //           onClick={() =>
    //             navigateTo(
    //              `/trainingRoom`,
    //               { state: loggedUser }
    //             )
    //           }
    //         >TrainingRoom</span>
    //       </li>
    //     )}
    //     {!loggedName && (
    //       <li className="nav_link">
    //         <Link to="/login">Login</Link>
    //       </li>
    //     )}
    //   </ul>
    // </header>
  );
}
