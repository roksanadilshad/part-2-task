function smallName(names){
    let smallest = names[0];//dhori 1st word jodi smallest hoy ...
    
   
    for(let small of names){
        if(small.length < smallest.length){
            smallest = small;
        }
    }
    return smallest;
}

const result = smallName(['rahim', 'robin', 'rafi', 'ron', 'rashed']);
console.log(result);
