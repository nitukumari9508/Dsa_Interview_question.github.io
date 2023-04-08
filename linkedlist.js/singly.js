// linked list every particular element is node every node in linkedlist is object
// every node have two things value, address
class Node{
    constructor(value){// user only give value
this.value= value // this refers instance // users its given
this.next = null// it is point on next val
    }
    getVal(){
        return this.value
    }    
     getNext(){
      return  this.next
    }
     setNext(node){//node address
this.next = node
    }
}
 class linkedList{
  constructor(){
    this.head=null;
    this.tail=null;
    this.length=0
  }
  add(value){
    const newNode = new Node(value)
    if(this.length==0){
      this.head=  newNode;
      this.tail=newNode
    }else{
this.tail.next=newNode;
this.tail=newNode
    }
    this.length++

  }
  print(){
    let temp = this.head
    let str=""
    while(temp!==null){
     str = str + '' + temp.getVal();
      console.log(temp.getVal())
      if(temp.getNext()!=null){
        str = str+' -> '
      }
      temp=temp.getNext()
    }
    console.log(str)
  }
 }
// let;s use linkedList 
let L= new linkedList()
L.add(5)
L.add(4)
L.add(3)
L.add(2)
L.print()
 
/// if we create new node setnode , getnextfunction getNext(){


