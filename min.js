function mostMinNum(numbers){
    let find = numbers[0];
    for(const num of numbers){
        if(num < find){
           find = num;
        }
    }
    return find;
}
const array = [167, 190, 120, 165, 137];
console.log(mostMinNum(array));
