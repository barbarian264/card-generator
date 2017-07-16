var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');
// Start by choosing basic or cloze then the next argument should be fron or back for basic.
// If cloze choose either text or cloze


if (process.argv[2] === "basic") {

   var newcard = new BasicCard("What is the capital of Texas", "Austin");

     if (process.argv[3] === "front") { 

        console.log(newcard.front);

     }

     else if(process.argv[3] === "back") {

     	console.log(newcard.back);

     }



}

if (process.argv[2] === "cloze") {

   var newcard = new ClozeCard("... is the capital of Texas", "Austin");

   if (process.argv[3] === "text") { 

        console.log(newcard.text);

     }

     else if(process.argv[3] === "cloze") {

     	console.log(newcard.cloze);

     }

}