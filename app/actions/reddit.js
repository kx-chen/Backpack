let fs = require("fs");
let request = require("request");

let url = "https://www.reddit.com/.json";
let file = "frontpage.json"

let collection = [];

function writeFile(file, json) {
    fs.writeFile(file, json, (err) => {
        if (err) {
            console.error(error);
            return;
        };
        console.log("Front page exists locally now.")
    });
    return;    
}


function jsonReady(file) {
    return new Promise((resolve) => {
        promiseReadFile(file)
            .then((data => {
                let obj = JSON.parse(data);
                let children = obj.data.children;
                let collectionOfInfo = [];
                for (let i = 0; i < children.length; i++) {
                    let info = {};
                    info.title = children[i].data.title;
                    info.ups = children[i].data.ups;
                    info.subreddit = children[i].data.subreddit;
                    info.author = children[i].data.author_fullname;
                    info.unixtime = children[i].data.created;
                    info.time = new Date(info.unixtime).toLocaleTimeString("en-US");
                    info.date = new Date(info.unixtime).toLocaleDateString("en-US");
                    collectionOfInfo.push(info);
                resolve(collectionOfInfo);
                };
        }));
    });
}
    // fs.readFile(file, function(err, data) {
    //     if (err) {
    //         console.error(error);
    //         return;
    //     }
    //     return data;
    // });


function promiseReadFile(file) {
    return new Promise((resolve) => {
        fs.readFile(file, 'utf-8', function(err, data) {
            if (err) {
                console.error(error);
            }
            resolve(data);
        });
    });
}


request(url, function(error, response, body) {  //Pulls json file from Reddit and writes it locally
    writeFile(file, body);
})



jsonReady(file)         // Processes json file into relevant info that will be used
    .then((collectionOfInfo => {
        collection = collectionOfInfo;
        console.log(collection);
    }));

