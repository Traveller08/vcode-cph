create table users(
    USERNAME varchar(255) not null primary key,
    PASSWORD varchar(255) 
)
select * from users where USERNAME='hello' and PASSWORD='hii'
insert into users (USERNAME,PASSWORD)
values('admin_one','pass123');
create table if not exists userdetails(
    USERNAME varchar(255) not null primary key,
    FIRST_NAME varchar(255),
    LAST_NAME varchar(255),
    CF_HANDLE varchar(255),
    CC_HANDLE varchar(255),
    foreign key(USERNAME) references users(USERNAME) on delete cascade
)

insert into userdetails(USERNAME,FIRST_NAME,LAST_NAME,CF_HANDLE,CC_HANDLE)
values(?,?,?,?,?),[details.username,details.fname,details.lname,details.cfhandle,details.cchandle]