import "./PlanetCard.scss";

interface IPlanetCardsProps {
  url: string;
  name: string;
  climate: string;
  diameter: string;
  gravity: string;
  orbital_period: string;
  population: string;
  terrain: string;
}

const PlanetCards: React.FC<IPlanetCardsProps> = (props: any) => {
  const {
    url,
    name,
    climate,
    diameter,
    gravity,
    orbital_period,
    population,
    terrain,
  } = props;
  return (
    <>
      <div className="planetsCard">
        <div className="planetsCardImg">
          <img src={url} />
        </div>
        <div className="planetsCardContent">
          <div className="planets-line-with-gap">
            <span className="planetsLongLine"></span>
            <span className="planetsShortLine"></span>
          </div>

          <div className="props">
            <p>Name:{name}</p>
            <p>Climate:{climate}</p>
            <p>Diameter:{diameter}</p>
            <p>Gravity:{gravity}</p>
            <p>Orbital period:{orbital_period}</p>
            <p>Population:{population}</p>
            <p>Terrain:{terrain}</p>
          </div>
          <div className="planetsParallelogram"></div>
        </div>
      </div>
    </>
  );
};
export default PlanetCards;
