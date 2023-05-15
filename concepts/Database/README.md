# Databases

## Relational

### What is?
A relational database is a type of database that organizes data into tables and establishes relationships between those tables using keys. Keys are unique identifiers that are used to link records between tables, creating relationships.

When a unique identifier, known as a `primary key (PK)`, is used in another table to reference a record, it is called a `foreign key (FK)` in the associated table.

The connections between primary and foreign keys create relationships between tables, allowing for efficient data retrieval and manipulation.

<div align="center">
  <img src="./relational-database-illustration.png" />
</div>

### Advantages

`Referential Integrity`: The use of primary and foreign keys enforces rules that maintain data accuracy. When a record is updated/deleted, **all related records must also be changed**.

Foreign keys in a table must have corresponding primary keys in the referenced table, ensuring the integrity and validity of the relationships.

### Examples

Microsoft SQL Server, Oracle, PostgreSQL, SQLite, MySQL, Maria DB.

## Non relational