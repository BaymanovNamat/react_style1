function Paragraph(props) {

  let style = {
    fontSize: props.size,
    color: props.color
  };


  return (
    <p style={style}>
      {props.children}
    </p>
  );
}


export default Paragraph;