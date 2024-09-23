// REST API
const http = require("http");
// File Systems
const fs = require("fs");
// Path
const path = require("path");

// Directory and file paths
const directory = path.join(__dirname, "shopping-list");
const filePath = path.join(directory, "shopping-list.json");

// Ensure directory exists
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory);
}

// Ensure file exists
if (!fs.existsSync(filePath)) {
  // Create shopping list file
  fs.writeFileSync(filePath, JSON.stringify([]));
}

//  function to read shopping list
const readShoppingList = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

// function to write shopping list
const writeShoppingList = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

// Create HTTP server
const server = http.createServer((req, res) => {
  // Handle different routes and GET methods
  if (req.url === "/shopping-list" && req.method === "GET") {
    // GET: Retrieve shopping list
    const shoppingList = readShoppingList();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(shoppingList));
  } else if (req.url === "/shopping-list" && req.method === "POST") {
    // POST: Add a new item to the shopping list
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const newItem = JSON.parse(body);
        if (!newItem || !newItem.name) {
          throw new Error("Invalid data");
        }
        const shoppingList = readShoppingList();
        newItem.id = Date.now();
        shoppingList.push(newItem);
        writeShoppingList(shoppingList);
        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newItem));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
  } else if (req.url.startsWith("/shopping-list/") && req.method === "PUT") {
    // PUT: Update an existing item in the shopping list
    const id = req.url.split("/")[2];
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const updatedItem = JSON.parse(body);
        const shoppingList = readShoppingList();
        const index = shoppingList.findIndex((item) => item.id == id);
        if (index === -1) {
          throw new Error("Item not found");
        }

        shoppingList[index] = { ...shoppingList[index], ...updatedItem };
        writeShoppingList(shoppingList);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(shoppingList[index]));
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
  } else if (req.url.startsWith("/shopping-list/") && req.method === "DELETE") {
    // DELETE: Remove an item from the shopping list
    const id = req.url.split("/")[2];
    const shoppingList = readShoppingList();
    const filteredList = shoppingList.filter((item) => item.id != id);

    if (filteredList.length === shoppingList.length) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Item not found" }));
    } else {
      writeShoppingList(filteredList);
      res.writeHead(204);
      res.end();
    }
  } else {
    // 404 Not Found
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
