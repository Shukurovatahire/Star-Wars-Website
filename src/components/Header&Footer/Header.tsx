  import "./stylehf.scss";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import {
    faInstagram,
    faXTwitter,
    faFacebookF,
  } from "@fortawesome/free-brands-svg-icons";
  import { Link } from "react-router-dom";

  interface IHeaderProps {
    onSearch?: (term:any ) => void;
  }

  const Header:React.FC<IHeaderProps>= ({onSearch}) => {

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value.trim();
      if (onSearch) {
        onSearch(inputValue || null); 
      }
    };
  
    return (
      <section className="mainSection">
        <div className="header">
          <div className="socialLinks">
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
          <div className="logo">
            <img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" />
          </div>
          <div className="search">
            <input type="search" placeholder="Search" className="inputSearch" onChange={handleSearch} />
            <button className="searchButton">
              <img
                src="https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Nav_Search-74ab820c48e2.svg"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="navBar">
          <ul className="navList">
            <Link to={"/"}>
              <li> Home</li>
            </Link>

            <Link to={"/Films"}>
              <li>Films</li>
            </Link>
            <Link to={"/People"}>
              <li>People</li>
            </Link>
            <Link to={"/Planets"}>
              <li>Planets</li>
            </Link>
            <Link to={"/Starships"}>
              <li>Starships</li>
            </Link>
            
          </ul>
        </div>
      </section>
    );
  };
  export default Header;
