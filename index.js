const { exec } = require('child_process')
const fs = require('fs')
const tamper = require('./tamper.config')

exec('webpack')


const before = `// ==UserScript==
// @name         ${tamper.name}
// @namespace    http://tampermonkey.net/
// @version      ${tamper.version}
// @description  ${tamper.description}
// @author       ${tamper.author}
// @match        ${tamper.match}
// @grant        none
// ==/UserScript==`

fs.watchFile('./dist/script.js', () => {
    fs.readFile('./dist/script.js', (err, data) => {
        const content = before + data + after
        fs.writeFileSync('./dist/tampermonkey.js', content)
    })
})