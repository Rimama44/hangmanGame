import './App.css';
import Header from './component/Header';
import Draw from './component/Draw';
import Wrong from './component/Wrong';
import CallApi from './component/CallApi';
import { useState, useEffect } from 'react';

function App(props) {
  const [playable, setPlayable] = useState(true);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [wrongAnswer, setWrongAnswer] = useState([]);

  return (
    <div>
      <div className='App-header'>
        <Header />
        <Draw />
        <Wrong />
        <CallApi />
      </div>
    </div>
  )

  /**********Button Random Avatar*************/

  /*const [randNumber, setRandomNumber] = useState(1)
  function randomNumber() {
    let number = Math.floor(Math.random() * 100);
    console.log(number)
    setRandomNumber(number);
  }

  return (
    <div className='App-header'>
      <Img src={"https://avatars.dicebear.com/api/adventurer-neutral/"+randNumber+".svg"} />
      <Button value={"Hello"} onClick={randomNumber} />
    </div>
  );*/

  /**********Chifoumi*************/

  /*function play(value) {
    let number = Math.floor((Math.random() * 3) + 1);
    console.log(number)
    let player = value.target.value()
    if (number == 1) {
      switch (player) {
        case '1':
          window.alert("égalité")
          break;
        case '2':
          window.alert("gagné")
          break;
        case '3':
          window.alert("perdu")
          break;
      }
    }
    if (number == 2) {
      switch (player) {
        case '1':
          window.alert("perdu")
          break;
        case '2':
          window.alert("égalité")
          break;
        case '3':
          window.alert("gagné")
          break;
      }
    }
    if (number == 3) {
      switch (player) {
        case '1':
          window.alert("gagné")
          break;
        case '2':
          window.alert("perdu")
          break;
        case '3':
          window.alert("égalité")
          break;
      }
    }
  }

  return (
    <div className='App-header'>
      <Button onClick={play} />
    </div>
  )*/
}


export default App;
// Usage
