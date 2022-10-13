//ES6
class Book{
    constructor(title, author, year){
            this.title = title,
            this.author = author,
            this.year = year
    }

    /**funktionen können im Objekt aufgerufen werden - sind automatisch im __proto__ bereich
     * Mit der Aufnahme in den prototype bereich ist es somit auch möglich, bei einem EXTENDS die 
     * funktionen ebenfalls aufrufen zu können.
     * */
    
    getSummary(){
        return `${this.title} wurde von ${this.author} im Jahre ${this.year} veröffentlicht`
    }

    getAuthor(){
        return `${this.author} hat dieses Buch geschrieben`
    }

    setRevisedYear(updatedYear){
        this.year = updatedYear;
        this.revised = true;
    }

//beziehen sich nur auf die Class - können nicht im Objekt aufgerufen werden
    static getFavoriteBook(){
        return "Harry Potter";
    }

}

const myNewBook = new Book("Class Book", "Peter", "2022");

console.log(Book.getFavoriteBook())

/* myNewBook.setRevisedYear("2010");
console.log(myNewBook); */


//Extend neue Class mit bestehender Class
class Magazine extends Book{
    constructor(title, author, year, month){
        //super represntiert die properties aus Book
        super(title, author, year);
        //danach die properties aus der neuen class magazine
        this.month = month;
    }
}

const magazine1 = new Magazine("mag1", "peter", "2022", "09");
console.log(magazine1)

console.log(magazine1.getSummary())