// linked list every particular element is node every node in linkedlist is object
// every node have two things value, address
class Node{
    constructor(val){// user only give value
this.val= val // this refers instance // users its given
this.next = null// it is point on next val
    }
    getVal(){
        return this.val
    }    
     getNext(){
      return  this.next
    }
     setNext(node){
this.next = node
    }
}
 var Ll=new node()
 
/// if we create new node setnode , getnextfunction getNext(){



class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  function solution(a, b) {
    let head = null;
    let tail = null;
  
    for (let i = 0; i < a; i++) {
      const node = new Node(b[i]);
  
      if (head === null) {
        head = node;
      } else {
        tail.next = node;
      }
  
      tail = node;
    }
  
    let count = 0;
    let current = head;
  
    while (current !== null) {
      count++;
      current = current.next;
    }
  
    return count;
  }
  
  function main() {
    const a = parseInt(readLine());
    const b = readLine().split(" ").map(Number);
    const res = solution(a, b);
    console.log(res);
  }
  
   