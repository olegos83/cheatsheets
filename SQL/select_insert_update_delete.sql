/* select rows */
SELECT column_name1, column_name2, column_name3 FROM table_name;
SELECT * FROM table_name; /* '*' is used to select all columns */
SELECT DISTINCT column_name FROM table_name; /* select only distinct values */
SELECT column_name FROM table_name WHERE condition; /* conditional select */
SELECT column_name1, column_name2 FROM table_name WHERE condition1 AND condition2; /* conditional select */

/* combined conditional select */
SELECT * FROM table_name WHERE column_name1 = 'value1' AND (column_name2 = 'value2' OR column_name2 = 'value3');

/* select count of distinct countries as 'count' field (AS keyword sets column alias) */
SELECT COUNT(DISTINCT Country) AS count FROM Customers;

/* order by column_name in descending order and limit the number of returned rows to 10 */
SELECT * FROM table_name ORDER BY column_name DESC LIMIT 10;

/* ascending order by multiple columns */
SELECT * FROM table_name ORDER BY column_name1, column_name2;

/* insert rows */
INSERT INTO table_name (column_name1, column_name2) VALUES (777, 'str value');

/* if insert values for all columns, column names may be ommited */
INSERT INTO table_name VALUES (777, 'str value');

/* insert multiple rows (two rows in this example, but can be more) */
INSERT INTO table_name (column_name1, column_name2) VALUES (777, 'str value 1'), (888, 'str value 2');

/* update rows (without WHERE will update all rows) */
UPDATE table_name SET int_column = 777, str_column = 'str value' WHERE condition;

/* delete rows */
DELETE FROM table_name; /* delete all rows */
DELETE FROM table_name WHERE condition; /* conditional delete */

/*
ORDER BY types

ASC   ascending order (default).
DESC  descending order.
*/

/*
operators in WHERE clause

=         Equal.
>         Greater than.
<         Less than.
>=        Greater than or equal.
<=        Less than or equal.
<>        Not equal. Note: In some versions of SQL this operator may be written as !=.
BETWEEN   Between a certain range.
LIKE      Search for a pattern.
IN        To specify multiple possible values for a column.
*/

/*
conditional operators

The WHERE clause can be combined with AND, OR, and NOT operators.
AND and OR operators are used to filter records based on more than one condition:

AND operator displays a record if all the conditions separated by AND are TRUE.
OR operator displays a record if any of the conditions separated by OR is TRUE.
NOT operator displays a record if the condition(s) is NOT TRUE.
*/
