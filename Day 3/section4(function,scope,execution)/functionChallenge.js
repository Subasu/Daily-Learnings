/*challenge 1*/

const getCelcius=temprature=>(temprature-32)*5/9;
console.log( `The Temprature is ${getCelcius(50)}\xB0C`);

/*challenge 2*/

const minMax=arr=>({
   min:Math.min(...arr),
   max:Math.max(...arr)
});
console.log(minMax([1,2,4,53,0,64,100]));

/*challenge 3*/
(function(){
    const areaTriangle=(length,width)=>{console.log(`The Area of a rectangle with the length of ${length} and width of ${width} is ${length*width}`)};
    areaTriangle(12,43);
})();

((length,width)=>{console.log(`The Area of a rectangle with the length of ${length} and width of ${width} is ${length*width}`)})(12,43);