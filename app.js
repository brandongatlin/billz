const Nightmare = require('nightmare')
const nightmare = Nightmare({
    show: true
})

nightmare
    .goto('https://astorhouston.securecafe.com/residentservices/astor-tanglewood/userlogin.aspx')
    .click("#Username")
    .type('body', '\u2193') // .click('#search_button_homepage')
    // .wait('#r1-0 a.result__a')
    // .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
    // .end()
    .then(console.log("fun"))
    .catch(error => {
        console.error('Search failed:', error)
    })