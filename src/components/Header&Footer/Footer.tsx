import "./stylehf.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="FooterContainer">
        <div className="footerContent">
          <p>More From Star Wars:</p>
          <div className="">
            <div className="socialMedia">
              <a href="https://www.tiktok.com/@starwars">
                <img
                  className="imgLogo"
                  src="https://lumiere-a.akamaihd.net/v1/images/tiktok-logo-white_dd1a4867.svg?region=0%2C0%2C100%2C100"
                />
              </a>

              <a href="https://www.instagram.com/starwars/">
                <FontAwesomeIcon className="fontAwsome" icon={faInstagram} />
              </a>
              <a href="https://x.com/starwars">
                <FontAwesomeIcon className="fontAwsome" icon={faXTwitter} />
              </a>

              <a href="https://www.facebook.com/StarWars">
                <FontAwesomeIcon className="fontAwsome" icon={faFacebookF} />
              </a>
            </div>
            <div className="copyRight">
                <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
                <ul>
                    <li>Terms of Use</li>
                    <li>Additional Content Information</li>
                    <li>
                    Privacy Policy</li>
                    <li>
                    Children's Online Privacy Policy</li>
                    <li>
                    Your US State Privacy Rights</li>
                    <li>
                    Star Wars at shopDisney</li>
                    <li>
                    Star Wars Helpdesk</li>
                    <li>
                    Interest-Based Ads</li>
                    <li>Do Not Sell or Share My Personal Information</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
