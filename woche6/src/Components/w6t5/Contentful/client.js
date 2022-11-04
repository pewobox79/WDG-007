import * as contentful from 'contentful'

console.log(process.env)
export const client = contentful.createClient({

    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN
});

