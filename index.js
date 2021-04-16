const express = require('express')
const app = express()

//middleware
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.post('/testjson', (req, res) => {

    //req.body.parametername
    console.log(req.body.name);
    console.log(req.body.surname);
    console.log(req.body.mobno);
    console.log(req.body.addr);
    console.log(req.body.email);
    console.log(req.body.fathername);
    console.log(req.body.mothersname);
    console.log(req.body.sibling);
    res.status(200).send({

        msg: "ok",
        fn: req.body.name,
        sn: req.body.surname,
        mn: req.body.mobno,
        ad: req.body.addr,
        em: req.body.email
    })

})

let port = 3000;
app.listen(port, () => {

    console.log(`the server is running on port ${port}`)
})