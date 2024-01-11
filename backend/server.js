import express from 'express';

const app = express();
app.use(express.static('dist'))
// app.get('/',(req,res)=>{
//     res.send('server is ready');
// });


app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            title:'A joke',
            content: 'This is a joke'
        },
        {
            id:2,
            title:'B joke',
            content: 'This is a joke'
        },
        {
            id:3,
            title:'C joke',
            content: 'This is a joke'
        },
    ];
    res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
});