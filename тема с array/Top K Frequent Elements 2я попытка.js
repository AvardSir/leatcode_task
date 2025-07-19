class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    static topKFrequent(nums, k) {
        let map_couner=new Map()
        
        for (const i of nums) {
            if (map_couner.has(i)) {
                map_couner.set(i,map_couner.get(i)+1)
            }
            else{
                map_couner.set(i,1)
            }
        }
        map_couner=Array.from(map_couner.entries())
        function sort_map_couner(map_couner) {
            // arr
            // [[1, 1]
            // [2, 3]]
            
            return map_couner.sort((a, b) => b[1]-a[1]  )
        }
        map_couner=sort_map_couner(map_couner)
        let ans=[]
        function searh_max(arr) {
            // arr
            // [1, 1]
            // [2, 3]
            // число количество_повторов 
            let max=arr[0][1]
            let max_indx=0
            for (let i = 0; i < arr.length; i++) {
                if (max<arr[i][1]) {
                    max=arr[i][1]
                    max_indx=i
                    // функция сломана. надо еще раз проверить
                }
                
            }
            return [max,max_indx]
            
        }
        // сколько угодно чисел а не тока 10 блиа
        // let min_arr=Math.min(...nums)-1
        // for (let i = 0; i < k; i++) {
        //     let [max,max_indx]=searh_max(map_couner)
        //     ans.push(map_couner[max_indx][0])
        //     map_couner[max_indx][1]=min_arr
        // }
        for (let i = 0; i < k; i++) {
            ans.push(map_couner[i][0])
            
        }
        return ans
    }
}
nums=[-1,-1]
k=1
nums=[1,2,2,3,3,3,3]
k=2

// nums=[7,7]
// k=1

// nums=[1,2]
// k=2

// Solution.topKFrequent(nums, k)
console.log('Solution.topKFrequent(nums, k)::: ', Solution.topKFrequent(nums, k));