import { useEffect, useState } from "react";
import Footer from "../../components/Header&Footer/Footer";
import Header from "../../components/Header&Footer/Header";
import "./People.scss";
import PeopleCard from "../../components/PeopleCard/PeopleCard";

interface IPeople {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

const People: React.FC = () => {
  const [peopleData, setPeopleData] = useState<IPeople[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const imagesUrl = [
    "https://lumiere-a.akamaihd.net/v1/images/screen_shot_2015-07-24_at_1_84da9ffb.jpeg?region=0%2C0%2C1280%2C915",
    "https://media.gettyimages.com/id/1252646140/photo/c-3po-at-the-star-ceremony-where-carrie-fisher-is-honored-with-a-star-on-the-hollywood-walk.jpg?s=612x612&w=0&k=20&c=pK9BUM64qM3gNeX279ZUwHeJNWir62Is_pjQYZ6r99g=",
    "https://media.istockphoto.com/id/458633911/photo/hasbro-star-wars-interactive-r2d2.jpg?s=612x612&w=0&k=20&c=EWvoczCn-bUYt72dhjH1UINm2qoBG_rBqcoCTuveI4w=",
    "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1dyvlex_c8fe9c6c.jpeg?region=0%2C0%2C1280%2C720",
    "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1ebyf6z_a43b9fe6.jpeg?region=0%2C0%2C1280%2C861",
    "https://lumiere-a.akamaihd.net/v1/images/owen-lars-bio-1_9b5ac94f.jpeg?region=0%2C0%2C1280%2C719",
    "https://44.media.tumblr.com/a48f7dc01e3598aa43486f2aefb56e8d/36594d21aecfef84-5e/s400x600_f1/18bd128b0df4ecd39ee147656eab763239acfdc1.gifv",
    "https://44.media.tumblr.com/58f57e4598575daeaed77539a08e143a/ab75f88b0c16ec75-ad/s400x600_f1/6acdd9fba4906c56d7702329c6428f8b9b46cb38.gifv",
    "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878",
    "https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-part-6-non-spoiler-stills-obi_dd81c1c7.jpeg?region=0%2C0%2C1280%2C720",
  ];

  const getPeople = async (url: string) => {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setPeopleData([...peopleData, ...data.results]);
      setNextPage(data.next);
    }
  };

  useEffect(() => {
    const initialUrl = "https://swapi.dev/api/people";
    getPeople(initialUrl);
  }, []);

  const loadMorePeople = () => {
    if (nextPage) {
      getPeople(nextPage);
    }
  };

  return (
    <>
      <Header />

      <section className="people">
        <div className="peopleContainer">
          <p className="pepopleParagraf">Star Wars Caracters</p>

          <div className="peopleGridBox">
            {peopleData.map((people: any, index: number) => (
              <div key={index}>
                <PeopleCard
                  url={imagesUrl[index % imagesUrl.length]}
                  name={people.name}
                  height={people.height}
                  mass={people.mass}
                  eye_color={people.eye_color}
                  skin_color={people.skin_color}
                  gender={people.gender}
                  birth_year={people.birth_year}
                />
              </div>
            ))}
          </div>

          {nextPage && (
            <div className="load">
              <button className="loadMoreButton" onClick={loadMorePeople}>
                Load more
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default People;
