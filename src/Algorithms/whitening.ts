import { Cell } from '../Cell'

const isOdd = (num: number): boolean => { return (num % 2) === 1; }

export function colorOddPixels(image: ImageData): ImageData {


    for (var i = 0; i < image.data.length; i += 4) {
        if (isOdd(i / 4)) {
            image.data[i] = 255;
            image.data[i + 1] = 255;
            image.data[i + 2] = 0;
        }
    }
    return new ImageData(image.data, image.width, image.height);

}