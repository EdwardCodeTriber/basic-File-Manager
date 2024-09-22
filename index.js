// REST API
const http = require('http');
// File Systems
const fs = require('fs');
// Path
const path = require('path');

// Directory and file paths
const directory = path.join(__dirname, 'shopping-list');
const filePath = path.join(directory, 'shopping-list.json');