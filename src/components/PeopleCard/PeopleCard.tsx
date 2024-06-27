import "./PeopleCard.scss";

const PeopleCard = (props: any) => {
  const {
    url,
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = props;
  return (
    <>
      <div className="peopleCard">
        <div className="peopleCardImg">
          <img src={url} />
        </div>
        <div className="peopleCardContent">
          <div className="people-line-with-gap">
            <span className="peopleLongLine"></span>
            <span className="peopleShortLine"></span>
          </div>

          <div className="props">
            <p>Name:{name}</p>
            <p>Height:{height}</p>
            <p>Mass:{mass}</p>
            <p>Hair color:{hair_color}</p>
            <p>Skin color:{skin_color}</p>
            <p>Eye color:{eye_color}</p>
            <p>Birth year:{birth_year}</p>
            <p>Gender:{gender}</p>
          </div>
          <div className="peopleParallelogram"></div>
        </div>
      </div>
    </>
  );
};
export default PeopleCard;
