const express = require("express")
const dotenv = require("dotenv")
const {mongoose} = require("mongoose")
const router_api = require("./routes/routes.api")
dotenv.config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT
app.listen(PORT, () => {
 console.log("Server is running on port 8080")
})

mongoose.connect(process.env.Post_DB).then(() => {
 console.log("Database connected")
}).catch((error) => {
  console.log(error)
})

app.use("/api", router_api)
