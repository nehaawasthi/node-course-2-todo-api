//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);

// var user ={name:'Andrew', age : 25};
// var {name}=user;
//console.log(name);
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     complete:false
    // },(err,result) =>{
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

//Insert new doc into Users
// db.collection('User').insertOne({
//     name:'Neha',
//     age:23,
//     location :'Noida'
// },(err,result)=>{
//     if(err){
//         return console.log('Unable to insert User',err);
//     }
// console.log(result.ops[0]._id);
// });

    db.close();
})