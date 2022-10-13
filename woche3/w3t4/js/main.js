
//Object Literal
//lösung ohne OOP ....
const book1 = {
    title: "Book 1",
    author: "Peter Wolf",
    authorBirth: "1979",
    year: "2021",
    getSummary: function(){
        return `${this.title} ist von ${this.author} erschienen im Jahr ${this.year}`
    },
    getAuthor:function(){
        return `${this.author} ist geboren im Jahr ${this.authorBirth}`
    }
}

const book2={
    title: "Book 2",
    author: "Peter Müller",
    year: "2000",
    getSummary: function(){
        return `${this.title} ist von ${this.author} erschienen im Jahr ${this.year}`
    }
}


//lösung mit OOP
//ES5
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


//Buch Instantiate ...
const buch1 = new Book("Buch 1 Title", "Peter Wolf", "2013");
const buch2 = new Book("Buch 2 Title", "peter klaus", "2000");
console.log(buch1.getSummary())
console.log(buch2)





