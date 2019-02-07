import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bilde from './bilde.png';
import { Cell } from './Cell'
import { invertImage, mergeImage, colorOddPixels, yourAlgorithm } from './Algorithms'


const downloadImage = (id: string) => {
  const imageURL = id.length < 5 ?
    `https://res.cloudinary.com/bekkimg/w_450,c_fill/d_default_image_departmentId2.png/${id}` :
    id;
  let downloadedImg = new Image;
  downloadedImg.crossOrigin = "Anonymous";
  downloadedImg.addEventListener("load", () => {
    const canvas = document.getElementById('original') as HTMLCanvasElement;
    let context = canvas.getContext("2d") as CanvasRenderingContext2D;;
    canvas.width = downloadedImg.width;
    canvas.height = downloadedImg.height;
    context.drawImage(downloadedImg, 0, 0);
  }, false);
  downloadedImg.src = imageURL;
}

type manipulateFunction = (image: ImageData) => ImageData;

const convert = (imageId: string, canvasId: string, changeFunction: manipulateFunction) => {
  var originalCanvas = document.getElementById('original') as HTMLCanvasElement;
  const newCanvas = document.getElementById(canvasId) as HTMLCanvasElement;
  const context = originalCanvas.getContext('2d') as CanvasRenderingContext2D;
  const newContext = newCanvas.getContext('2d') as CanvasRenderingContext2D;

  newCanvas.width = originalCanvas.width;
  newCanvas.height = originalCanvas.height;
  console.log(originalCanvas.width, originalCanvas.height);
  if (context) {
    var imageData = context.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
    const image = changeFunction(imageData);
    newContext.putImageData(image, 0, 0);
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
        </section>
        <section className='middle'>
          <input type="text" onChange={this.handleChange} />
          <button onClick={() => downloadImage(this.state.id)}>last ned bilde</button>
          <button onClick={() => convert('original', 'result', mergeImage)}>reduce</button>
          <button onClick={() => convert('original', 'result', invertImage)}>Halloween</button>
          <button onClick={() => convert('original', 'result', colorOddPixels)}>Fargelegg annenhver piksel</button>
          <button onClick={() => convert('original', 'result', yourAlgorithm)}>Din algoritme her</button>


        </section>
        <section>
          <canvas id='result'> </canvas>
        </section>
      </div>
    );
  }
}

export default App;
