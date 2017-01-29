const discord = require('discord.js')
const fs = require('fs')
//Load commands from commands directory
fs.readdir('./commands/', (err, files) =>{
	console.log(files)
})