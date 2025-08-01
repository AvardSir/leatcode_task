class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let len_nums1_plus_nums2 = nums1.length + nums2.length



        let l_nums1 = 0
        let r_nums1 = nums1.length - 1
        let mid_nums1 = l_nums1 + Math.floor((r_nums1 - l_nums1) / 2)
        let el_mid_nums1 = nums1[mid_nums1]

        let l_nums2 = 0
        let r_nums2 = nums2.length - 1
        let mid_nums2 = l_nums2 + Math.floor((r_nums2 - l_nums2) / 2)
        let el_mid_nums2 = nums2[mid_nums2]
        while (true) {
            mid_nums1 = l_nums1 + Math.floor((r_nums1 - l_nums1) / 2)
            el_mid_nums1 = nums1[mid_nums1]

            mid_nums2 = l_nums2 + Math.floor((r_nums2 - l_nums2) / 2)
            el_mid_nums2 = nums2[mid_nums2]
            if (el_mid_nums1 <= nums2[mid_nums2 + 1] && el_mid_nums2 <= nums1[mid_nums1 + 1]) {
                if (len_nums1_plus_nums2 % 2 != 0) {
                    let ans = el_mid_nums1 < el_mid_nums2 ? el_mid_nums1 : el_mid_nums2
                    return ans
                }
                else {
                    let L = el_mid_nums1 < el_mid_nums2 ? el_mid_nums1 : el_mid_nums2
                    // не факт что больше меньше правильный порядок
                    let R = nums1[mid_nums1 + 1] > nums2[mid_nums2] ? nums1[mid_nums1 + 1] : nums2[mid_nums2]

                    let ans = (L + R) / 2
                    return ans

                }
            }
            // проверить на работу надо
            if (el_mid_nums1 > nums2[mid_nums2 + 1]) {
                l_nums2 = mid_nums2
                if (mid_nums2 == l_nums2) {
                    l_nums2 = r_nums2
                }
                // r_nums2 = nums2.length - 1
                mid_nums2 = l_nums2 + Math.floor((r_nums2 - l_nums2) / 2)
                el_mid_nums2 = nums2[mid_nums2]
            }
            // проверить на работу надо

            if (el_mid_nums2 > nums1[mid_nums1 + 1]) {
                if (l_nums1 == r_nums1 - 1) {
                    l_nums1 = r_nums1
                }
                else {
                    l_nums1 = mid_nums1

                }


                // r_nums1 = nums1.length - 1
                mid_nums1 = l_nums1 + Math.floor((r_nums1 - l_nums1) / 2)
                el_mid_nums1 = nums1[mid_nums1]

                // l_nums2 = 0
                // r_nums2 = nums2.length - 1
                // mid_nums2 = l_nums2 + Math.floor((r_nums2 - l_nums2) / 2)
                // el_mid_nums2 = nums2[mid_nums2]
            }
            let pas = 1

        }


    }
}




// 
a = new Solution()
// 


nums1 = [1, 2, 3], nums2 = [1, 2, 3, 4]
nums1 = [1, 2, 3, 7], nums2 = [1, 2, 3, 6]
nums1 = [1, 2, 3,4], nums2 = [1, 5, 7, 8]

console.log('Задача ответ::: ', a.findMedianSortedArrays(nums1, nums2));
