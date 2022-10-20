//wir legen ein paar unterschiedliche promise fest

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("hallo students");
    },1000)

})

const promise2 = 10;
const promise3 = Promise.resolve("hallo promise 3");
const promise4 = fetch("https://dummyjson.com/posts").then(res => res.json());


Promise.all([promise1, promise2, promise3, promise4])
.then(values => console.log(values))