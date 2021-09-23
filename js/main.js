"use strict";


//overlay nav

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



// fetch sheet menu 1 Jannick
let sheetId = "1cnnMCXs8Tv9jrciZiQg4lwVNjVCEueYKdZ5JDFzTbxU";
let HanearkId = "1-CDkN7QBE90YS-k4uYBeireauI4aq6cXku1zrYO7bFA";

let sheetNumber = "Sheet1";
let sheetUrl = `https://sheets.googleapis.com/v4/spreadsheets/${HanearkId}/values/${sheetNumber}/?alt=json&key=AIzaSyD-sKBoTcEEGLZdtOdIm_idGvxm3BW33UU`;

fetch(sheetUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    appendMenus(json.values, '#menus');
  });

/*
Appends json data to the DOM
*/
function appendMenus(menus, selector) {
  let htmlTemplate = "";
  htmlTemplate += `
  <table>
  <tbody> 
  `;

  for (let [i, row] of menus.entries()) {
    htmlTemplate += `
    <tr>
    `;
    let tagname = (i == 0) ? 'th' : 'td';

    for (let col of row) {
      htmlTemplate += `<${tagname} class="td${i+1}">${col}</${tagname}>`;
    }

    htmlTemplate += `
    <tr>
    `;
  }

  htmlTemplate += `
  </tbody> 
  </table>
  `;

  document.querySelector(selector).innerHTML += htmlTemplate;
}


/* Pageloader - Ian */
const pageloader = document.querySelector('.pageloader');


window.addEventListener('load', function () {
  setInterval(() => {

    if (!pageloader.style.opacity) {
      pageloader.style.opacity = 1;
    }
    if (pageloader.style.opacity > 0) {
      pageloader.style.opacity -= 0.1;
    } else {

      pageloader.style.display = "none";
    }
  }, 150);
});



/* Fetches the Google Sheet for the menu Jannick */
let sheetNumber3 = "Drikke";
let sheetUrl3 = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetNumber3}?alt=json&key=AIzaSyD-sKBoTcEEGLZdtOdIm_idGvxm3BW33UU`;
// When the user scrolls down 20px from the top of the document, show the button public/full?alt=json
window.onscroll = function () {
  scrollFunction()
};

fetch(sheetUrl3)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    appendDrinks(json.values, '#drinkmenus');
  });

function appendDrinks(menus, selector) {
  let htmlTemplate = "";
  htmlTemplate += `
  <table>
  <tbody> 
  `;

  for (let [i, row] of menus.entries()) {
    htmlTemplate += `
    <tr>
    `;
    let tagname = (i == 0) ? 'th' : 'td';

    for (let col of row) {
      htmlTemplate += `<${tagname} class="td${i+1}">${col}</${tagname}>`;
    }

    htmlTemplate += `
    <tr>
    `;
  }

  htmlTemplate += `
  </tbody> 
  </table>
  `;

  document.querySelector(selector).innerHTML += htmlTemplate;
}


/* This appends the data from the json file, to the DOM - jannick */

/* Fetches the Google Sheet for the menu Jannick */
let sheetNumber4 = "Sjusser";
let sheetUrl4 = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetNumber4}?alt=json&key=AIzaSyD-sKBoTcEEGLZdtOdIm_idGvxm3BW33UU`;

fetch(sheetUrl4)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    appendDrinks(json.values, '#sjusmenus');
  });

/* This appends the data from the json file, to the DOM - jannick */
function appendSjus(menus, selector) {
  let htmlTemplate = "";
  htmlTemplate += `
  <table>
  <tbody> 
  `;

  for (let [i, row] of menus.entries()) {
    htmlTemplate += `
    <tr>
    `;
    let tagname = (i == 0) ? 'th' : 'td';

    for (let col of row) {
      htmlTemplate += `<${tagname} class="td${i+1}">${col}</${tagname}>`;
    }

    htmlTemplate += `
    <tr>
    `;
  }

  htmlTemplate += `
  </tbody> 
  </table>
  `;

  document.querySelector(selector).innerHTML += htmlTemplate;
}

/* Fetches the Google Sheet for the menu Jannick */
let sheetNumber5 = "Snacks";
let sheetUrl5 = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetNumber5}?alt=json&key=AIzaSyD-sKBoTcEEGLZdtOdIm_idGvxm3BW33UU`;

fetch(sheetUrl5)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    appendDrinks(json.values, '#snackmenus');
  });

/* This appends the data from the json file, to the DOM - jannick */
function appendSjus(menus, selector) {
  let htmlTemplate = "";
  htmlTemplate += `
  <table>
  <tbody> 
  `;

  for (let [i, row] of menus.entries()) {
    htmlTemplate += `
    <tr>
    `;
    let tagname = (i == 0) ? 'th' : 'td';

    for (let col of row) {
      htmlTemplate += `<${tagname} class="td${i+1}">${col}</${tagname}>`;
    }

    htmlTemplate += `
    <tr>
    `;
  }

  htmlTemplate += `
  </tbody> 
  </table>
  `;

  document.querySelector(selector).innerHTML += htmlTemplate;
}

/* Fetches the Google Sheet for the menu Jannick */
let sheetNumber6 = "Øl-menu";
let sheetUrl6 = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetNumber6}?alt=json&key=AIzaSyD-sKBoTcEEGLZdtOdIm_idGvxm3BW33UU`;




fetch(sheetUrl6)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    appendMenus(json.values, '#menumenus');
  });

/* This appends the data from the json file, to the DOM - jannick */
function appendmns(mns) {
  let htmlTemplate = "";
  for (let mn of mns) {
    htmlTemplate += `
    <table>
    <tbody>
    <tr>
    <td>${mn['gsx$drikke']['$t']}</td>
    <td>${mn['gsx$beskrivelse']['$t']}</td>
    <td>${mn['gsx$pris']['$t']}</td>
    </tr>
    </tbody>
    </table>
    `;
  }
  document.querySelector("#menumenus").innerHTML += htmlTemplate;
}

/* Fetches the Google Sheet for the menu Jannick */
let sheetNumber9 = "Øl-flaske";
let sheetUrl9 = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetNumber9}?alt=json&key=AIzaSyD-sKBoTcEEGLZdtOdIm_idGvxm3BW33UU`;

fetch(sheetUrl9)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    appendBottle(json.feed.entry);
  });

/* This appends the data from the json file, to the DOM - jannick */
function appendBottle(bottles) {
  let htmlTemplate = "";
  for (let bottle of bottles) {
    htmlTemplate += `
    <table>
    <tbody>
    <tr>
    <td class="td1">${bottle['gsx$nr']['$t']}.</td>
    <td class="td2">${bottle['gsx$bryggeri']['$t']}</td>
    <td class="td3">${bottle['gsx$ølnavn']['$t']}</td>
    <td class="td4">${bottle['gsx$ølkat']['$t']} </td>
    <td class="td5">${bottle['gsx$alk']['$t']} </td>
    <td class="td7">${bottle['gsx$pris']['$t']}Kr</td>
    </tr>
    </tbody>
    </table>
    `;
  }
  document.querySelector("#menus2").innerHTML += htmlTemplate;
}

//Get the button:(go to top page Burhan)
let mybutton = document.getElementById("gototop");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; //
  document.documentElement.scrollTop = 0; //
}