class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length==0) {
            return 0
        }
        let map_taks = new Map()
        let max=1
        for (let i = 0; i < nums.length; i++) {
            nums[i]
            if (map_taks.has(nums[i])) {
                continue
            }
            else {
                if (map_taks.has(nums[i] + 1) && map_taks.has(nums[i] - 1)) {
                    // надо

                    let count_up = map_taks.get(nums[i] + 1)
                    let end = nums[i] + 1 + count_up - 1

                    let count_down = map_taks.get(nums[i] - 1)
                    let start = nums[i] - 1 -(count_down - 1)

                    let count=count_down+count_up+1
                    map_taks.set(start, count )
                    map_taks.set(end, count )
                    map_taks.set(nums[i], count )
                    max=max<count?count:max
                    // нумс просто добавить
                }
                else if (map_taks.has(nums[i] + 1)) {

                    let count = map_taks.get(nums[i] + 1)
                    let start = nums[i] + 1
                    let end = start + count - 1

                    count++
                    map_taks.set(nums[i], count)
                    map_taks.set(end, count )
                    max=max<count?count:max

                }
                else if (map_taks.has(nums[i] - 1)) {
                    let count = map_taks.get(nums[i] - 1)
                    let end = nums[i] - 1
                    let start = end - (count - 1)

                    count++
                    map_taks.set(start, count )
                    map_taks.set(nums[i], count )
                    max=max<count?count:max
                }
                else {
                    // если нет ни сверху ни снизу элемента
                    map_taks.set(nums[i], 1)
                }
            }

        }
        // не ответ а словарь в котором должен быть отве
        return max
    }
}

// сортировочное решение сам!!
let a = new Solution()

nums = [2, 20, 4, 10, 3, 4, 5]

// мой варик
// nums = [1, 2, 4, 3]
// a.longestConsecutive(nums)
console.log('a.longestConsecutive(nums)::: ', a.longestConsecutive(nums));