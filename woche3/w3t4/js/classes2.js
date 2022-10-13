//data.js
const blogposts ={
    sport:[
        {title: "Sport Title 1", body:"Das ist mein Sport Title 1 Body", author: "Peter Wolf", timetoread: "4" },
        {title: "Sport Title 2", body:"Das ist mein Sport Title 2 Body", author: "Max mueller", timetoread: "10" },
        {title: "Sport Title 3", body:"Das ist mein Sport Title 3 Body", author: "klaus", timetoread: "5" },
    ],
    fashion: [
        {title: "Fashion Title 1", body:"Das ist mein Fashion Title 1 Body", author: "Peter Wolf", timetoread: "4" },
        {title: "Fashion Title 2", body:"Das ist mein Fashion Title 2 Body", author: "Max mueller", timetoread: "10" },
        {title: "Fashion Title 3", body:"Das ist mein Fashion Title 3 Body", author: "klaus", timetoread: "5" },
    ],
}



//datahandler.js
class BlogData{
    constructor(data){
        this.sports = data.sport,
        this.fashion = data.fashion
    }


    getSportArticle(){
        return this.sports
    }

    getFashionArticle(){
        return this.fashion
    }

    getSportArticleAuthor(sportArtikel){
        let myArray = new Array
        sportArtikel.map((item)=>{
            myArray.push(item.author)
        
        })
        return myArray;
    
    }
}




//compente.js
const dataHandler = new BlogData(blogposts)

const sportsArticles = dataHandler.getSportArticle();
console.table(sportsArticles)

sportsArticles.forEach((item)=>{
    console.log(item)
})


const authorList = dataHandler.getSportArticleAuthor(sportsArticles)
console.log(authorList)



