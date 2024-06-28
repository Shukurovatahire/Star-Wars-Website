import "./Starship.scss";

interface ISrarshipCardsProps {
    url:string;
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    crew: string;
}

const StarshipCard: React.FC<ISrarshipCardsProps> = (props: any) => {
  const {
    url,
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    crew,
    passengers,
  } = props;
  return (
    <>
      <div className="starshipCard">
        <div className="starshipCardImg">
          <img src={url} />
        </div>
        <div className="starshipCardContent">
          <div className="starship-line-with-gap">
            <span className="starshipLongLine"></span>
            <span className="starshipShortLine"></span>
          </div>

          <div className="props">
            <p>Name:{name}</p>
            <p>Model:{model}</p>
            <p>Manufacturer:{manufacturer}</p>
            <p>Length:{length}</p>
            <p>Cost in Credits:{cost_in_credits}</p>
            <p>Crew:{crew}</p>
          </div>
          <div className="starshipParallelogram"></div>
        </div>
      </div>
    </>
  );
};
export default StarshipCard;
