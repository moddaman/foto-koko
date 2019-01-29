import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bilde from './bilde.png';
import { Cell } from './Cell'
import { invertImage } from './Invert'
import { mergeImage } from './merge'



let downloadedImg: any;

const downloadImage = (id: string) => {

  let imageURL = id.length < 5 ?
    `https://res.cloudinary.com/bekkimg/w_450,c_fill/d_default_image_departmentId2.png/${id}` :
    id;
  downloadedImg = new Image;
  downloadedImg.crossOrigin = "Anonymous";
  downloadedImg.addEventListener("load", imageReceived, false);
  downloadedImg.src = imageURL;
}


const imageReceived = () => {
  const canvas = document.getElementById('original') as HTMLCanvasElement;
  let context = canvas.getContext("2d") as CanvasRenderingContext2D;;

  canvas.width = downloadedImg.width;
  canvas.height = downloadedImg.height;

  context.drawImage(downloadedImg, 0, 0);
}

const convert = (imageId: string, canvasId: string, changeFunction: any) => {
  var originalCanvas = document.getElementById('original') as HTMLCanvasElement;
  const newCanvas = document.getElementById(canvasId) as HTMLCanvasElement;
  const context = originalCanvas.getContext('2d') as CanvasRenderingContext2D;
  const newContext = newCanvas.getContext('2d') as CanvasRenderingContext2D;

  newCanvas.width = originalCanvas.width;
  newCanvas.height = originalCanvas.height;
  console.log(originalCanvas.width, originalCanvas.height);
  if (context) {
    var imageData = context.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
    changeFunction(imageData.data);
    newContext.putImageData(imageData, 0, 0);
  }
};


interface State {
  id: string;
}

class App extends Component<any, State> {
  state: State = {
    id: '0'
  }

  private handleChange = (event: any) => this.setState({ id: event.target.value });

  render() {
    const { id } = this.state;
    return (
      <div className="App">
        <section >
          <canvas id='original'> </canvas>
          {/* <img src="https://res.cloudinary.com/bekkimg/w_450,c_fill/d_default_image_departmentId2.png/849" id='raw' alt="bilde" /> */}
        </section>
        <section className='middle'>
          <input type="text" onChange={this.handleChange} />
          <button onClick={() => downloadImage(this.state.id)}>downloadImage</button>
          <button onClick={() => convert('original', 'result', mergeImage)}>reduce</button>
          <button onClick={() => convert('original', 'result', invertImage)}>Halloween</button>
        </section>
        <section>
          <canvas id='result'> </canvas>
        </section>
      </div>
    );
  }
}

export default App;
