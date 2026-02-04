// server start krta hai ye 
// aur Database se connect krna kaam hai iska

const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDb() {
    mongoose.connect("connection-link-here")
        .then(()=> {
            console.log("Connected to database bhai");
        })
}
connectToDb();


app.listen("3000", () => {
    console.log("Sever 3000 port pr chl rha hai veere!!");
})
