create table users (
    id int primary key auto_increment,
    username varchar(100) not null,
    password varchar(100) not null,
    sex varchar(10)  not null,
    age int check ( age > 0 )
);

create table roles (
    id int not null primary key,
    name varchar(15) not null
);

create table users_roles (
    user_id  int references users(id),
    roles_id int references roles(id),
    primary key (user_id, roles_id)
);

insert into users(username, password, sex, age) values ('admin', '$2a$12$1PJKUcKo55KhLDO3FZS.jOy88a3MZcgBFkwTGMgFMHCeG7smX30.G', 'male', 38);
insert into users(username, password, sex, age) values ('user', '$2a$12$YT7FN/29dh/AaVNkF4g1c.A27Is5cOLIpSTwdDMgAV.sJOQjL/QUi', 'male', 28);

insert into roles(id, name) values (1,'ROLES_ADMIN');
insert into roles(id, name) values (2,'ROLES_USER');

insert into users_roles values (1, 1);
insert into users_roles values (2, 2);