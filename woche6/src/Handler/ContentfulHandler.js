class Author{
    constructor(data){
        this.data = data;
        this.authors = data.items
    }

    getAuthorNameList(){
        let name = []
       this.authors.forEach((author)=>{
            const singleName =author.fields.name
        name.push(singleName)
       })
       return name
    }
}

export default Author