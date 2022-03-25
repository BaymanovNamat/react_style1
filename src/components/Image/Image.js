import "./Image.css";

function Image(props) {

  let className = ["Image", props.align].join(" ");


  let style = {
    width: props.width,
    height: props.height,
    // float: props.align,
  };


  return (
      <img src={props.url} 
      style={style} 
      className={className}/>
  );
}

export default Image;