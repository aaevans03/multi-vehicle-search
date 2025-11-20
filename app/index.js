const app = require('./app');

const port = 3000;
app.set('port', port);

app.listen(app.get('port'), () => {
    console.log(`Multi Vehicle Search listening on port ${port}`);
});
