const express = require('express');
const app = express();

/**
 * function to redirect traffic from http to https
 */
function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
app.use(requireHTTPS);
/**
 * used to serve our static file
 */
app.use(express.static('./dist/angular'));

/**
 * used to redirect paths to index.html file in dist folder
 */
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: '/dist/angular/'}
    
);
});
/**
 * listen to request at the port specified from env var PORT or default Heroku port 8080
 */
app.listen(process.env.PORT || 8080);