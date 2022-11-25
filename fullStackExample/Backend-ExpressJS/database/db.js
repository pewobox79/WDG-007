import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    connectionString: 'postgres://ghfnvsfp:prd9pRfc9HARTHDEI7U6OQkFx6JS4Wfx@mouse.db.elephantsql.com/ghfnvsfp'
})

