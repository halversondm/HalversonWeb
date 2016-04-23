/* eslint no-console: 0 */

var path = require( 'path');
var express = require( 'express');
var webpack = require( 'webpack');
var webpackMiddleware = require( 'webpack-dev-middleware');
var webpackHotMiddleware = require( 'webpack-hot-middleware');
var config = require( './webpack.config.js');
var bodyParser = require( 'body-parser');


const isDeveloping = process.env.NODE_ENV !== 'production';
const port = 80;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


if (isDeveloping) {
    console.log("Running the 'hot' version of the code");
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
        res.end();
    });
} else {
    console.log("Running the built version of the code");
    app.use(express.static(__dirname + '/dist'));
    app.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}

app.post('/abc.php', function response(req, res) {
  console.log(req.body);
  res.send('ABC Saved!');
});

app.post('/mail.php', function response(req, res) {
  console.log(req.body);
  res.send('Email Success!');
});

app.listen(port, function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> Listening on port %s.', port);
});
