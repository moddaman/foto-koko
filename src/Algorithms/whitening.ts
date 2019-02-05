import { Cell } from '../Cell'


export function whitenImage(image: ImageData): ImageData {

    for (var i = 0; i < image.data.length; i += 4) {
        image.data[i] = 255;
        image.data[i + 1] = 255;
        image.data[i + 2] = 0;
    }
    return new ImageData(image.data, image.width, image.height);

}