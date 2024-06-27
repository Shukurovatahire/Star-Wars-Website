import "./button.scss"
const Button = (props:any) => {
    const {text,bgColor,color}=props
  return <>
  <button className="buttonStyle" style={{backgroundColor:bgColor, color:color}}>{text}</button>
  </>;
};
export default Button;
