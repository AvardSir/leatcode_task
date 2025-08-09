class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function ar_toNode(arr) {
    let ans = new ListNode(arr[0])
    let startNode = ans
    let prev = ans
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        ans.val = element
        ans.next = new ListNode()
        prev = ans

        ans = ans.next


    }
    prev.next = null
    return startNode

}

let arTest = [6, 4, 2]

let nodeArr = ar_toNode(arTest) 

lists = [[1,2,4],[1,3,5],[3,6]]


lists=lists.map((x=>ar_toNode(x)))


let pas=1
