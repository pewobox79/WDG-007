import {sleep} from '../util/sleep';

export async function getPosts() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw { message: "There is a error dude!", status: 500 };
    }
    return response.json();

}

export async function getPost(id) {
    console.log("incoming",id)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
        throw { message: "no post detected", status: 500 }
    }
    return response.json()
}


export async function getSlowPosts() {
     await sleep(2000);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw { message: "There is a error dude!", status: 500 };
    }
    return response.json();

}
