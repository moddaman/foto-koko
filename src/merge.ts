import { Cell } from './Cell'

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



export function mergeImage(data: any) {

    for (var i = 0; i < data.length; i += 4) {
        const reducedColor = FindNearestColor({ red: data[i], green: data[i + 1], blue: data[i + 2] })
        data[i] = reducedColor.red;
        data[i + 1] = reducedColor.green;
        data[i + 2] = reducedColor.blue;
    }

}