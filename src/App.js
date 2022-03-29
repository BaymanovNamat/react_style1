
import wolfImage from "./assets/wolf.jpg";
import eyewolfImage from "./assets/eyewolf.jpg";
import eyewolf2Image from "./assets/eyewolf2.jpg";


import Image from "./components/Image/Image";
import Paragraph from "./components/Paragraph/Paragraph";
import Alert from "./components/Alert/Alert";
import Buttons from "./components/Buttons/Buttons";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {

  const styles = {
    display: "flex",
  };


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

      <Image url={wolfImage} width="150px" height="150px" />

      <Image url={eyewolfImage} width="200px" height="150px" />

      <Image url={eyewolf2Image} width="200px" height="150px" />

      <Image url="https://static.dw.com/image/18461425_303.jpg" width="200px" align="right" />


      <hr />


      <Alert size="24px">
        This is simple alert!
      </Alert>


      <Alert size="24px" secondary>
        This is secondary alert!
      </Alert>


      <Alert size="24px" success>
        This is succecc alert!
      </Alert>

      <Alert size="24px" danger>
        This is danger alert!
      </Alert>

      <Alert size="24px" warring>
        This is warring alert!
      </Alert>


      <Alert size="24px" light>
        This is light alert!
      </Alert>
      <Alert size="24px" dark>
        This is dark alert!
      </Alert>

      <hr />



      <div style={styles}>
        <Buttons primary>
          Primary
        </Buttons>

        <Buttons secondary>
          Secondary
        </Buttons>
        <Buttons success>
          Succecc
        </Buttons>

        <Buttons danger>
          Danger
        </Buttons>


        <Buttons warring>
          Warring
        </Buttons>


        <Buttons info>
          Info
        </Buttons>

        <Buttons light>
          Light
        </Buttons>

        <Buttons dark>
          Dark
        </Buttons>

        <Buttons link>
          Link
        </Buttons>
      </div>



      <br />
      <br />
      <br />
      <br />
      <br />

      <hr />

      <br />

      <div style={styles}>

        <Tooltip top>
          Tooltip on top
        </Tooltip>

        <Tooltip left>
          Tooltip on left
        </Tooltip>

        <Tooltip bottom>
          Tooltip on bottom
        </Tooltip>

        <Tooltip right>
          Tooltip on right
        </Tooltip>
      </div>



      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>





  );
}

export default App;
