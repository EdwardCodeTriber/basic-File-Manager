// REST API
const http = require('http');
// File Systems
const fs = require('fs');
// Path
const path = require('path');

// Directory and file paths
const directory = path.join(__dirname, 'shopping-list');
const filePath = path.join(directory, 'shopping-list.json');

// Ensure directory exists
if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory);
  }
  
  // Ensure file exists
  if (!fs.existsSync(filePath)) {
    // Create shopping list file
    fs.writeFileSync(filePath, JSON.stringify([])); 
  }