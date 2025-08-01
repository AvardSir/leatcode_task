const game_genres=new Map()

game_genres.set('wow','mmoRpg')

game_genres.set('staler','shooter')


game_genres.set('dota','moba')

let test=game_genres.get('dota')

game_genres.delete('dota')

let size_of_games=game_genres.size

game_genres.clear()


game_genres.set('skyrim','rpg')


for (let i = 0; i < game_genres.entries(); i++) {
    console.log('i::: ', i);
    // const element = game_genres[i];
    
}
test_arr=[1,2,3]
for (const i of test_arr) {
    console.log('i::: ', i);
    
}

game_genres.set('csgo','shoter')

for (const i of game_genres.entries()) {
    console.log('game_genres::: ', i[0]);
    
}


test_arr2=[1,2,3]
sum=0
test_arr2.forEach(element => {
    sum+=element
});
console.log('forEach sum::: ', sum);
sum=0

for (const i of test_arr2) {
    sum+=i
}
console.log('of sum::: ', sum);
game_genres.has('mario')
console.log('game_genres.has("mario")::: ', game_genres.has('mario'));
console.log('game_genres.has(csgo)::: ', game_genres.has('csgo'));
pass=32

