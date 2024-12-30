const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


const database = {
    URI:  process.env.BASE,
};

                                                                                        
mongoose.connect(database.URI, {
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log('Error', err));

