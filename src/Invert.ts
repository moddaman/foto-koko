import { Cell } from './Cell'


function invert(cell: Cell): Cell {
    return {
        red: cell.red ^ 255,
        green: cell.green ^ 255,
        blue: cell.blue ^ 255,
        index: cell.index
    }
}

export function invertImage(data: any) {

    for (var i = 0; i < data.length; i += 4) {
        const converted = invert(new Cell(i, data[i], data[i + 1], data[i + 2]));
        data[i] = converted.red;
        data[i + 1] = converted.green;
        data[i + 2] = converted.blue;
    }

}