USE employee_db;
INSERT INTO department (name)
VALUES 
('Engineering'),
('Sales'),
('Marketing'),
('Operations'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, department_id, department_name)
VALUES
('Project Manager', 150000, 1, 'Engineering'),
('Software Developer', 120000, 1, 'Engineering'),
('SDR', 50000, 2, 'Sales'),
('VP of Marketing', 200000, 3, 'Marketing'),
('HR Represntative', 120000, 4, 'Operations'),
('CFO', 250000, 5, 'Finance'),
('Laywer', 180000, 6, 'Legal');


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Jacob', 'Carver', 1, 1),
('Barack', 'Obama', 2, 2),
('Josef', 'Stalin', 3, 4),
('Benito', 'Mussolini', 4, 1),
('Dylan', 'Kreisman', 6, null),
('George', 'Bush', 5, 2);

