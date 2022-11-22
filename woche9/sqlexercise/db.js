import pkg from 'pg';
const {Pool} = pkg;

const myConnectionString ='postgres://nnqflici:Nv07qmK7_iIjm6bjrMmm4CAL3Qbt3bzA@mouse.db.elephantsql.com/nnqflici'

export const pool = new Pool({
    connectionString: myConnectionString
});


