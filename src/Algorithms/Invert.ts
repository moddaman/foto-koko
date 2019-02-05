import { Cell } from '../Cell'

function invert(red: number, green: number, blue: number, alpha: number): Cell {
    return new Cell(red ^ 255, green ^ 255, blue ^ 255, 50);
}

export function invertImage(image: ImageData): ImageData {

    console.log(image.data)
    for (var i = 0; i < image.data.length; i += 4) {
        const converted = invert(image.data[i], image.data[i + 1], image.data[i + 2], image.data[i + 3]);
        image.data[i] = converted.red;
        image.data[i + 1] = converted.green;
        image.data[i + 2] = converted.blue;
        image.data[i + 3] = converted.alpha;
    }
    return new ImageData(image.data, image.width, image.height);
}