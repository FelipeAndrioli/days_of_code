class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
        }
        else {
            this.title = title;
            this.author = author;
        }
    }
    
    display() {
        console.log('Implement the \'display\' method!')
    }
}


class MyBook extends Book {
    constructor(title, author, price){
        super()
        this.title = title
        this.author = author
        this.price = price
    }

    display(){
        console.log('Title: ' + this.title)
        console.log('Author: ' + this.author)
        console.log('Price: ' + this.price)
    }
}
// Declare your class here.
    /**   
    *   Class Constructor
    *   
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/
    // Write your constructor here
    
    /**   
    *   Method Name: display
    *   
    *   Print the title, author, and price in the specified format.
    **/
    // Write your method here
    
// End class

function main() {
    let title = 'The Alchemist'
    let author = 'Paulo Coelho'
    let price = 248

    let book = new MyBook(title, author, price)
    book.display()
}

main()