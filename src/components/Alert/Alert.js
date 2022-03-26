import "./Alert.css";


function Alert(props) {

  let style = {
    fontSize: props.size,

  }

  let className = ["Alert"];
  if (props.secondary) {
    className.push("secondary");
  }
  if (props.success) {
    className.push("succecc");
  }
  if (props.danger) {
    className.push("danger");
  }
  if (props.warring) {
    className.push("warring");
  }
  if (props.light) {
    className.push("light");
  }
  if (props.dark) {
    className.push("dark");
  }

  return (
    <div className={className.join(" ")} style={style} >
      {props.children}
    </div>
  );
}

export default Alert;