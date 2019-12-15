"use strict";

// fetch sheet menu 1 Jannick
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
    appendMenus(json.feed.entry);
  });

/*
Appends json data to the DOM
*/
function appendMenus(menus) {
  console.log(menus);
  let htmlTemplate = "";
  for (let menu of menus) {
    htmlTemplate += `
        <article class="center">
          <h2>${menu['gsx$nr']['$t']}.</h2>
          <h3>${menu['gsx$bryggeri']['$t']}&nbsp &nbsp</h3>
          <h4>${menu['gsx$ølnavn']['$t']}</h4>
          <h4>${menu['gsx$ølkat']['$t']}</h4>
          <h4>${menu['gsx$alk']['$t']}</h4>
            <p>${menu['gsx$beskrivelse']['$t']}  </p>
                <h3>${menu['gsx$pris']['$t']}Kr</h3>
              <br></br>
                <br></br>
        </article>
      `;
  }
  document.querySelector("#menus").innerHTML += htmlTemplate;
}

/* Preloader - Ian */

function showLoader(show) {
  let loader = document.querySelector('.preloader');
  if (show) {
    loader.classList.remove("hide");
  } else {
    loader.classList.add("hide");
  }
}

setTimeout(function() {
    showLoader(false);
  }, 500);
