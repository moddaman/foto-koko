import { Cell } from '../Cell'

const turqoise = { red: 85, green: 239, blue: 196 }
const peterriver = { red: 52, green: 152, blue: 219 }

const palette = [
    { red: 85, green: 239, blue: 196 },
    { red: 52, green: 152, blue: 219 },
    { red: 46, green: 204, blue: 113 },
    { red: 0, green: 0, blue: 0 },
    { red: 255, green: 255, blue: 255 }


]

interface Colors {
    red: number;
    green: number;
    blue: number;

}


function colorDistance(current: Colors, match: Colors) {
    const redDifference = current.red - match.red;
    const greenDifference = current.green - match.green;
    const blueDifference = current.blue - match.blue;


    return redDifference * redDifference +
        greenDifference * greenDifference +
        blueDifference * blueDifference;
}

function FindNearestColor(current: Colors): Colors {

    let index = -1;
    let shortestDistance = Number.MAX_SAFE_INTEGER;

    for (var i = 0; i < palette.length; i++) {

        let match = palette[i];
        let distance = colorDistance(current, match);

        if (distance < shortestDistance) {
            index = i;
            shortestDistance = distance;
        }
    }
    return palette[index];
}



export function mergeImage(image: ImageData): ImageData {

    for (var i = 0; i < image.data.length; i += 4) {
        const reducedColor = FindNearestColor({ red: image.data[i], green: image.data[i + 1], blue: image.data[i + 2] })
        image.data[i] = reducedColor.red;
        image.data[i + 1] = reducedColor.green;
        image.data[i + 2] = reducedColor.blue;
    }
    return new ImageData(image.data, image.width, image.height);

}