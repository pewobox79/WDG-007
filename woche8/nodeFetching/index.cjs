const express = require('express');
const path = require('path');
const app = express();
const userRoutes = require('./routing/user.cjs');
const productRoutes = require('./routing/product.cjs')

app.set('view engine', 'ejs');

//middleware - funktion die einen vorgelagerten Job übernimmt
app.use(express.urlencoded({ extended: true  }))

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '/public', '/index.ejs');
    res.render(filePath, {subTitle: "Hallo erster Subtitle"});
    res.end();
})

app.use('/user', userRoutes);
app.use('/', productRoutes)






const PORT = 3030;
app.listen(PORT, () => console.log(`server listen to ${PORT}`))

