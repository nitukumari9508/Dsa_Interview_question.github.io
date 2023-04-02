function anagram(s1, s2){
    if(s1.length!==s2.length){
        return false
    } 
    counter = {}
    for(let letters of s1){
    counter[letters]=(counter[letters]||0)+1
    }
    for(let item of s2){
        if(!counter[item]){
            return false
        }
        counter[item]-=1
    }
    return true
}
 const check = anagram("hello", "lloeh")
 console.log(check)