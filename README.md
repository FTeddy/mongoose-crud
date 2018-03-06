# mongodb-crud
CRUD with MongoDB

# Routing
basic routes for this project:

| Route               | HTTP   | Description  |
| --------------      |:------:| ------------:|
| /books/add          | POST   | add a new book |
| /books/library      | GET    | get all books |
| /books/library/:_id | GET    | Get a single book by ID |
| /books/edit/:id     | PUT    | Update a book by ID |
| /books/delete/:id   | DELETE | Delete a book by ID |

| Route               | HTTP   | Description  |
| --------------      |:------:| ------------:|
| /costumers/add          | POST   | add a new costumer |
| /costumers              | GET    | get all costumers |
| /costumers/:_id         | GET    | Get a single costumer by ID |
| /costumers/edit/:id     | PUT    | Update a costumer by ID |
| /costumers/delete/:id   | DELETE | Delete a costumer by ID |

| Route               | HTTP   | Description  |
| --------------      |:------:| :------------|
| /transactions/add          | POST   | add a new transaction |
| /transactions              | GET    | get all transactions |
| /transactions/:_id         | GET    | Get a single transaction by ID |
| /transactions/edit/:id     | PUT    | Update a transaction by ID |
| /transactions/delete/:id   | DELETE | Delete a transaction by ID |
| /transactions/return/:transID | PATCH  | Return the book borrowed at transaction ID and gives fines if applicable |


# Usage

Setting up
```
npm install
```

Starting with npm
```
npm start
```
or
```
npm run dev
```

#Book schema
```
isbn: string
title: string
author: string
category: string
stock : number
```
Access from localhost:3000/books with postman/insomnia
