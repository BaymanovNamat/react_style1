import "./Image.css";

function Image(props) {

  let className = ["Image", props.align];


  let style = {
    width: props.width,
    height: props.height,
    // float: props.align,
  };


  return (
      <span>
        <img src={props.url} 
          style={style} 
          className={className.join(" ")} alt="#"/>
        {props.children}
      </span>
  );
}

export default Image;