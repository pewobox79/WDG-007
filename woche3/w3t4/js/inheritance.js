
//Buch Vorlage Konstruieren/Constructor....
function Book(title, author, year, authorBirth){
    this.title = title,
    this.author = author,
    this.authorBirth = authorBirth,
    this.year = year
   
}

//prototyping
Book.prototype.getSummary = function(){
    return `${this.title} ist von ${this.author} erschienen im Jahr ${this.year}`
}



//Magazin constructor
function Magazin(title, author, year, authorBirth, month){
    Book.call(this, title, author, year, authorBirth)

    this.month = month;

}

const mag1 = new Magazin("magazin title", "Peter Wolf", "2020", "1979", "09");
console.log(mag1.getSummary())

