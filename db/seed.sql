INSERT INTO department (name)
VALUES 
('Engineering'),
('Sales'),
('Marketing'),
('Operations'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Project Manager', 150.000, 1),
('Software Developer', 120.000, 1);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Jacob', 'Carver', 1, null),
('Barack', 'Obama', 2, 1),
('Josef', 'Stalin', 2, 2);
