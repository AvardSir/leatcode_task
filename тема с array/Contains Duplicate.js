class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set=new Set();
        for (const i of nums) {
            if (set.has(i)) {
                return true
            }
            else{
                set.add(i)
            }
        }
        return false
    }
}
// оно работает
