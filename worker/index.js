var cron = require('node-cron');
const fetchGithub = require('./tasks/fetch-github')

// fetch github jobs
cron.schedule('* * * * *', fetchGithub, null, true);