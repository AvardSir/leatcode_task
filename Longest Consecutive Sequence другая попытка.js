class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let map_taks = new Map()

        for (let i = 0; i < nums.length; i++) {
            let key = 0
            if (!map_taks.has(nums[i])) {
                map_taks.set(nums[i], [1, null])

                // случай 134 2 разобран?. т.е. встраивание элемента в цепочку?

                function up(element, element_up) {
                    // 1й случай
                    // у element_up узнаем корневой
                    // корневой count+1, у elemnt теперень будет корневой


                    // 2й случай 

                }
                // верх !3!->4
                if (map_taks.has(nums[i] + 1)) {
                    // map_taks.set(nums[i], [map_taks.get(nums[i] + 1)[0] + 1, null])
                    key=nums[i] + 1
                    while (map_taks.get(key)[1] != null) {
                        map_taks.set(key, map_taks.get(key)[1])
                    }
                    // map_taks.set(nums[i] + 1, [map_taks.get(nums[i] + 1)[0] + 1, nums[i]])
                    up(nums[i], nums[i] + 1)
                }
                // вниз !3!->2 пример [1,2,3]

                if (map_taks.has(nums[i] - 1)) {
                    key = nums[i] - 1

                    while (map_taks.get(key)[1] != null) {
                        map_taks.set(key, map_taks.get(key)[1])
                    }
                    map_taks.set(key, [map_taks.get(key) + 1, null])
                    map_taks.set(nums[i], [map_taks.get(key) + 1, key])
                }
            }
            else {
                // элемент есть в словаре. получается все ок
                continue

            }

        }
        // не ответ а словарь в котором должен быть отве
        return map_taks
    }
}

// сортировочное решение сам!!
let a = new Solution()

nums = [2, 20, 4, 10, 3, 4, 5]

// мой варик
nums = [1, 2, 4, 3]
// a.longestConsecutive(nums)
console.log('a.longestConsecutive(nums)::: ', a.longestConsecutive(nums));