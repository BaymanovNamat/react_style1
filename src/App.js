
import wolfImage from "./assets/wolf.jpg";
import eyewolfImage from "./assets/eyewolf.jpg";
import eyewolf2Image from "./assets/eyewolf2.jpg";




import Image from "./components/Image/Image";
import Paragraph from "./components/Paragraph/Paragraph";


function App() {
  return (
    <div className="App">
      <>

      <h1>
        hello world☺
      </h1>
      </>

    <Paragraph size="25px">
      This is sample paragraph
    </Paragraph>

    <Paragraph size="10px">
      This is small paragraph
    </Paragraph>


    <Paragraph color="green" size="30px">
      This is colorful paragraph
    </Paragraph>

    <Image url={wolfImage} width="150px" height="150px"/>

    <img src={wolfImage} width="150px" height="150px"/>

    <Image url={eyewolfImage} width="200px" height="150px"/>

    <Image url={eyewolf2Image} width="200px" height="150px"/>

    <Image url="https://static.dw.com/image/18461425_303.jpg" width="200px" align="right"/>

    </div>


      
    

  );
}

export default App;
