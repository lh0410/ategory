/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */
var numWays = function(steps, arrLen) {
  let maxCol = Math.min(arrLen - 1, steps);
  const MODULO = 1000000007;
  let dp = new Array(steps + 1).fill(0).map(() => new Array(maxCol + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= steps ; i++) {
    for (let j = 0; j <= maxCol ; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j + 1 <= maxCol) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % MODULO;
      }
      if (j > 0) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % MODULO;
      }
    }
  }
  return dp[steps][0];
};
