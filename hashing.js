//In hashing  is already present in js main motive of every ds searching fast , acees fast give one real life example 
//  mixture of coins in different coins  different coin are availble i want to onlt 20 rs coins you go search all coins & find out 20 rs coins 
// then find 20 rs coins take too much time  if you searching fast use hashing & hash function means apply on level 
// hash function : if you pass ket & generate one key & return key less too much optimal means collision
//pure functio same input p same output.
// collision if you to  different key but genrate same key is called collision
// many techniques are there in hashing one is linear pprobing 
// time complexity of hashing in avg case O(1) and worst case O(n)
//   i have 10 length of array suppose 11 %10--- 1  means 0to 9 

class hashTable{
    constructor(size){
this. hashTable = (new Array(4).fill(0).map(curr=>[-1,-1]))
this.size=0
    }
    hashFunction(key){
 return key%this.hashTable.length
    }
    insert(key,value){

        let hashKey = this.hashFunction(key)// it generates hashkey
        this.hashTable[hashKey][0]=key
        this.hashTable[hashKey][1]=value
    }
    remove(key){

        let hashKey = this.hashFunction(key)// it generates hashkey 
    }
getSize(){
return this.size
}
    
}