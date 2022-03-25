function Paragraph(props) {

  let style = {
    fontSize: props.size
  };


  return (
    <p style={style}>
      {props.children}
    </p>
  );
}


export default Paragraph;