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


async function init(){
    await createPost({title: "post 3", body: "post 3 body"})
    getPosts()

}

init();


//beispiel mit fetch

async function getData(){
    console.log("fetch starts");
    const response =  await fetch("https://dummyjson.com/posts");
   
    console.log("response erhalten",response);
    console.log("json umwandlung starts");

    const data = await response.json();

    return data

}

if(!data){
    return(
        <h1> warte auf daten</h1>
    )
}
getData();