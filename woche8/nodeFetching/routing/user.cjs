const axios = require('axios');
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');


app.set('view engine', 'ejs');

router.post('/', (req, res) => {
    //extract data und in einem object speichern, da db ein object erwartet...
    const myReqBody = {
        name: req.body.name,
        job: req.body.job
    }

    axios.post('https://reqres.in/api/users', myReqBody)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log("error message: " + err)
        })

    //post request zur datenbank mit axios





    res.write('new user created mit values')

    res.end();
})

router.get('/:id', (req, res) => {
    //userparameter speichern
    const userID = req.params.id;
    //URL an suche anpassen
    const userURL = `https://reqres.in/api/users/${userID}`

    //daten von db abrufen
    axios.get(userURL)
    .then(response => {
        const myData = response.data;
        const userTemplate = '/Users/pewobox/WDG007/woche8/nodeFetching/public/about.ejs'
        res.render(userTemplate, {name: myData.data.first_name, lastname: myData.data.last_name} );
       
        res.end()
        console.log(response)


    })
    .catch(err => console.log(err))

    
})

router.put('/:id', (req, res) => {
    res.write('user updated')
})

router.delete('/:id', (req, res) => {
    res.write(`user ${req.params.id} has been deleted`)
})


//code Komprimierung
/* router.post('/',(req, res) => {
    res.write('new user created ')
    res.end();
});

router
.route('/:id')
.get((req, res) => {
    res.write(`der user ist nr. ${req.params.id}`)
    res.end()
})
.put((req, res) => {
    res.write('user updated')
})
.delete((req, res)=>{
    res.write(`user ${req.params.id} has been deleted`)
})
 */

module.exports = router;