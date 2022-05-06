import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Layer1 from "./images/1.svg";
import Layer2 from "./images/2.svg";
import Layer3 from "./images/3.svg";
import Layer4 from "./images/4.svg";
import Layer5 from "./images/5.svg";
import Layer6 from "./images/6.svg";
import Layer7 from "./images/7.svg";
import Layer8 from "./images/8.svg";
import Layer9 from "./images/9.svg";
import Layer10 from "./images/10.svg";
import "./App.css";
import Ring from "./Ring";

const wheelInit = [
  { src: Layer1, rot: 0, opacity: 1 },
  { src: Layer2, rot: 0, opacity: 1 },
  { src: Layer3, rot: 0, opacity: 1 },
  { src: Layer4, rot: 0, opacity: 1 },
  { src: Layer5, rot: 0, opacity: 1 },
  { src: Layer6, rot: 0, opacity: 1 },
  { src: Layer7, rot: 0, opacity: 1 },
  { src: Layer8, rot: 0, opacity: 1 },
  { src: Layer9, rot: 0, opacity: 1 },
  { src: Layer10, rot: 0, opacity: 1 },
];

const textExamples = [
  {text: "asdf asdfasdf asdfa sdfa sdfasdf"},
  {text: "ert  yertyertyerty ertyert yertyert"},
  {text: "c vbcvbcvbcvbcvbc vbcvbcvbcv bcvb"},
  {text: "ghjkg hjkghjkghjkghjkghj kghjkghjk"},
  {text: "zxc vzxcvzxc vzxcvzxc zxcvzxcvzx cv"},
  {text: "qwer qwe rqwerqw  erqwerqwe rqwer qwer"},
]

function App() {
  const [pos, setPos] = useState([0, 0]);
  const [wheel, setWheel] = useState(wheelInit);
  const [scale, setScale] = useState(1);
  const [crazy, setCrazy] = useState(true);
  const [text, setText] = useState(textExamples[0].text);

  const goCrazy = () => {
    const inter = setInterval(() => {
      const fiftyFifty = Math.random() >= 0.5;
      scaler();
      randPoser();
      rotateAndFadeRandomly();
    }, 2000);
    return inter;
  };

  useEffect(() => {
    if (crazy) {
      console.log("crazy");
      const interval = goCrazy();
      console.log(interval);
      return () => clearInterval(interval);
    }
  }, [crazy]);

  const scaler = () => {
    // setCrazy(false);
    const randomScaleFactor = Math.round((Math.random() * 3.5 + 0.5) * 100) / 100;
    setScale(randomScaleFactor);
  };

  const randPoser = () => {
    // setCrazy(false);
    const randomPos = [
      Math.floor(Math.random() * window.innerWidth),
      Math.floor(Math.random() * window.innerHeight),
    ];
    setPos(randomPos);
  };

  const rotateRand = () => {
    // setCrazy(false);
    const newWheel = wheel.map((ring) => {
      const randomRot = Math.random() * 360;
      return { ...ring, rot: randomRot };
    });
    setWheel(newWheel);
  };

  const changeText = () => {
    setText(textExamples[Math.floor(Math.random() * textExamples.length)].text);
  }

  const rotateAndFadeRandomly = () => {
    const newWheel = wheel.map((ring) => {
      const randomRot = Math.random() * 360;
      const randomOpacity = Math.random() + 0.2;
      return { ...ring, rot: randomRot, opacity: randomOpacity };
    });
    setWheel(newWheel);
  };

  const fadeRandomly = () => {
    const newWheel = wheel.map((ring) => {
      const randomOpacity = Math.random();
      return { ...ring, opacity: randomOpacity };
    });
    setWheel(newWheel);
  };

  const setAuto = () => {
    setCrazy(!crazy);
  };

  return (
    <div className="App">
      <header className="App-header">
        {wheel.map((layer, index) => {
          return (
            <Ring
              key={index}
              idx={index}
              layer={layer}
              scale={scale}
              pos={pos}
            />
          );
        })}
        <p class="posInfo">x: {pos[0]}, y: {pos[1]}, scale: {scale} </p>
        {/* <p className="controlPanel">
          <p>{text}</p>
          <button onClick={changeText}>
            Change Text
          </button>
           <button className="button" type="button" onClick={randPoser}>
            Position randomly
          </button>
          <button className="button" type="button" onClick={scaler}>
            Scale randomly
          </button>
          <button className="button" type="button" onClick={rotateRand}>
            rotate randomly
          </button>
          <button className="button" type="button" onClick={fadeRandomly}>
            fade randomly
          </button>
          <button className="button" type="button" onClick={setAuto}>
            toggle auto
          </button> 
        </p> */}
      </header>
    </div>
  );
}

export default App;
