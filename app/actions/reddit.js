// const fs = require('fs');
// const request = require('request');
//
// const url = 'https://www.reddit.com/.json';
// const file = 'frontpage.json';
//
// let collection = [];
//
// function writeFile(file, json) {
//   fs.writeFileSync(file, json, err => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('Front page exists locally now.');
//   });
// }
//
// function jsonReady(file) {
//   return new Promise(resolve => {
//     promiseReadFile(file).then(data => {
//       const obj = JSON.parse(data);
//       const { children } = obj.data;
//       const collectionOfInfo = [];
//       for (let i = 0; i < children.length; i++) {
//         const info = {};
//         info.title = children[i].data.title;
//         info.ups = children[i].data.ups;
//         info.subreddit = children[i].data.subreddit;
//         info.author = children[i].data.author_fullname;
//         info.unixtime = children[i].data.created;
//         info.time = new Date(info.unixtime).toLocaleTimeString('en-US');
//         info.date = new Date(info.unixtime).toLocaleDateString('en-US');
//         collectionOfInfo.push(info);
//         resolve(collectionOfInfo);
//       }
//     });
//   });
// }
// // fs.readFile(file, function(err, data) {
// //     if (err) {
// //         console.error(error);
// //         return;
// //     }
// //     return data;
// // });
//
// function promiseReadFile(file) {
//   return new Promise(resolve => {
//     fs.readFile(file, 'utf-8', function(err, data) {
//       if (err) {
//         console.error(err);
//       }
//       resolve(data);
//     });
//   });
// }
//
// function call() {
//   return new Promise(resolve => {
//     request(url, function(error, response, body) {
//       // Pulls json file from Reddit and writes it locally
//       writeFile(file, body);
//
//       jsonReady(file) // Processes json file into relevant info that will be used
//         .then(collectionOfInfo => {
//           collection = collectionOfInfo;
//           resolve(collection);
//           console.log(collection);
//         })
//         .catch(err => console.log(err));
//     });
//   });
// }
//
// export default call;
