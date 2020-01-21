function Solution(){

    let stack = []
    let queue = []

    this.pushCharacter = function(n){
        stack.push(n)
    }

    this.popCharacter = function(){
        return stack.pop()
    }

    this.enqueueCharacter = function(i){
        queue.push(i)
    }

    this.dequeueCharacter = function(){
        return queue.shift()
    }

    this.printQueue = function(){
        for(let i = 0; i < queue.length; i++){
            console.log(queue[i])
        }
    }

    this.printStack = function(){
        for(let i = 0; i < stack.length; i++){
            console.log(stack[i])
        }
    }

}

function main(){
    // read the string s
    var s = "yes"
    var len=s.length;
    // create the Solution class object p
    var obj=new Solution();
    //push/enqueue all the characters of string s to stack
    for(var i=0;i<len;i++){
        obj.pushCharacter(s.charAt(i));
        obj.enqueueCharacter(s.charAt(i));
    }

    var isPalindrome=true;
    /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

    for(var i=0;i<len/2;i++){

        if(obj.popCharacter()!=obj.dequeueCharacter()){
            isPalindrome=false;
          	break;
        }
    }
    //finally print whether string s is palindrome or not

    if(isPalindrome)
        console.log("The word, "+s+", is a palindrome.");    
    else
        console.log("The word, "+s+", is not a palindrome.");
}

main()