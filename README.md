
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

bash
Copy code
GET http://localhost:3000/shopping-list
POST a new item:

bash
Copy code
POST http://localhost:3000/shopping-list
Body: raw JSON
{
  "name": "Milk",
  "quantity": 2
}
PUT to update an item:

bash
Copy code
PUT http://localhost:3000/shopping-list/{id}
Body: raw JSON
{
  "name": "Almond Milk",
  "quantity": 1
}
## DELETE an item:

bash
Copy code
DELETE http://localhost:3000/shopping-list/{id}
Error Handling:
- Error handling event
## Running the Application:
- Ensure you have Node.js installed.
- node index.js
Use Postman or cURL to test the API endpoints. All shopping list data is stored in shopping-list.json.
