import "./FilmCards.scss";


const FilmCards = (props: any) => {
  const { url, text } = props;

  
  return (
    <>
      <div className="filmCard">
        <div className="filmCardImg">
          <img src={url} />
        </div>
        <div className="filmCardContent">
          <div className="film-line-with-gap">
            <span className="filmLongLine"></span>
            <span className="filmShortLine"></span>
          </div>

          <div>
            <h3>{text}</h3>
          </div>
          <div className="filmParallelogram"></div>
        </div>
      </div>
    </>
  );
};
export default FilmCards;
