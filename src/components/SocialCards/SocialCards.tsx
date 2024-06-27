import "./Social.scss";
const SociaCards = (props: any) => {
  const { url, text } = props;

  return (
    <>
      <a href="https://www.tiktok.com/@starwars/video/7374498323811683627">
        <div className="card2">
          <div className="cardImg2">
            <img src={url} />
          </div>
          <div className="cardContent2">
            <div className="line-with-gap2">
              <span className="longLine2"></span>
              <span className="shortLine2"></span>
            </div>

            <div>
              <h3>{text}</h3>
            </div>
            <div className="parallelogram2"></div>
          </div>
        </div>
      </a>
    </>
  );
};
export default SociaCards;
