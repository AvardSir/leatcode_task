class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // let a=62/4
        piles = piles.sort((a, b) => a - b)
        // проверить левый 
        let max=piles[0]
        for (let i = 1; i < piles.length; i++) {
            const element = piles[i];
            max=max<element?element:max
        }
        let diapozon = []

        let start = 1
        let end = piles[piles.length - 1]
        for (let i = start; i < end + 1; i++) {
            // const element = array[i];
            diapozon.push(i)
        }
        // check_k(1);

        function check_k(k) {
            let piles_copy = [...piles]
            let h_copy = h
            let i = 0
            let end = piles_copy.length
            let h_i=0
            for (let i = 0; i < piles_copy.length; i++) {
                // const element = array[i];
                h_i = Math.ceil(piles[i] / k)
                h_copy-=h_i
                if (h_copy<0) {
                    return false
                }
                
            }
            return true
            // while (h_copy > 0) {
            //     // 
            //     h_i = Math.ceil(piles[i] / k)
            //     // 
            //     piles_copy[i] = piles_copy[i] - k
            //     if (piles_copy[i] <= 0) {
            //         i++

            //     }
            //     if (i == end) {
            //         return true
            //     }
            //     h_copy--
            // }
            return false
        }


        let l = 1, r = diapozon.length - 1
        let mid = l + (Math.floor((r - l) / 2))
        let min = diapozon[diapozon.length - 1]
        while (l != r - 1) {
            mid = l + (Math.ceil((r - l) / 2))
            if (check_k(diapozon[mid])) {
                min = min > diapozon[mid] ? diapozon[mid] : min
                r = mid
            }
            else {
                l = mid
            }
        }
        if (check_k(diapozon[mid])) {
            return diapozon[mid]
        }
        else {
            return diapozon[r]
        }


    }
}





// 
a = new Solution()
// 

piles = [1, 4, 3, 2], h = 9

piles = [25, 10, 23, 4]
h = 4


piles = [3, 6, 7, 11]
h = 8
// Expected output:

// 4


piles=[312884470]
h=312884469




console.log('Задача ответ::: ', a.minEatingSpeed(piles, h));

