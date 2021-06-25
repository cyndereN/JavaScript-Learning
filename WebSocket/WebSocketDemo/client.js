let ws = new WebSocket("ws://localhost:8080")
ws.onmessage = message => console.log(`We received a message from server ${message.data}`)
// On server: connection.send("Hello, client!")
ws.send("Hello, server!")