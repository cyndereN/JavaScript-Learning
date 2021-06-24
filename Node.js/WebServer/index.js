const app = require("express")()

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get("/sup", (req, res) => {
    //res.statusCode = 404
    res.send("Sup!")
})


app.listen(8080, ()=>console.log("Listening.. on 8080"))