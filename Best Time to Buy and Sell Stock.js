class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let l = 0, r = prices.length - 1
        let max = prices[r] - prices[l]
        let cur=0
        while (l < r) {
            let next_l = l + 1
            let dif_l =   prices[next_l]-prices[l]
            if (dif_l <= 0) {
                l++
                cur = prices[r] - prices[l]
                max = max < cur ? cur : max
                continue
            }

            // if (l==4||r==4) {
            //     let a=2
            // }

            // если право>лево плохо
            let next_r = r - 1
            let dif_r = prices[r]-prices[next_r] 
            if (dif_r <= 0) {
                r--
                cur = prices[r] - prices[l]
                max = max < cur ? cur : max
                continue
            }
            if (dif_l <= dif_r) {

                l++
                cur = prices[r] - prices[l]
                max = max < cur ? cur : max
            }
            else {
                r--
                cur = prices[r] - prices[l]
                max = max < cur ? cur : max
            }
        }

        return max
    }
}


// 
a = new Solution()
// 

prices = [10, 1, 5, 6, 7, 1]
prices=[7,1,5,3,6,4]

prices=[2,1,2,1,0,1,2]

prices=[1,2,11,4,7]

console.log('Задача ответ::: ', a
    .maxProfit(prices));

