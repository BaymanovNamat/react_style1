import "./Buttons.css";


function Buttons(props) {


  

  const className = ["button"];




  if (props.primary) {
    className.push("primary");
  }
  if (props.secondary) {
    className.push("secondary");
  }
  if (props.success) {
    className.push("success");
  }
  if (props.danger) {
    className.push("danger");
  }
  if (props.warring) {
    className.push("warring");
  }
  if (props.info) {
    className.push("info");
  }
  if (props.light) {
    className.push("light");
  }
  if (props.dark) {
    className.push("dark");
  }
  if (props.link) {
    className.push("link");
  }

  return (
    <div className="Buttons">
        <div className="exterior">
        <button className={className.join(" ")}>{props.children}</button>
      </div>
    </div>
    
  );
}

export default Buttons;