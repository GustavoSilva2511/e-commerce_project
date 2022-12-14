# DOCUMENTATION
This project was made in node with express. if you want using in your project, read the documentation bellow.

---
##  INSTALL MODULES

For init, install the dependences in your project, using terminal.

~~~JS
    npm install
~~~
---

## DATABASE 
The database exist, but if you can delete, the code has check and create a new

---

## RUN
For run this api you define your preference port in .env file, and execute the comand.
~~~npm
    npm run start
    or 
    node server.js
~~~

---
## SERVICES
This api have 3 CRUD routes, users, products and carts.

### User route

* GET - Return the list users in json.
    ~~~json
        [
            {
                "id": "string",
                "name": "string",
                "email": "string",
                "password": "string"
            },
            .
            .
        ]
    ~~~
* POST - You have that send a body with some info:
    ~~~json
    {
	"name": "string",
	"email": "string",
	"password": "string"
    }
    ~~~
* DELETE - You have that send a id with url params: (" /users/id ").

* PUT - You have that send a body with new infos and the id in url params: (" /users/id ").
    ~~~json
    {
	"name": "string",
	"email": "string",
	"password": "string"
    }
    ~~~

---

### Product route
* GET - Return the list produts in json.
    ~~~json
        [
            {
                "id": "string",
                "tittle": "string",
                "description": "string",
                "price": FLOAT
            },
            .
            .
        ]
    ~~~
* POST - You have that send a body with some info:
    ~~~json
    {
	"tittle": "string",
	"description": "string",
	"price": FLOAT
    }
    ~~~
* DELETE - You have that send a id with url params: (" /products/id ").

* PUT - You have that send a body with new infos and the id in url params: (" /products/id ").
    ~~~json
    {
	"tittle": "string",
	"description": "string",
	"price": FLOAT
    }
    ~~~




### Cart route

* GET - Return the list carts in json.
    ~~~json
        [
            {
                "id": "string",
                "user_id": "string",
                "product_id": "string",
                "stats": "string" //bought or save
            },
            .
            .
        ]
    ~~~
* POST - You have that send a body with some info:
    ~~~json
    {
	"user_id": "string",
	"product_id": "string",
	"stats": "string" //bought or save
    }
    ~~~
* DELETE - You have that send a id with url params: (" /carts/id ").

* PUT - You have that send a body with new infos and the id in url params: (" /carts/id ").
    ~~~json
    {
	"user_id": "string",
	"product_id": "string",
	"stats": "string" //bought or save
    }
    ~~~
---

made by Gustavo Silva