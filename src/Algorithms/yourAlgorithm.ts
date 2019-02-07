
export function yourAlgorithm(image: ImageData): ImageData {


    //console.log(image); //Kommenter ut denne for å se hvordan det ser ut
    for (var i = 0; i < image.data.length; i += 4) {

        image.data[i] = 224; // Red 
        image.data[i + 1] = 221; // Green
        image.data[i + 2] = 123; // Blue
    }
    return new ImageData(image.data, image.width, image.height);
}