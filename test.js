test_arr=new Array(3)
for (let i = 0; i < test_arr.length; i++) {
    const element = test_arr[i];
    test_arr[i]=2
}
test_arr.fill(3)
end=6
start=3
test_arr_from=Array.from({length:3},(v,k)=>end-start+k)
test_arr_from2=Array.from({length:3},_=> 4)
pas=1