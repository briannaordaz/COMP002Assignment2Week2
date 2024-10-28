// 3. Write code that creates an 8x8 grid, similar to a chessboard, using alternating spaces and the pound/hashtag symbol (#).
// Hint: There are two distinct alternating patterns here…
// Example Output:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

for (let i = 0; i < 8; i++) {
    let line = "";
    for(let l = 0; l < 8; l++) {
        if ((i + l) % 2 === 0) {
            line += "#";
        } else {
            line += " ";
        }
    }
    console.log(line);
}