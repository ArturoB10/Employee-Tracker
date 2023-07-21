
INSERT INTO department(name)
VALUES
    ("HR"),
    ("SALES"),
    ("PRODUCTION");

INSERT INTO role(title,salary,department_id)
VALUES
    ("HR Rep", 50000,1),
    ("SALES Rep", 30000,2),
    ("Engineer", 40000,3);

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES
    ("John", "Smith", 1, null),
    ("Stephen", "Jones", 2, 1),
    ("Jose", "Martinez", 3, 1);
