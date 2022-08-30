import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

function Navigation() {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          {/* Link is essentially an anchor tag that appropriately dynamically uses the correct browser you have installed*/}
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {/* ternary statement, if currentUser is true (not null), Sign Out renders, else Sign In */}
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      {/* we are using the outlet to render our components inside our navigation*/}
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
