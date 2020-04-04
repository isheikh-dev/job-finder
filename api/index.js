const express = require('express')
const app = express()
const port = 3001 // as front-end running on 3000


var redis = require("redis"),
    client = redis.createClient()

const { promisify } = require("util");
// here i set promise for redis
const getAsync = promisify(client.get).bind(client);


app.get('/jobs', async(req, res) => {
    //  get job from redis
    const jobs = await getAsync('github');
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");

    return res.send(jobs)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))