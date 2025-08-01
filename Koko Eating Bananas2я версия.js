class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        piles = piles.sort((a, b) => a - b)
        let max=piles[0]
        for (let i = 1; i < piles.length; i++) {
            const element = piles[i];
            max=max<element?element:max
        }
        

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
        }


        let l = 1, r = max
        let mid = l + (Math.ceil((r - l) / 2))
        // let min = diapozon[diapozon.length - 1]
        while (l != r - 1) {
            mid = l + (Math.ceil((r - l) / 2))
            if (check_k(mid)) {
                
                r = mid
            }
            else {
                l = mid
            }
        }
        
        if (check_k(l)) {
            return l
        }
        else if (check_k(mid)) {
            return mid
        }
        else {
            return r
        }


    }
}




// 312884470<968709470
// console.log('312884470<968709470::: ', 312884470<968709470);
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

piles=[312884470]
h=968709470


console.log('Задача ответ::: ', a.minEatingSpeed(piles, h));

