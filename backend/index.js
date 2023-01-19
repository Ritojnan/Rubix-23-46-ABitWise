// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const Resource = require('../models/resource');

// // Create a new resource
// router.post('/', (req, res) => {
//   const newResource = new Resource({
//     name: req.body.name,
//     description: req.body.description
//   });
//   newResource.save()
//     .then(resource => res.json(resource))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// // // Get all resources
// // router.get('/', (req, res) => {
// //   Resource.find()
// //     .then(resources => res.json(resources))
// //     .catch(err => res.status(400).json('Error: ' + err));
// // });

// // // Get a specific resource by id
// // router.get('/:id', (req, res) => {
// //   Resource.findById(req.params.id)
// //     .then(resource => res.json(resource))
// //     .catch(err => res.status(400).json('Error: ' + err));
// // });

// // // Update a specific resource by id
// // router.put('/:id', (req, res) => {
// //   Resource.findById(req.params.id)
// //     .then(resource => {
// //       resource.name = req.body.name;
// //       resource.description = req.body.description;

// //       resource.save()
// //         .then(() => res.json('Resource updated!'))
// //         .catch(err => res.status(400).json('Error: ' + err));
// //     })
// //     .catch(err => res.status(400).json('Error: ' + err));
// // });

// // // Delete a specific resource by id
// // router.delete('/:id', (req, res) => {
// //   Resource.findByIdAndDelete(req.params.id)
// //     .then(() => res.json('Resource deleted.'))
// //     .catch(err => res.status(400).json('Error: ' + err));})



//     // const http = require('http');
// // const fs = require('fs');
// // const rp = require('request-promise');
// // // console.log(http);
// // const hostname = '127.0.0.1';
// // const port = 3000;
// // counter=0;
// // // var activationlink;
// // const server = http.createServer((req, res) => {
// //     res.statusCode = 200;
// //     res.setHeader('Content-Type', 'text/plain');
// //     res.end('Hello World v2');
// //     // fs.readf ileSync
// //     counter++;
// //     // console.log("//////////////////res"+res);
// //     console.log("//////////////////req"+req.url);
// //     console.log(counter);
// //     fs.writeFileSync("database.txt",String(counter))
// //   });

// //   server.listen(port, hostname, () => {
// //     console.log(`Server running at http://${hostname}:${port}/`);
// //   });

// // //   const localtunnel = require('localtunnel');

// // //   (
// // //     async () => {
// // //     const tunnel = await localtunnel({ port:port });

// // //     // the assigned public url for your tunnel
// // //     // i.e. https://abcdefgjhij.localtunnel.me
// // //     console.log(tunnel.url+'/s');
// // //     const currenttunnel = tunnel.url+'/s';
// // //     // activationlink = tunnel.url;
// // //     rp(currenttunnel)
// // //       .then(function(html){
// // //         //success!
// // //         console.log(html);
// // //       })
// // //       .catch(function(err){
// // //         console.log(err);
// // //         //handle error
// // //       });
// // //     fs.writeFileSync("currentbackendlink.txt",String(tunnel.url))

// // //   tunnel.on('close', () => {
// // //     // tunnels are closed
// // //   });
// // // })();









// // const mongoose = require('mongoose');
// // mongoose.set('strictQuery',
// //   true
// //   // false
// // );

// // main().catch(err => console.log(err));

// // async function main() {
// //   await mongoose.connect('mongodb://127.0.0.1:27017/test'); //creates db
// //   console.log("connected")

// //   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled


// //   const kittySchema = new mongoose.Schema({
// //     name: String
// //   });
// //   // NOTE: methods must be added to the schema before compiling it with mongoose.model()
// //   kittySchema.methods.speak = function speak() {
// //     const greeting = this.name
// //       ? "Meow name is " + this.name
// //       : "I don't have a name";
// //     console.log(greeting);
// //   };


// //   const Kitten = mongoose.model('Kitten', kittySchema); //name of collections
// //   const silence = new Kitten({ name: 'Silence' });
// //   console.log(silence.name); // 'Silence'

// //   const fluffy = new Kitten({ name: 'fluffy' });
// //   fluffy.speak(); // "Meow name is fluffy"
// //   await fluffy.save();



// //   const kittens = await Kitten.find();
// //   console.log(kittens);
// //   await Kitten.find({ name: /^fluff/ });
// // }

