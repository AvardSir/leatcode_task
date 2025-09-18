class user {
    constructor(userID) {
        this.arTwits = []
        this.arToFolow = []
        this.arFromFolow = []
        this.userId = userID
        this.heap = new MaxPriorityQueue()
        // this.heap.toArray()
        this.heap.size

        this.toFolowSet = new Set()
        // this.heap.enqueue()
        // просто храним 
        // this.heap.enqueue(ValidityState,priority)
    }
}
// class Twit {
//     constructor(IdTwit, idAuthor) {
//         this.IdTwit = IdTwit
//         this.idAuthor = idAuthor

//     }
// }
class Twitter {
    constructor() {
        this.allUsers = new Map()
        // idUser->User


    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        let mpUser = this.allUsers
        let curUser
        if (!mpUser.has(userId)) {
            mpUser.set(userId, new user(userId))
        }
        curUser = mpUser.get(userId)

        // добавить userу 
        curUser.heap.push(tweetId);
        // в масив this.arTwits = []
        curUser.arTwits.push(tweetId);


        // добавить ПОДПСИЧКАМ ЮЗЕРА
        let folowers = curUser.arFromFolow
        if (folowers.length) {
            for (const folowerID of folowers) {
                // folowet
                let curFolower = this.allUsers.get(folowerID)
                // folowerID.heap.push(tweetId)
                curFolower.heap.push(tweetId)
                // TODO:  Cannot read properties of undefined (reading 'push')
            }

        }

        let pa1 = 1



    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        // TODO:
        let userMap = this.allUsers

        if (!userMap.has(userId)) {
            userMap.set(userId, new user(userId))
        }
        let curUser = userMap.get(userId)

        // curUser.heap
        // console.log('curUser.heap::: ', curUser.heap.size);
        let saveArr = []

        // let ar=[]
        // ar.length
        curUser.heap.length
        let count = Math.min(10, curUser.heap.size())
        for (let i = 0; i < count; i++) {
            const element = curUser.heap.pop()
            saveArr.push(element)
            // console.log('element::: ', element);


        }
        for (let i = count - 1; i >= 0; i--) {
            const element = saveArr[i];
            curUser.heap.push(element)

        }
        return saveArr
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        if (followeeId == followerId) {
            return
        }

        let userMap = this.allUsers

        if (!userMap.has(followerId)) {
            userMap.set(followerId, new user(followerId))
        }
        let folower = userMap.get(followerId)


        if (!userMap.has(followeeId)) {
            userMap.set(followeeId, new user(followeeId))
        }
        let creator = userMap.get(followeeId)

        // toFolowSet
        if (folower.toFolowSet.has(followeeId)) {
            return
        }

        // добавить на кого подписываемся новоый UserId подписчика
        creator.arFromFolow.push(folower.userId)
        // добавить кому подисываемя UserId на кого подписываемся 
        folower.arToFolow.push(creator.userId)
        // добавить подписчику в heap посты кого мы подписались. 

        // узнать все твиы creator
        let allTwitsToAdd = creator.arTwits
        // цикл по всем твитам 
        for (const twit of allTwitsToAdd) {
            // twit это idTwit

            // TODO: у фоловера heap сломан тк певрый элемент
            // UNDEF
            folower.heap.push(twit)
        }

        folower.toFolowSet.add(followeeId)
        let pa2 = 1

    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        if (followeeId == followerId) {
            return
        }
        if (!folower.toFolowSet.has(followeeId)) {
            return
        }
        let userMap = this.allUsers

        if (!userMap.has(followerId)) {
            userMap.set(followerId, new user(followerId))
        }
        let folower = userMap.get(followerId)


        if (!userMap.has(followeeId)) {
            userMap.set(followeeId, new user(followeeId))
        }
        let creator = userMap.get(followeeId)
        let idToDel
        // убрать кого подписываемся новоый UserId подписчика
        // creator.h
        idToDel = folower.userId

        creator.arFromFolow = creator.arFromFolow.filter((v, i) => v != idToDel)
        // убрать кому подисываемя UserId на кого подписываемся 
        folower.arToFolow.push(creator.userId)

        idToDel = creator.userId

        folower.arToFolow = folower.arToFolow.filter((v, i) => v != idToDel)

        // убрать подписчику в heap посты кого мы подписались. 

        // узнать все твиы creator

        // TODO: тут надо вроде исправить
        let allTwitsToAdd = creator.arTwits

        let folowerHeap = folower.heap
        folowerHeap = folowerHeap.toArray()
        // цикл по всем твитам 
        for (const twit of allTwitsToAdd) {
            // twit это idTwit

            // folower.heap.push(twit)


            idToDel = twit
            folowerHeap = folowerHeap.filter((v, i) => v != idToDel)




            // проблема в том что heap это ващет не просто массив из которого можно филтрануть
            // или можно?
            // как? ну удалить все.
            // to array -> filtr ->toHeap ->heap = toHeap
        }
        let newHeap = new MaxPriorityQueue()

        for (const twit of folowerHeap) {
            newHeap.push(twit)
        }

        folower.heap = newHeap

        folower.toFolowSet.del(followeeId)
        let pa1 = 12

    }
}


const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

let twit = new Twitter()

// twit.postTweet(1, 10);
// twit.postTweet(2, 20);
// twit.getNewsFeed(1);
// twit.getNewsFeed(2);
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

//TODO: тут ошибка гдет
// twit.follow(1, 2);
// twit.postTweet(2, 103);
// twit.getNewsFeed(1);
// twit.unfollow(1, 2);
// twit.postTweet(2, 104);
// twit.getNewsFeed(1);

twit.postTweet(2, 12);
twit.postTweet(2, 13);
twit.postTweet(3, 14);
twit.postTweet(3, 15);
twit.follow(2, 3);
twit.follow(3, 2);
twit.getNewsFeed(2);
twit.getNewsFeed(3);
twit.follow(2, 3);
twit.getNewsFeed(2);
twit.unfollow(3, 2);
twit.getNewsFeed(3);
