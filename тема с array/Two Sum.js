class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map_for_this=new Map()
        let cur=0
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            cur=target-nums[i]
            if (map_for_this.has(cur)) {
                return [map_for_this.get(cur),i]
                
            }
            map_for_this.set(nums[i],i)
        }
        
    }
}
// оно работает