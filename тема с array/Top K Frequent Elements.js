class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let arr_count=Array.from({length:10},_=>0)
        for (let i = 0; i < nums.length; i++) {
            
            arr_count[nums[i]]++
            
        }
        let ans=[]
        function searh_max(arr) {
            let max=arr[0]
            let max_indx=0
            for (let i = 0; i < arr.length; i++) {
                if (max<arr[i]) {
                    max=arr[i]
                    max_indx=i
                }
                
            }
            return [max,max_indx]
            
        }
        // сколько угодно чисел а не тока 10 блиа
        for (let i = 0; i < k; i++) {
            let [max,max_indx]=searh_max(arr_count)
            ans.push(max_indx)
            arr_count[max_indx]=0
        }
        return ans
    }
}
