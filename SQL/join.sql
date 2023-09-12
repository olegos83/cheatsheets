/* INNER JOIN keyword selects rows that have matching values in both tables */
SELECT table_name.column_name1, table_name.column_name2
FROM table_name1
INNER JOIN table_name2
ON table_name1.column_name = table_name2.column_name;

/* LEFT JOIN keyword returns all records from the left table (table_name1),
   and the matching records (if any) from the right table (table_name2) */
SELECT table_name.column_name1, table_name.column_name2
FROM table_name1
LEFT JOIN table_name2
ON table_name1.column_name = table_name2.column_name;

/* RIGHT JOIN keyword returns all records from the right table (table_name2),
   and the matching records (if any) from the left table (table_name1) */
SELECT table_name.column_name1, table_name.column_name2
FROM table_name1
RIGHT JOIN table_name2
ON table_name1.column_name = table_name2.column_name;

/* CROSS JOIN keyword returns all records from both tables (table_name1 and table_name2) */
SELECT table_name.column_name1, table_name.column_name2
FROM table_name1
CROSS JOIN table_name2;
