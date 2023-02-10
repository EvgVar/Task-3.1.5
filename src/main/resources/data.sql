insert into users(username, password, sex, age) values ('admin', '$2a$12$1PJKUcKo55KhLDO3FZS.jOy88a3MZcgBFkwTGMgFMHCeG7smX30.G', 'male', 38);
insert into users(username, password, sex, age) values ('user', '$2a$12$YT7FN/29dh/AaVNkF4g1c.A27Is5cOLIpSTwdDMgAV.sJOQjL/QUi', 'male', 28);

insert into roles(id, name) values (1,'ROLE_ADMIN');
insert into roles(id, name) values (2,'ROLE_USER');

insert into users_roles values (1, 1);
insert into users_roles values (2, 2);