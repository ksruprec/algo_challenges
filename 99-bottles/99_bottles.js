//start song with num bottles, subtract by 1 each time you "take one down"
//when you get to 1 bottle, change bottles to bottle
//then finally no more bottles and print final line

// function bottleSong(num) {
//     const originalNum = num;
//     while (num > 2) {
//         console.log(`${num} bottles of beer on the wall, ${num} bottles of beer. Take one down and pass it around, ${num-1} bottles of beer on the wall.`);
//         num = num - 1
//     } 

//     if (num === 2) {
//        console.log(`${num} bottles of beer on the wall, ${num} bottles of beer. Take one down and pass it around, ${num-1} bottle of beer on the wall. 1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ${originalNum} bottles of beer on the wall.`)
//     }
// };
  
// bottleSong(99);


function bottleSong(num) {
    result = '';
    while (num > 2) {
        result += `${num} bottles of beer on the wall, ${num} bottles of beer. Take one down and pass it around, ${num-1} bottles of beer on the wall.`;
        num = num - 1;
    }

    if (num == 2) {
        result += `${num} bottles of beer on the wall, ${num} bottles of beer. Take one down and pass it around, ${num-1} bottle of beer on the wall.`;
    }

    if (num == 1) {
        result += `${num} bottle of beer on the wall, ${num} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.`;
    }
    
    return result
};

  
console.log(bottleSong(99));