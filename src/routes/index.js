const express = require('express');
const model = require('../model/task.js');
const task = require('../model/task.js');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await model.find({}).lean();
        res.render('index.ejs', { title: 'Crud', tasks: tasks });
    } catch (error) {
        console.log(error);

    }

});


router.post('/add', async (req, res) => {
    try {
        let body = req.body;
        const { title, description } = body
        body.status = false;
        console.log(body);

        const tasks = await model.create({ title: title, description: description, status: body.status });
        res.redirect('/');
    } catch (error) {
        const backURL = req.get('Referer'); // URL previa o una por defecto
        res.redirect(backURL);
        console.log(error);

    }

})


router.get('/turn/:id', async (req, res) => {
    try {
        let id = req.params.id;

        const tasks = await model.findById({ _id : id });

        tasks.status = !tasks.status;

        tasks.save();

        console.log(tasks);
        
        res.redirect('/');
    } catch (error) {
        const backURL = req.get('Referer'); // URL previa o una por defecto
        res.redirect(backURL);
        console.log(error);

    }

})
router.get('/delete/:id', async (req, res) => {
    try {
        let id = req.params.id;

        const tasks = await model.deleteOne({ _id : id });        
        res.redirect('/');
    } catch (error) {
        const backURL = req.get('Referer'); // URL previa o una por defecto
        res.redirect(backURL);
        console.log(error);

    }

})


module.exports = router;


// const port = process.env.PORT || port;
// const www = process.env.WWW || './';
// app.use(express.static(www));
// console.log(`serving ${www}`);
// app.get('*', (req, res) => {
//     res.sendFile(`index.html`, { root: www });
// });
// app.listen(port, () => console.log(`listening on http://localhost:${port}`));
