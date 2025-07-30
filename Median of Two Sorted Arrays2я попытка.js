class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {

        function nums_len_less_2(nums1, nums2) {
            if (nums1.length > nums2.length) {
                let nums_more = nums1
                let nums_one = nums2
            }
            else {
                let nums_more = nums2
                let nums_one = nums1
            }

            // nums_more
            let taget = nums_one

            // 's'.length
            // if (nums_more[r] == taget) {

            //     // 1 1 2 3 

            //     // 1 2 3 4
            //     let Nechet = (nums_more[Math.floor(nums_more.length / 2) - 1] + nums_more[Math.floor(nums_more.length / 2)]) / 2

            //     let chet = nums_more[Math.floor(nums_more.length / 2) - 1]
            //     return nums_more.length % 2 != 0 ? Nechet :
            // }

            // TODO: сделай случай проверки nums_more[l]
            let l = 0, r = nums_more.length
            let mid = l + Math.floor((r - l) / 2)
            while (l != r - 1) {
                mid = l + Math.floor((r - l) / 2)
                if (taget < nums_more[mid]) {
                    r = mid
                }
                if (taget > nums_more[mid]) {
                    l = mid
                }
                if (taget == nums_more[mid]) {

                }

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

console.log('Задача ответ::: ', a.findMedianSortedArrays(nums1, nums2));
