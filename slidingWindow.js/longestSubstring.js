// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
//substring means  character do not repeat , sequece maintain

//a,ab,abc,bc
// using sliding window shifting take one window  & two pointers & shifting this & return window is substring & max length

var lengthOfLongestSubstring = function(s) {
    //sliding window approach
    let maxLength = 0;
    let start = 0;
    let end =0
    
    if(!s){
       return 0 
    }
    const uniqueChar = new Set()// it contains  unique character 
    while(end < s.length){
if(!uniqueChar.has(s[end])){// this condition only valid for uniqueChar
  uniqueChar.add(s[end]) 
  end++ 
  maxLength=Math.max(maxLength, uniqueChar.size)
}else{
   uniqueChar.delete(s[start]) 
   start++
}
    }
    
        
    return maxLength;
}
console.log(lengthOfLongestSubstring('abcdabddd'))
