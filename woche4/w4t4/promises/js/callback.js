const posts =[
    {title: "first Post", body: "First post body"},
    {title: "second Post", body: "second post body"},
]

function getPosts(){
    setTimeout(()=>{

        let output ="";
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`
        })
        document.getElementById("postanker").innerHTML=output;

    }, 1000)

}

//normale createPost function 
/* function createPost(post){
    setTimeout(()=>{
        posts.push(post);
    }, 2000)
} */


//callback createPost funktion - Lösung zum problem der asynchronität
function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    }
), 2000}



createPost({title: "post drei", body: "post drei body"}, getPosts)

