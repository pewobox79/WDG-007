export const getToken = async ()=>{

    const response = await fetch("http://localhost:3500/?token=");
    const json = await response.json();
    return json

}