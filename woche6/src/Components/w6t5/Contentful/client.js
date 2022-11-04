import * as contentful from 'contentful';

//dieser Client soll für alle componenten verfügbar sein, um relevante daten zu fetchen....deshalb export const....
export const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});