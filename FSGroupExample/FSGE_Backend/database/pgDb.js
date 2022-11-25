import pkg from 'pg';
const {Pool} = pkg;

const connectionUrl = 'postgres://zneyvfyy:gAgl5hyW4eHTz7z2aFlB1LZLjXas3YAs@mouse.db.elephantsql.com/zneyvfyy'
export const pool = new Pool({
    connectionString: connectionUrl
})