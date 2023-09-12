/* create database */
CREATE DATABASE db_name;

/* drop database */
DROP DATABASE db_name;

/* create table */
CREATE TABLE table_name (
    id INT NOT NULL AUTO_INCREMENT, /* AUTO_INCREMENT keyword makes column auto-incremented from 1 and up */
    title VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS table_name ( /* check if table doesn't exists */
    id INT NOT NULL AUTO_INCREMENT, /* column level constraint */
    title VARCHAR(255) DEFAULT '', /* constraint to set default value as empty string */
    PRIMARY KEY (id) /* table level constraint */
);

/* alter table */
ALTER TABLE table_name ADD column_name INT; /* add column */
ALTER TABLE table_name DROP COLUMN column_name; /* drop column */
ALTER TABLE table_name MODIFY COLUMN column_name VARCHAR(255); /* modify column */
ALTER TABLE table_name AUTO_INCREMENT=100; /* alter auto-increment to start from 100*/

/* drop table */
DROP TABLE table_name;
DROP TABLE IF EXISTS table_name; /* check if table exists */

/* delete data inside a table, but not the table itself */
TRUNCATE TABLE table_name;

/*
MySQL constraints

SQL constraints are used to specify rules for the data in a table.
If there is any violation between the constraint and the data action, the action is aborted.

Constraints can be specified when the table is created with the CREATE TABLE statement,
or after the table is created with the ALTER TABLE statement.

Constraints can be column level or table level.
Column level constraints apply to a column, and table level constraints apply to the whole table.

The following constraints are commonly used in SQL:

NOT NULL - Ensures that a column cannot have a NULL value.
UNIQUE - Ensures that all values in a column are different.
PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table.
FOREIGN KEY - Prevents actions that would destroy links between tables.
CHECK - Ensures that the values in a column satisfies a specific condition.
DEFAULT - Sets a default value for a column if no value is specified.
CREATE INDEX - Used to create and retrieve data from the database very quickly.
*/
