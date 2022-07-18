const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression());

app.use(express.static('./dist/apps/master-skills'));

app.get('/*', (req, res) => res.sendFile('index.html', { root: 'dist/apps/master-skills/' }));

app.listen(process.env.PORT || 8080);
