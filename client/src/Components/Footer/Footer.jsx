import React, { useContext } from "react";
import classes from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import dev1 from "../../Assets/dev1.png";
import dev2 from "../../Assets/dev2.png";
import dev3 from "../../Assets/dev3.png";
import { Logo } from "../UI";
import {
  dev1Link,
  dev2Link,
  dev3Link,
} from "../../Constants/social.contact";
import { sellerAuthContext, userAuthContext } from "../../Contexts";

const Footer = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { isSellerAuthenticated } = useContext(sellerAuthContext);
  const { isUserAuthenticated } = useContext(userAuthContext);

  const authenticated = isSellerAuthenticated || isUserAuthenticated;

  return (
    <>
      <div className={classes.footer_section}>
        <div className={classes.footer_top}>
          <div className={classes.footer_column_logo}>
            {/* <img src={""} alt="logo" className={classes.footer_logo} /> */}
            <Logo />
            <h4 className={classes.text}>flipshop</h4>
            <h4 className={classes.text}>Shopping is fun!</h4>
          </div>
          <div className={classes.footer_column}>
            <h2 className={classes.content_top}>Links</h2>

            <NavLink to="/" className={classes.links}>
              Home
            </NavLink>
            <NavLink to="/explore" className={classes.links}>
              Explore
            </NavLink>
            <NavLink to="/verifynft" className={classes.links}>
              Verify NFT
            </NavLink>
            {authenticated && (
              <>
                <NavLink to="/cart" className={classes.links}>
                  Cart
                </NavLink>
                <NavLink
                  to={
                    isSellerAuthenticated
                      ? "/retailer/dashboard"
                      : "/user/dashboard"
                  }
                  className={classes.links}
                >
                  Profile
                </NavLink>
              </>
            )}
            {!authenticated && (
              <>
                <NavLink to="/login" className={classes.links}>
                  Login
                </NavLink>
                <NavLink to="/signup" className={classes.links}>
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
          <div className={classes.footer_column}>
            <h2 className={classes.content_top}>Categories</h2>

            <NavLink to="/" className={classes.links}>
              Sneakers
            </NavLink>
            <NavLink to="/" className={classes.links}>
              Tshirts
            </NavLink>
            <NavLink to="/" className={classes.links}>
              Hoddies
            </NavLink>
            <NavLink to="/" className={classes.links}>
              Bags
            </NavLink>
          </div>

          <div className={classes.footer_column}>
            <h2 className={classes.content_top}></h2>

            <div className={classes.link_container}>
              <img
                src={dev1}
                alt="Developer1"
                className={classes.creators_image}
              />
              <a
                href={dev1Link}
                target="__blank"
                rel="noopener noreferrer"
                className={classes.links_special}
              >
                Developer1
              </a>
            </div>
            <div className={classes.link_container}>
              <img
                src={dev2}
                alt="Developer2"
                className={classes.creators_image}
              />
              <a
                href={dev2Link}
                target="__blank"
                rel="noopener noreferrer"
                className={classes.links_special}
              >
                Developer2
              </a>
            </div>
            <div className={classes.link_container}>
              <img
                src={dev3}
                alt="Developer3"
                className={classes.creators_image}
              />
              <a
                href={dev3Link}
                target="__blank"
                rel="noopener noreferrer"
                className={classes.links_special}
              >
                Developer3
              </a>
            </div>
          </div>
        </div>
        <div className={classes.footer_bottom}>
          <h3 className={classes.copyright}>
            <span className={classes.copyright_symbol}> © </span> 2024 by
            SHOP-PROVEN
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
