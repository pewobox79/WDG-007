
class InitData{
    constructor(data){
        this.fashion = data.fashion
        this.sports = data.sports
    }
getSportsArticle(){
    return this.sports
}

getFashionArticle(){
    return this.fashion
}

}


const blogposts={
    sports:[
        {title: "Basketball is cool", body: "this is my basketball article body", date: "13.10.22", author: "Peter Wolf"},
        {title: "Football is brutal", body: "this is my football article body", date: "17.10.22", author: "Peter Wolf"},
        {title: "Soccer is ballet", body: "this is my soccer article body", date: "09.09.22", author: "Peter Wolf"}
    ],
    fashion:[
        {title: "original is streetwear", body: "this is my original article body", date: "10.10.22", author: "Peter Wolf"},
        {title: "nike is sportswear", body: "this is my nike article body", date: "18.10.22", author: "Peter Wolf"},
        {title: "fubu is less famous in germany", body: "this is my fubu article body", date: "09.12.22", author: "Peter Wolf"}
    
    ]
}


const initData = new InitData(blogposts)
const sportsArticles = initData.getSportsArticle();

sportsArticles.forEach(element => {
    console.log(element.title)
});