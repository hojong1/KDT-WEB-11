create table customer (
    id varchar(10) not null primary key,
    name varchar(10) not null,
    birthday date not null
);

insert into customer (id, name, birthday) values
('aaa', '홍길동', '1990-03-17'),
('bbb', '성춘향', '1992-02-06'),
('ccc', '이몽룡', '1991-05-13');

create table orderlist (
    id int auto_increment primary key not null,
    customer_id varchar(10) not null,
    product_name varchar(20) not null,
    quantity int,
    foreign key (customer_id) references customer(id) 
);

insert into orderlist (customer_id, product_name, quantity) values
('aaa', '맥북프로', 1),
('bbb', '모니터', 10),
('ccc', '키보드', 3),
('bbb', '핸드폰', 2),
('ccc', '마우스', 10);

-- SELECT customer.id as order_id, customer.name, orderlist.product_name FROM customer inner join orderlist on customer.id = orderlist.customer_id
-- where orderlist.quantity >= 5;

create table departments (
    department_id int primary key,
    departments_name varchar(255) not null
);

drop table employees;

create table employees (
    employees_id int primary key,
    username varchar(31) not null,
    department_id int,
    foreign key (department_id), references departments(department_id)
);

insert into departments(department_id, department_name)