const axios = require('axios');
const express = require('express');
const router = express.Router()

router.get('/product/:id', (req, res) => {
    res.write(`product Nr. ${req.params.id}`);
    res.end()
})

router.post('/product', (req, res) => {
    const myProductBody = {
        name: req.body.name,
        job: req.body.job
    }

    axios.post('https://reqres.in/api/users', myProductBody)
    .then(response => console.log(response.data))
    .catch(err =>console.log(err))


    res.write('new product added');
    res.end();
})

router.delete('/product/:id', (req, res) => {
    res.write(`product nr. ${req.params.id} has been deleted`)
})

module.exports = router;