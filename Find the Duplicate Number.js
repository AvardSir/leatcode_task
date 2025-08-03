class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let settt = new Set()
        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            if (settt.has(element)) {
                return element
            }
            else {
                settt.add(element)
            }
        }
    }
}
