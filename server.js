const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const path = require("path")

app.use(express.static('public'))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.get("/", (req, res) => {
    res.sendfile("view/index.html")
})

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`)
})
