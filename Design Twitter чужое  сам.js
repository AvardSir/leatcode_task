class Twitter {
    constructor() {
        this.userToTwit = new Map()
        // key->val
        // id->arr[id]
        this.userToFolows = new Map()
        // key->val
        // id->Set(id)

        this.time = 0
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        if (!this.userToTwit.has(userId)) {
            this.userToTwit.set(userId, [])
        }
        let curTwitArr = this.userToTwit.get(userId)

        curTwitArr.push([tweetId, this.time])

        // this.userToTwit.set(userId, [])
        // TODO: потенциально ошибка тк мб не сылку а копию деалет
        // но наврядле
        this.time++
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {

        // TODO:
        // надо обхеить arr I + others
        let allFOLOW = []
        // for (let i = 0; i < this.userToTwit.get(userId).length; i++) {
        //     const element = this.userToTwit.get(userId)[i];
        //     // element[0]
        //      allFOLOW.push(element[0])
        // }

        if (this.userToTwit.has(userId)) {
            allFOLOW.push(this.userToTwit.get(userId))
        }

        // console.log('this.userToTwit.get(userId)::: ', this.userToTwit.get(userId));
        // let allFOLOW = [...this.userToTwit.get(userId)]
        // console.log('this.userToTwit.get(userId)::: ', this.userToTwit.get(userId));

        // есть user twitы 

        // allFOLOW.push()

        // есть те на кого подписан

        // TODO: нет добавления подписок постов 
        // получить на кого подписан
        if (!this.userToFolows.has(userId)) {
            this.userToFolows.set(userId, new Set())
        }
        let userFolowsSet = this.userToFolows.get(userId)

        for (const idFolowr of userFolowsSet) {
            // idFolowr
            allFOLOW.push(this.userToTwit.get(idFolowr))
        }
        // у каждого взять твиты и добавить в общий поток 
        // TODO: остановился тут тк кажется прблема что перезапсь твита
        let pas1 = 1
        // Heap ответа. 
        let ansHeap = new MaxPriorityQueue((item) => item.priority)
        // ansHeap.push({ value: 'task1', priority: 10 });
        let z = 10

        // надо высчитать z.
        let curMaxZ = 0

        for (let i = 0; i < allFOLOW.length; i++) {
            const element = allFOLOW[i];
            curMaxZ += element.length

        }
        z = Math.min(10, curMaxZ)
        let j = 0
        // function subFun() {
        //     while (z > 0) {
        //         for (let i = 0; i < allFOLOW.length; i++) {
        //             let curArrI = allFOLOW[i];
        //             if (z <= 0) {
        //                 return
        //             }
        //             // надо узнать что элемент 
        //             if (0 <= curArrI.length - 1 - j && curArrI.length - 1 - j < curArrI.length) {

        //                 // if (!curArrI.at(- 1 - j)) {
        //                 let el = curArrI[curArrI.length - 1 - j]
        //                 let val = el[0]
        //                 let pri = el[1]
        //                 ansHeap.push({ value: val, priority: pri });

        //                 // k++  
        //                 z--
        //             }



        //         }
        //         j++
        //         // z++
        //     }
        //     return
        // }
        // subFun()

        let realAll = []

        for (let i = 0; i < allFOLOW.length; i++) {
            const element = allFOLOW[i];
            for (let j = 0; j < element.length; j++) {
                const elementALL = element[j];
                // elementALL[0]
                let value = elementALL[0]
                let pre = elementALL[1]
                // ansHeap.push({ 'v'})
                ansHeap.push({ value: value, priority: pre });
                let pa1 = 1


            }
        }

        // for (let i = 0; i < z; i++) {
        //     const element = array[i];

        // }

        ansHeap = ansHeap.toArray().slice(0, 10)
        for (let i = 0; i < ansHeap.length; i++) {
            // const element = ansHeap[i];
            ansHeap[i] = ansHeap[i]['value']
        }

        return ansHeap
    }


    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followerId == followeeId) {
            return
        }
        if (!this.userToFolows.has(followerId)) {
            this.userToFolows.set(followerId, new Set())
        }
        let curSetFolower = this.userToFolows.get(followerId)
        curSetFolower.add(followeeId)
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {

        if (followerId == followeeId) {
            return
        }
        if (!this.userToFolows.has(followerId)) {
            return
        }
        // let pas=this.userToTwit
        let curSetFolower = this.userToFolows.get(followerId)
        curSetFolower.delete(followeeId)
        this.userToFolows.set(followerId, curSetFolower)

    }
}




const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

let twit = new Twitter()

// twit.postTweet(1, 10);
// twit.postTweet(2, 20);

// twit.postTweet(1, 15);
// twit.postTweet(2, 25);
// // twit.getNewsFeed(1);
// // twit.getNewsFeed(2);
// twit.follow(1, 2);
// twit.getNewsFeed(1);
// twit.getNewsFeed(2);
// twit.unfollow(1, 2);
// twit.getNewsFeed(1);


// twit.postTweet(1, 5);
// twit.getNewsFeed(1);
// twit.follow(1, 2);
// twit.postTweet(2, 6);
// twit.getNewsFeed(1);
// twit.unfollow(1, 2);
// twit.getNewsFeed(1);


// twit.postTweet(1, 100);
// twit.follow(1, 1);
// twit.getNewsFeed(1);
// twit.unfollow(1, 1);
// twit.getNewsFeed(1);

// twit.follow(1, 2);
// twit.postTweet(2, 103);
// twit.getNewsFeed(1);
// twit.unfollow(1, 2);
// twit.postTweet(2, 104);
// twit.getNewsFeed(1);

// twit.postTweet(2, 12);
// twit.postTweet(2, 13);
// twit.postTweet(3, 14);
// twit.postTweet(3, 15);
// twit.follow(2, 3);
// twit.follow(3, 2);
// twit.getNewsFeed(2);
// twit.getNewsFeed(3);
// twit.follow(2, 3);
// twit.getNewsFeed(2);
// twit.unfollow(3, 2);
// twit.getNewsFeed(3);


// twit.postTweet(1, 1);
// twit.postTweet(1, 2);
// twit.postTweet(1, 3);
// twit.postTweet(1, 4);
// twit.postTweet(1, 5);
// twit.postTweet(2, 6);
// twit.postTweet(2, 7);
// twit.follow(1, 2);
// twit.getNewsFeed(1);
// twit.unfollow(1, 2);
// twit.follow(1, 2);
// // twit.getNewsFeed(1);
// console.log('twit.getNewsFeed(1);::: ', twit.getNewsFeed(1));
// twit.postTweet(2, 8);
// twit.getNewsFeed(1);
// twit.unfollow(1, 2);
// twit.getNewsFeed(1);



// twit.postTweet(1, 5);
// // twit.getNewsFeed(1);
// twit.follow(1, 2);
// twit.postTweet(2, 6);
// // twit.getNewsFeed(1);
// twit.unfollow(1, 2);
// // twit.getNewsFeed(1);

// console.log('twit.getNewsFeed(1);::: ', twit.getNewsFeed(1));



// twit.postTweet(1, 101);
// twit.postTweet(1, 102);
// twit.follow(2, 1);
// twit.getNewsFeed(2);
// twit.unfollow(2, 1);
// twit.getNewsFeed(2);



// twit.postTweet(3, 9);
// twit.postTweet(3, 10);
// twit.postTweet(3, 11);
// twit.postTweet(3, 12);
// twit.postTweet(4, 13);
// twit.postTweet(4, 14);
// twit.follow(3, 4);
// twit.getNewsFeed(3);
// twit.follow(4, 3);
// twit.getNewsFeed(4);
// twit.unfollow(3, 4);
// twit.postTweet(4, 15);
// twit.postTweet(3, 16);
// twit.getNewsFeed(3);
// twit.getNewsFeed(4);
// twit.unfollow(4, 3);


twit.postTweet(3, 35);
twit.postTweet(5, 36);
twit.postTweet(5, 37);
twit.postTweet(5, 38);
twit.postTweet(5, 39);
twit.postTweet(3, 40);
twit.postTweet(5, 41);
twit.postTweet(5, 42);
twit.postTweet(5, 43);
twit.postTweet(3, 44);
twit.postTweet(3, 45);
// twit.getNewsFeed(5);
// twit.getNewsFeed(3);
twit.follow(3, 5);
// twit.getNewsFeed(3);
twit.unfollow(3, 5);
// twit.getNewsFeed(3);
twit.follow(5, 3);
// twit.getNewsFeed(5);
twit.postTweet(5, 46);
// twit.getNewsFeed(5);

console.log('twit.getNewsFeed(5);::: ', twit.getNewsFeed(5));