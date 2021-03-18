/**
 * @return {number}
 *
 * 给定一个字符串 ring，表示刻在外环上的编码；给定另一个字符串 key，表示需要拼写的关键词。您需要算出能够拼写关键词中所有字符的最少步数。

 最初，ring 的第一个字符与12:00方向对齐。您需要顺时针或逆时针旋转 ring 以使 key 的一个字符在 12:00 方向对齐，然后按下中心按钮，以此逐个拼写完 key 中的所有字符。

 旋转 ring 拼出 key 字符 key[i] 的阶段中：

 您可以将 ring 顺时针或逆时针旋转一个位置，计为1步。旋转的最终目的是将字符串 ring 的一个字符与 12:00 方向对齐，并且这个字符必须等于字符 key[i] 。
 如果字符 key[i] 已经对齐到12:00方向，您需要按下中心按钮进行拼写，这也将算作 1 步。按完之后，您可以开始拼写 key 的下一个字符（下一阶段）, 直至完成所有拼写。


 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/freedom-trail
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param str
 * @param index
 */
const getIdx = (str, index) => str.codePointAt(index) - 'a'.codePointAt(0);
var findRotateSteps = function (ring, key) {
  let n = ring.length, m = key.length;
  let pos = new Array(26).fill(0).map(() => []);
  for (let i = 0; i < n; i++) {
    pos[getIdx(ring, i)].push(i);
  }
  //定义 [i][j] 表示从前往后拼写出 key 的第 i 个字符， ring 的第 j 个字符与 12:00方向对齐的最少步数（下标均从 0 开始）
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(Number.MAX_SAFE_INTEGER));
  for (let i of pos[getIdx(key, 0)]) {
    dp[0][i] = Math.min(i, n - i) + 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j of pos[getIdx(key, i)]) {
      for (let k of pos[getIdx(key, i - 1)]) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + Math.min(Math.abs(j - k), n - Math.abs(j - k)) + 1);
      }
    }
  }
  return dp[m - 1].reduce((pre, cur) => Math.min(pre, cur), Number.MAX_SAFE_INTEGER);
};
findRotateSteps('godding', 'gd');
