var fetch = require('node-fetch');
var redis = require("redis"),
    client = redis.createClient()

const { promisify } = require("util");
// here i set promise for redis
const setAsync = promisify(client.set).bind(client);

// set the baseUrl 
const baseUrl = 'https://jobs.github.com/positions.json'

// fetch all pages
async function fetchGithub() {

    let resultCount = 1, // set result count
        onPage = 0 // set the start page

    const allJobs = [] // collect all job fetched
    while (resultCount > 0) { // as there is jobs generated - keep going
        const res = await fetch(`${baseUrl}?page=${onPage}`); // hit the end-point for page 
        const jobs = await res.json(); // get only jobs
        allJobs.push(...jobs) // push that jobs into our collection 
        resultCount = jobs.length // collect that jobs length
        console.log('got', jobs.length, 'jobs') // declare it 
        onPage++ // generate next page
    }
    // console.log('got', allJobs.length, 'jobs total')
    // console.log('got', allJobs[0])




    // filter only junior job 
    const jrJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase()

        if (
            jobTitle.includes('senior') ||
            jobTitle.includes('manager') ||
            jobTitle.includes('sr.') ||
            jobTitle.includes('architect')
        ) {
            return false
        }
        return true
    })

    console.log('filtered Down to ', jrJobs.length, 'jobs total')
        // set redis key - val for github
    const success = await setAsync('github', JSON.stringify(jrJobs))
    console.log({ success })
}




// fetchGithub();  only for test to fire the fetch fun

module.exports = fetchGithub;