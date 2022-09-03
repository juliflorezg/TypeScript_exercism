export function decodedValue(colors) {
    // throw new Error('Remove this statement and implement this function')
    if (colors.length === 0)
        throw new Error('You must provide an array with at least 2 colors in it');
    const colorsMap = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9,
    };
    let result = '';
    // console.log(colorsMap[colors[0]])
    let firstNumber = colorsMap[colors[0]];
    let secondNumber = colorsMap[colors[1]];
    result = Number(`${firstNumber}${secondNumber}`);
    console.log(result);
    return result;
    // for (const color of colors) {
    // }
    // result + colorsMap[colors[0]]
}
decodedValue(['brown', 'black']);
