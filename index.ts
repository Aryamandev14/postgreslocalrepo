import {Client} from 'pg';

const client=new Client({
    connectionString:"postgresql://postgres:root@localhost:5433/postgresprac"
})

async function createUserTable(){
    await client.connect();
    const res=await client.query(`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
); `)
console.log(res);
}
createUserTable();