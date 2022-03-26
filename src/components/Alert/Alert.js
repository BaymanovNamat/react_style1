import "./Alert.css";


function Alert(props) {

  let style = {
    fontSize: props.size,

  }

  let className = ["Alert"];
  if (props.secondary) {
    className.push("secondary");
  }

  return (
    <div className={className.join(" ")} style={style} >
      {props.children}
    </div>
  );
}

export default Alert;