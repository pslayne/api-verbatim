import express from "express";
import figlet from "figlet";

const app = express();

app.listen(5000, () => {
    figlet("Verbatim API", function (err, data) {
            if (err) {
                console.log("Something went wrong...");
                console.dir(err);
                return;
            }
            console.log(data);
            console.log("Verbatim - Listening on port 5000");
        });
})