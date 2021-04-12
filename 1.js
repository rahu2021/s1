var express = require("express")
var app = express()

const middleware1 = (req, res, next) => {
    console.log("middleware1")
    next()
    console.log("done witdh middleware1")
}
const middleware2 = (req, res, next) => {
    console.log("middleware2")
    return next()
    console.log("done witdh middleware2")

}
app.use(middleware1)
app.use(middleware2)

function cb(req,res,next) {
    res.send("final responses")
}

app.get("/", cb)



app.listen(4000, () => console.log("server started on port 4000"))