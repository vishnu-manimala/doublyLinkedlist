//creating a node with value and next pointer
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
//creating a linked list
class Linkedlist {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //check whether the list is emplt or not!!
    isEmpty(){
        return this.size === 0;
    }

    //to retrieve the size of the linked list
    getSize(){
        return this.size;
    }
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head=node;
        } else {
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next=node;
        }
        this.size++;
    }
    printList(){
        if(this.isEmpty()){
            console.log("the list is empty  ");
        } else {
            let current = this.head;
            let listValues = '';
            while(current){
                listValues+=` ${current.value} `;
                // console.log(current.value);
                current = current.next;
            }
            console.log(listValues);
        }
    }
}

function binarySearch(keyValue,list){

    if(list.isEmpty()){
        console.log("empty");
    } else 
    {
        let end= list.size;
        let start = 0;
        let mid1=(start+end)/2;
        let mid = Math.floor(mid1);
        //console.log(mid);
        let link = list.head;
        while(link && start<=end){
            for(let i =start;i<mid;i++)
            {
                link= link.next;
            
            }
            if(link.value === keyValue)
            {
                    console.log(`found at position  ${mid+1}`);
                    return;
            } else if(keyValue>link.value)
            {
                    start = mid+1;
                    mid1= Math.floor(start+end)/2;
                    mid = Math.floor(mid1);
                    //console.log(mid);
                    link = link.next;
                    
            } else if(keyValue<link.value){
                end = mid-1;
                mid1= Math.floor((start+end)/2);
                mid = Math.floor(mid1);
                link = list.head;
            }
        }
    }
    
}
const list = new Linkedlist();

let arr = [1,2,3,4,5,6,7];
arr.forEach(element => {
        list.append(element); 
});
console.log("Array to linkedlist ");
list.printList();
console.log("binarySearch(2)");
binarySearch(2 ,list);
console.log("binarySearch(6)");
binarySearch(6 ,list);