// how to implement linked list & deletelinkedList
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
  // delete any value in linked list
  delete(value){
    if(this.head===null){
        console.log("linked list is empty")
    }
    if(this.head.getVal()===value){
     this.head=this.head.next
     this.size--
    }
    
    else{
      let t1= this.head, t2 = null;
        while(t1){
if(t1.getVal()===value){
    t2.setNext(t1.getNext())
    this.size--
    return;
}else{
    t2=t1;
    t1=t1.getNext()
}
        }
      //  t2.setNext(t1.getNext())
      console.log(value ,"this value is not present in linkedlist")
    }

    
  }
 }
// let;s use linkedList 
let L= new linkedList()
L.add(5)
L.add(4)
L.add(3)
L.add(2)
L.delete(1)
L.print()
 
/// if we create new node setnode , getnextfunction getNext(){


