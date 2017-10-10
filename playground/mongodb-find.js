const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').find().count().then((count)=>{
    //    // console.log('Todos');
    //     //console.log(JSON.stringify(docs,undefined,2));
    //     console.log(`Todos count:${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });

    db.collection('User').find({name :'Neha'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    });

    //db.close();
})