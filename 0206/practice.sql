create table user2 (
    id varchar(10) not null primary key, 
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F', 'M', '') default '',
    birthday date not null,
    age int(3) not null default 0
);

insert into user2 (id, pw, name, gender, birthday, age) values
('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33),
('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31),
('power70', 'qxur8xda', '변사또', 'M', '1970-05-02', 53),
('hanjo', 'js48fn4', '한조', 'M', '1984-10-18', 39),
('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47),
('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22),
('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);


-- insert into user2 (id, pw, name, gender, birthday, age) values ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
-- insert into user2 (id, pw, name, gender, birthday, age) values ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
-- insert into user2 (id, pw, name, gender, birthday, age) values ('power70', 'qxur8xda', '변사또', 'M', '1970-05-02', 53);
-- insert into user2 (id, pw, name, gender, birthday, age) values ('hanjo', 'js48fn4', '한조', 'M', '1984-10-18', 39);
-- insert into user2 (id, pw, name, gender, birthday, age) values ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
-- insert into user2 (id, pw, name, gender, birthday, age) values ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
-- insert into user2 (id, pw, name, gender, birthday, age) values ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);


SELECT * FROM user2 order by birthday asc;
select * from user2 where gender = 'M' order by name desc;
select id, name from user2 where birthday like '%199%';
select * from user2 where birthday like '%-06-%' order by birthday asc;
select * from user2 where gender = 'M' and birthday like '197%';
select * from user2 order by age desc limit 3;
select * from user2 where 25 <= age and age <= 50;
update user2 set pw = '12345678' where id = 'hong1234';
delete from user2 where id = 'jungkrat';  