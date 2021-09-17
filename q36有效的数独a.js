/**
 * @param {character[][]} board
 * @return {boolean}
 * 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

 数字 1-9 在每一行只能出现一次。
 数字 1-9 在每一列只能出现一次。
 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 数独部分空格内已填入了数字，空白格用 '.' 表示。

 注意：

 一个有效的数独（部分已被填充）不一定是可解的。
 只需要根据以上规则，验证已经填入的数字是否有效即可。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/valid-sudoku
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var isValidSudoku = function(board) {
    let line = board.length
    const arrT = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() =>new Array(9).fill(0)));
    for (let i = 0; i < line; i++) {
        const arrI = new Array(line).fill(0);
        const arrJ = new Array(line).fill(0);
        for (let j = 0; j < line; j++) {
            if (board[i][j] >= 1 || board[i][j] <= 9) {
                arrI[board[i][j] - 1]++;
                arrT[Math.floor(i / 3)][Math.floor(j / 3)][board[i][j] - 1]++
                if (arrI[board[i][j] - 1] > 1 || arrT[Math.floor(i / 3)][Math.floor(j / 3)][board[i][j] - 1] > 1) return false;

            }
            if (board[j][i] >= 1 || board[j][i] <= 9) {
                arrJ[board[j][i] - 1]++;
                if (arrJ[board[j][i] - 1] > 1) return false;
            }
        }
    }
    return true;
};

console.log(isValidSudoku([[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".","9",".",".",".",".",".",".","1"],["8",".",".",".",".",".",".",".","."],[".","9","9","3","5","7",".",".","."],[".",".",".",".",".",".",".","4","."],[".",".",".","8",".",".",".",".","."],[".","1",".",".",".",".","4",".","9"],[".",".",".","5",".","4",".",".","."]]))