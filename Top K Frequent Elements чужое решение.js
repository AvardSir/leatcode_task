class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // задача. n самых встрчающихся чисел в массиве
    static topKFrequent(nums, k) {
        const count = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        
        for (const n of nums) {
            //берем словарь. заполняем его. Элемента нет, тогда добавляем. через || сделана проверка на наличие значения
            count[n] = (count[n] || 0) + 1;
            //получаем словарь счетча количества каждой цифры
        }
        for (const n in count) {
            // частота 
            // как связана?
            
            freq[count[n]].push(parseInt(n));
        }

        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}

nums = [-1, -1]
k = 1

// nums=[7,7]
// k=1
nums = [1, 2]
k = 2

nums = [1, 2, 2, 3, 3, 3, 3]
k = 2
// Solution.topKFrequent(nums, k)
console.log('Solution.topKFrequent(nums, k)::: ', Solution.topKFrequent(nums, k));