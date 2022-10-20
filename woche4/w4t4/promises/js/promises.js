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


function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);

            //simulaton error
            const error = false;

            if(!error){
                resolve();
            }else{
                reject("Error ist passiert! ");
            }


        },2000)


    })
}

//aneinanderreihung von abläufen durch <promise>.then()
createPost({title: "dritter post promise", body: "dritter post promise body"})
.then(getPosts)
.catch(err=> console.log(err))
