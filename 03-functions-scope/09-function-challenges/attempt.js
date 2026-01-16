const getCelcius = (F) => {
  return (F - 32) * 5 / 9;
};

console.log(`The temperature is ${getCelcius(32)} \xB0C`);

const minMax = (arr) => ({
    min: Math.min(...arr),
    max: Math.max(...arr),
});

console.log(minMax([1,2,3,4,5,-10,20]));

(function (length, width) {
    const area = length * width;
    console.log(`The area of a rectangle with length ${length} and width ${width} is ${area}`);
})(10, 5);