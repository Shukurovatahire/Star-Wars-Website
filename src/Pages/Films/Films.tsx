import { useEffect, useState } from "react";
import FilmCards from "../../components/FilmsCard/FilmCards";
import Footer from "../../components/Header&Footer/Footer";
import Header from "../../components/Header&Footer/Header";
import "./Films.scss";
import Button from "../../components/Button/button";

interface IFilm {
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  opening_crawl: string;
}

const Films: React.FC = () => {
  const [filmData, setFilmData] = useState<IFilm[]>([]);
  const [selectedFilm, setSelectedFilm] = useState<IFilm | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const imageUrl = [
    " https://lumiere-a.akamaihd.net/v1/images/Star-Wars-New-Hope-IV-Poster_c217085b.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Empire-Strikes-Back-V-Poster_878f7fce.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Return-Jedi-VI-Poster_a10501d2.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Phantom-Menace-I-Poster_3c1ff9eb.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Attack-Clones-II-Poster_53baa2e7.jpeg",
    "https://lumiere-a.akamaihd.net/v1/images/Star-Wars-Revenge-Sith-III-Poster_646108ce.jpeg",
  ];
  const getFilmData = async () => {
    const response = await fetch("https://swapi.dev/api/films");
    if (response.ok) {
      const data: any = await response.json();
      setFilmData(data.results);
      console.log(data.results);
    }
  };

  useEffect(() => {
    getFilmData();
  }, []);

  const openModal = (film: IFilm) => {
    console.log(123);
    setSelectedFilm(film);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />

      <section className="ticket">
        <div className="ticketContainer">
            <div className="ticketContent">
                <h2>
                    <i>THE PHANTOM MENACE</i><br />
                    RETURNS TO THEATERS
                </h2>
                <h3>Tickets are available now, and get details on an exclusive look at 
                    <i style={{marginLeft:"5px"}}>The Acolyte</i>
                </h3>
                <div style={{display:"flex", gap:"1rem"}}>
                      <Button bgColor="yellow" color="black" text="Read More" />
                <Button bgColor="black" color="white" text="Interview" />
                </div>
              
            </div>
        </div>
      </section>

      <section className="sectionFilms">
        <div className="filmsContainer">
          <p className="filmsParagraf">Browse Films</p>
          <div className="filmGridBox">
            <FilmCards
              url="https://lumiere-a.akamaihd.net/v1/images/the-rise-of-skywalker-films-poster-catalog_c46adc71.jpeg"
              text="   Star Wars: The Rise of Skywalker (Episode IX)  "
            />
            <FilmCards
              url="https://lumiere-a.akamaihd.net/v1/images/solo-theatrical-poster-1000_27861ab7.jpeg"
              text="Solo:Star Wars Story"
            />
            <FilmCards
              url="https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg"
              text="Star Wars: The Last Jedi (Episode VIII)  "
            />
            <FilmCards
              url="https://lumiere-a.akamaihd.net/v1/images/rogueone_onesheeta_1000_309ed8f6.jpeg"
              text="   Rogue One: A Star Wars Story  "
            />

            {filmData.map((film: any, index: number) => (
              <div
                className="click"
                key={index}
                onClick={() => openModal(film)}
              >
                <FilmCards
                  url={imageUrl[index % imageUrl.length]}
                  text={film.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedFilm ? selectedFilm.title : "No Film Selected"}</h2>
            <p>Episode: {selectedFilm ? selectedFilm.episode_id : "-"}</p>
            <p>Director: {selectedFilm ? selectedFilm.director : "-"}</p>
            <p>
              Release Date: {selectedFilm ? selectedFilm.release_date : "-"}
            </p>
            <p>
              Opening Crawl: {selectedFilm ? selectedFilm.opening_crawl : "-"}
            </p>
          </div>
        </div>
      ) : null}

      <Footer />
    </>
  );
};
export default Films;
