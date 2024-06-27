import "./VideoCrad.scss"
const VideoCards = (props:any) => {
    const{url,text}= props
  return (
    <>
      <div className="card">
        <div className="cardImg">
            <img src={url}  />
        </div>
        <div className="cardContent">
            <div className="line-with-gap">
                <span className="longLine"></span>
                <span className="shortLine"></span>
            </div>
            
            <div><h3>{text}</h3></div>
            <div className="parallelogram"></div>
        </div>
      </div>
    </>
  );
};
export default VideoCards;
