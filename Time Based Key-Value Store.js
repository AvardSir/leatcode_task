class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            this.keyStore.get(key).push([value, timestamp])
            // this.keyStore.get(key).sort((a, b) => a[1] - b[1])
        }
        else {
            this.keyStore.set(key, [[value, timestamp]])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return ''
            
        }
        let arr = this.keyStore.get(key)
        

        // arr = [[val, time][val, time][val, time]]
        let target = timestamp
        // длина правильно написана?
        // 's'.length
        let l = 0, r = arr.length - 1

        let el_l = arr[l][1]
        let el_r = arr[r][1]
        if (el_l > target) {
            return ''
        }
        if (arr.length == 1) {
            return arr[0][0]
        }
        let mid = l + Math.floor((r - l) / 2)
        if (el_l == target) {
            return arr[l][0]
        }
        else if (el_r == target) {
            return arr[r][0]
        }

        while (l != r - 1) {
            mid = l + Math.ceil((r - l) / 2)
            let el_mid = arr[mid][1]
            if (el_mid == target) {
                return arr[mid][0]
            }
            // el_l = arr[l][1]
            // el_r = arr[r][1]
            if (target < el_mid) {
                // mid = r
                r = mid
            }
            else if (el_mid < target) {
                // mid = l
                l = mid
            }
        }

        el_l = arr[l][1]
        let val_el_l = arr[l][0]

        el_r = arr[r][1]
        let val_el_r = arr[r][0]
        if (arr[r][1] <= target) {
            return arr[r][0]
        }
        if (el_l < target && target < el_r) {
            return val_el_l
        }
        // if letf<target<rught
        // return left
        return arr[mid][0]

        // посмотри решение
    }
}






// 
// a = new Solution()
// 

// nums = [4, 5, 6, 7]

// console.log('Задача ответ::: ', a.search(nums, target));

let check = new TimeMap()
// let key = 'bar', value = '1', timestamp = 1
// check.set(key, value, timestamp)
// value = '5', timestamp = 5
// check.set(key, value, timestamp)




// ["TimeMap",
// "set", ["test", "one", 10],

key = 'test', value = 'one', timestamp = 10
check.set(key, value, timestamp)


// "set", ["test", "two", 20],

key = 'test', value = 'two', timestamp = 20
check.set(key, value, timestamp)


// "set", ["test", "three", 30],

key = 'test', value = 'three', timestamp = 30
check.set(key, value, timestamp)


// "get", ["test", 15],

key = 'test', value = 'one', timestamp = 15
check.get(key, timestamp)
console.log('check.get(key, timestamp)::: ', check.get(key, timestamp));


// "get", ["test", 25],
key = 'test', value = 'one', timestamp = 25
check.get(key, timestamp)

// "get", ["test", 35]]
key = 'test', value = 'one', timestamp = 35
check.get(key, timestamp)

// timestamp = 1111
check.get(key, timestamp)
// console.log('check.get(key, timestamp)::: ', check.get(key, timestamp));