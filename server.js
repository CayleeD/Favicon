const express = require("express"); // Import the Express Package
const server = express(); // Create the server.

// Handle requests to the root of the api: The / Route
server.get('/', (req, res) => {
    res.send("Hello from Express.");
});

// Watch for connections on port 5000
server.listen(5000, () =>
    console.log("Server running on http://localhost:500")
);
