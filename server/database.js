import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const db=mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
}).promise()


async function login(details) {
    console.log(details)
    await db.query(
        `create table if not exists users(
            USERNAME varchar(255) not null primary key,
            PASSWORD varchar(255) 
        )`
    );
    const [result] = await db.query(
        `select * from users where USERNAME=? and PASSWORD=?`,[details.username,details.password]
    );
    console.log("result",result)
    if(result.length>0){
        return true;
    }else{
        return false;
    }
}
async function signUp(details){
    await db.query(
        `create table if not exists users(
            USERNAME varchar(255) not null primary key,
            PASSWORD varchar(255) 
        )`
    );
    await db.query(
        `create table if not exists userdetails(
            USERNAME varchar(255) not null primary key,
            FIRST_NAME varchar(255),
            LAST_NAME varchar(255),
            CF_HANDLE varchar(255),
            CC_HANDLE varchar(255),
            foreign key(USERNAME) references users(USERNAME) on delete cascade
        )`
    );
    const [result] = await db.query(
        `select * from users where USERNAME=?`,[details.username]
    );
    if(result.length==0){
        await db.query(
        `insert into users (USERNAME,PASSWORD)
        values(?,?)`,[details.username,details.password]
        );
        await db.query(
        `insert into userdetails(USERNAME,FIRST_NAME,LAST_NAME,CF_HANDLE,CC_HANDLE)
        values(?,?,?,?,?)`,[details.username,details.fname,details.lname,details.cfhandle,details.cchandle]
        );
        return true;
    }else{
        return false;
    }
    // return true;
}
async function getUserData(details){
    const [result] = await db.query(
        `select * from userdetails where USERNAME=?`,[details.username]
    );
    return result[0]
}

export {login,signUp,getUserData}