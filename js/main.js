"use strict";

let sheetId = "1cnnMCXs8Tv9jrciZiQg4lwVNjVCEueYKdZ5JDFzTbxU";
let sheetNumber = 1;
let sheetUrl = `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetNumber}/public/full?alt=json`;
console.log(sheetUrl);

fetch(sheetUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendPersons(json.feed.entry);
  });

/*
Appends json data to the DOM
*/
function appendPersons(persons) {
  console.log(persons);
  let htmlTemplate = "";
  for (let person of persons) {
    htmlTemplate += `
        <article>
          <h4>${person['gsx$pris']['$t']}</h4>
          <h4>${person['gsx$nr']['$t']}</h4>
          <h4>${person['gsx$bryggeri']['$t']}</h4>
          <h4>${person['gsx$ølnavn']['$t']}</h4>
          <h4>${person['gsx$ølkat']['$t']}</h4>
          <h4>${person['gsx$alk']['$t']}</h4>
        </article>
      `;
  }
  document.querySelector("#persons").innerHTML += htmlTemplate;
}
