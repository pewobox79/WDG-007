import {sleep} from './sleep';

export async function getPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!response.ok){
        throw {message: "hier ist was faul", status: 500}
    }
    return response.json();
}


export async function getArticle(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if(!response.ok){
        throw {message: "artikel nicht bekannt", status: 500}
    }
    return response.json()
}

export async function getSlowPosts(){
    await sleep(5000)
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!response.ok){
        throw {message: "hier ist was faul", status: 500}
    }
    return response.json();
}