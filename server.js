// server start krta hai ye 
// aur Database se connect krna kaam hai iska

const app = require("./src/app");
const mongoose = require("mongoose");

function connectToDb() {
    mongoose.connect("mongodb+srv://anuragshakalya_db_user:Mongo12345@cluster0.o2l5bxg.mongodb.net/day-6")
        .then(()=> {
            console.log("Connected to database bhai");
        })
}
connectToDb();


app.listen("3000", () => {
    console.log("Sever 3000 port pr chl rha hai veere!!");
})