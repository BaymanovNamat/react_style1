import "./Tooltip.css";


function Tooltip(props) {

  const className = ["Tooltip description"];
  if(props.top) {
    className.push("top");
  }
  if (props.left) {
    className.push("left");
  }
  if (props.bottom) {
    className.push("bottom");
  }
  if (props.right) {
    className.push("right");
  }
  return (
    
    
    <div className={className.join(" ")} description="Tooltip on top">
      <button  className="button ">
        {props.children}
      </button>
    </div>



  );
}

export default Tooltip;