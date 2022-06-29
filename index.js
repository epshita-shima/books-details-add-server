const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://db_table:i4z40FgC3z35XVNX@cluster0.9buop.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const booksCollection = client.db('booksInfo').collection('data');

        app.get('/info', async (req, res) => {
            const query = {};
            const cursor = booksCollection.find(query);
            const data = await cursor.toArray()
            res.send(data);
        })


    }
    finally {

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running table');
})

app.listen(port, () => {
    console.log('running table server');
})