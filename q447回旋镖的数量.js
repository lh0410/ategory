/**
 * @param {number[][]} points
 * @return {number}
 *
 * 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。

 返回平面上所有回旋镖的数量。

  
 示例 1：

 输入：points = [[0,0],[1,0],[2,0]]
 输出：2
 解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
 示例 2：

 输入：points = [[1,1],[2,2],[3,3]]
 输出：2
 示例 3：

 输入：points = [[1,1]]
 输出：0

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/number-of-boomerangs
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var numberOfBoomerangs = function(points) {
    if (!points || points.length < 3) return 0
    let res = 0
    for (let i = 0; i < points.length; i++) {
        const cur = points[i]
        for (let j = 0; j < points.length; j++) {
            if (j === i) continue
            const first = points[j]
            for (let k = 0; k < points.length; k++) {
                if (k === i || k === j) continue
                const second = points[k]
                if ((cur[0] - first[0]) * (cur[0] - first[0]) + (cur[1] - first[1]) * (cur[1] - first[1])
                    === (cur[0] - second[0]) * (cur[0] - second[0]) + (cur[1] - second[1]) * (cur[1] - second[1])) {
                    res += 2;
                }
            }
        }
    }
    return res
};

var numberOfBoomerangs2 = function(points) {
    if (!points || points.length < 3) return 0
    let res = 0
    const map = new Map()
    for (let i = 0; i < points.length; i++) {
        const cur = points[i]
        for (let j = 0; j < points.length; j++) {
            const first = points[j]
            const len = Math.pow((cur[0] - first[0]), 2)  + Math.pow((cur[1] - first[1]), 2)
            if (len !== 0) {
                if (!map.has(len)) {
                    map.set(len, 1)
                } else {
                    const n = map.get(len)
                    res += 2 * n
                    map.set(len, n + 1)
                }
            }
        }
        map.clear()
    }
    return res
}
numberOfBoomerangs(
    [[0,0],[1,0],[2,0]])