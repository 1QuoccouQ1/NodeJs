// const http = require("http");

// const sever = http.createServer((req, res) => {
//     console.log("Hi");
//     res.writeHead(200, {"Content-Type" : "text/html"});
//     res.end("<h1>HI</h1>")
// })

// sever.listen(300)



const { render } = require("ejs");
const express = require("express");
const path = require("path")

const app = express();

app.set("view engine", "ejs")
app.set("views","./views" )
app.use(express.static("public"))


app.use("/bootstrap/css",
express.static(path.join(__dirname,"node_modules/bootstrap/dist/css"))
)


app.use("/bootstrap/js",
express.static(path.join(__dirname,"node_modules/bootstrap/dist/js"))
)

app.get("/", (req , res) => {
    let isLogin = false ;
    let name = "Quoc"
    res.render("index",{isLogin ,name })
})


app.listen(3000, () => {
    console.log("thanh cong")
})