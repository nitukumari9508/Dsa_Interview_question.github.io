// string anagram--- no. of character are same but arragement are different
//hello-----'llleo'

let str ="hello"
let str1="llheo"
function anagram(str,str1){
    if(str.length!=str1.length){
return false
    }
    let count={}
    for(let letters of str){
        count[letters]=(count[letters]||0)+1
        console.log(count[letters])
        console.log(count)
    }
    for(let items of str1){
        if(!count[items]){
            return false
        } else {
            count[items]-=1
        }
    }
    return true
}
 const check = anagram(str,str1)
 console.log(check)
