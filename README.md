
## File Manager:

- Creates the shopping-list directory.
- Creates a shopping-list.json file and initializes it with an array.
- The shopping list data is stored in the shopping-list.json file.
## Shopping List API:

## GET /shopping-list:
- Fetches the current shopping list.
## POST /shopping-list: 
- Adds a new item to the shopping list. The item must be sent as JSON in the request body.
## PUT /shopping-list/:id: 
- Updates an existing item. The item ID must be part of the URL,
- and the updated data must be sent as JSON in the request body.
## DELETE /shopping-list/:id: 
- Deletes an item by its ID.
## Testing the API:
- You can use Postman or CURL to test the endpoints:

## GET all items:


Copy code
GET http://localhost:3000/shopping-list
POST a new item:


Copy code
POST http://localhost:3000/shopping-list
Body: raw JSON
{
  "name": "Meat",
  "quantity": 2
},
{
  "name": "Juice",
  "quantity": 1
},
{
  "name": "Bread",
  "quantity": 2
},
{
  "name": "Tooth Paste",
  "quantity": 4
}
PUT to update an item:


Copy code
PUT http://localhost:3000/shopping-list/{id}
Body: raw JSON
{
  "name": "Almond Milk",
  "quantity": 1
}
## DELETE an item:


Copy code
DELETE http://localhost:3000/shopping-list/{id}
Error Handling:
- Error handling event
## Running the Application:
- Ensure you have Node.js installed.
- node index.js
## Use Postman or cURL to test the API endpoints. All shopping list data is stored in shopping-list.json.

## Requirements

## Create a basic File Manager and a REST API for managing a shopping list. 
- You are required to build a Node.js application that serves as both a basic File Manager and a REST API for managing a shopping list.
## Requirements:
# File Manager:
- Create a new directory.
- Create a JSON file within the directory.
- Read and parse the JSON file.
- Update the JSON file with new data.
# Shopping List API:
- Implement CRUD operations (GET, POST, PUT/PATCH, DELETE) using the built-in http module.
- Manage endpoints for /shopping-list to handle shopping list items.
- Handle JSON data exchange for storing and retrieving shopping list items.
- Implement basic error handling and validation.
# Testing:
- Thoroughly test the combined application to ensure all features (file management and API endpoints) function correctly.
- Use tools like Postman to test API endpoints for CRUD operations on the shopping list.