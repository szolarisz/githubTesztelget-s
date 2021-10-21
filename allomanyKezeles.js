const fs = require('fs');

fs.readFile('./datas/adatok.txt', (err,data) =>{
    console.log(data.toString());
}) //aszinkron pufferelt 