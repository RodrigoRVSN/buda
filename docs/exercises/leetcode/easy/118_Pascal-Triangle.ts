// Runtime: 58 ms
// Memory: 45.1 MB
        
function generate(numRows: number): number[][] {
    const pascal: number[][] = []

    for (let i = 0; i <= numRows - 1; i++) {
        pascal[i] = []
        pascal[i][0] = 1

        for(let j = 1; j < i; j++) {
            pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]
        }

        pascal[i][i] = 1
    }

    return pascal
};