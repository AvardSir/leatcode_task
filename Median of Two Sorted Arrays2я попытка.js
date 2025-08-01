class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if (nums1.length == 0) {
            let l1 = 0, r1 = nums2.length - 1
            let chet = (nums2[Math.floor((r1 - l1) / 2) + 1] + nums2[Math.floor((r1 - l1) / 2)]) / 2
            return nums2.length % 2 != 0 ? nums2[Math.floor((r1 - l1) / 2)] : chet
        }
        if (nums2.length == 0) {
            let l1 = 0, r1 = nums1.length - 1
            let chet = (nums1[Math.floor((r1 - l1) / 2) + 1] + nums1[Math.floor((r1 - l1) / 2)]) / 2
            // console.log('nums1[Math.floor((r1 - l1) / 2)]::: ', nums1[Math.floor((r1 - l1) / 2)]);
            // console.log('nums1 % 2 != 0::: ', nums1 % 2 != 0);

            return nums1.length % 2 != 0 ? nums1[Math.floor((r1 - l1) / 2)] : chet
        }

        function nums_len_less_2(nums1, nums2) {
            let nums_more = 0
            let nums_one = 0
            if (nums1.length > nums2.length) {
                nums_more = nums1
                nums_one = nums2
            }
            else {
                nums_more = nums2
                nums_one = nums1
            }

            let taget = nums_one
            let l = 0, r = nums_more.length - 1
            if (nums_more.length % 2 == 0) {
                r = nums_more.length - 1
                l = 0 + Math.floor((r) / 2)
                // nums_more[l]
                if (nums_one <= nums_more[l]) {
                    return nums_more[l]
                }
                if (nums_more[l] < nums_one && nums_one < nums_more[l + 1]) {
                    return nums_one[0]
                }
                if (nums_one >= nums_more[l + 1]) {
                    return nums_more[l + 1]
                }
                let ar = 1


            }

        }

        if (nums1.length == 1 || nums2.length == 1) {
            return nums_len_less_2(nums1, nums2)
        }

        let n = nums1.length + nums2.length

        let len_left = Math.floor((n) / 2)
        // доделай случай когжа один массив просто меньше другого массива
        if (nums1[nums1.length - 1] <= nums2[0]) {
            if (len_left < nums1.length) {
                let chet = (nums1[len_left] + nums1[len_left - 1]) / 2
                return n % 2 != 0 ? nums1[len_left] : chet
            }
            else if (len_left == nums1.length) {
                return (nums1[nums1.length - 1] + nums2[0]) / 2
            }
            else if (len_left > nums1.length) {
                len_left = len_left - nums1.length
                let chet = (nums2[len_left] + nums2[len_left - 1]) / 2
                return n % 2 != 0 ? nums2[len_left] : chet

            }
            else {
                console.log('::wtf: ');
            }

        }
        if (nums2[nums2.length - 1] <= nums1[0]) {
            if (len_left < nums2.length) {
                let chet = (nums2[len_left] + nums2[len_left - 1]) / 2
                return n % 2 != 0 ? nums2[len_left] : chet
            }
            else if (len_left == nums2.length) {

            }
            else if (len_left > nums2.length) {
                len_left = len_left - nums2.length
                let chet = (nums1[len_left] + nums1[len_left - 1]) / 2
                return n % 2 != 0 ? nums1[len_left] : chet

            }
            else {
                console.log('::wtf: ');
            }

        }
        // TODO: правое значение в массивах коректно сравнивается
        // изза особенеости бинароного поиска

        let l1 = 0, r1 = nums1.length - 1
        let l2 = 0, r2 = nums2.length - 1

        let mid1 = Math.floor((r1 - l1) / 2)
        let mid2 = Math.floor((r2 - l2) / 2)


        let el_m1 = nums1[mid1]
        let el_m2 = nums2[mid2]


        while (true) {
            mid1 = l1 + Math.floor((r1 - l1) / 2)
            r2 = len_left - (mid1 + 1) - 1
            if (nums2[r2] > nums1[mid1 + 1]) {
                l1 = mid1
            }
            else if (nums1[mid1] > nums2[r2 + 1]) {
                r1= mid1
                let pas = 1
            }
            else if ((nums1[mid1] <= nums2[r2 + 1]) && (nums2[r2] <= nums1[mid1 + 1])) {
                // max_left + min_right)/2
                // or
                if (n % 2 != 0) {
                    return nums1[mid1] > nums2[r2] ? nums1[mid1] : nums2[r2]
                }
                else {
                    let L_Max_val = nums1[mid1] > nums2[r2] ? nums1[mid1] : nums2[r2]
                    let R_min_val = nums1[mid1 + 1] > nums2[r2 + 1] ? nums2[r2 + 1] : nums1[mid1 + 1]
                    let mediana = (L_Max_val + R_min_val) / 2
                    return mediana
                }

            }
            // let pas = 1
        }
    }
}




// 
a = new Solution()
// 


nums1 = [1, 2, 3], nums2 = [1, 2, 3, 4]
nums1 = [1, 2, 3, 7], nums2 = [1, 2, 3, 6]
// nums1 = [1, 2, 3, 4], nums2 = [1, 5, 7, 8]
// nums1 = [1, 2, 3, 4], nums2 = [5, 7, 8]
// nums1 = [1, 2, 3], nums2 = [1, 2, 3]

nums1 = [1, 3]
nums2 = [2]



// не решает вообще разобрать
nums1 = [1, 2]
nums2 = [3, 4]

nums1 = []
nums2 = [1]

nums1 = [2]
nums2 = []


nums1=[1,4,7]
nums2=[2,3,5,6]
console.log('Задача ответ::: ', a.findMedianSortedArrays(nums1, nums2));
