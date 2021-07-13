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
let sheetNumber = 1;
let sheetUrl = `https://spreadsheets.google.com/feeds/list/${HanearkId}/${sheetNumber}/public/full?alt=json`;

fetch(sheetUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    appendMenus(json.feed.entry);
  });

/*
Appends json data to the DOM
*/
function appendMenus(menus) {
  let htmlTemplate = "";
  for (let menu of menus) {
    htmlTemplate += `

    <table>
      <tbody>
        <tr>
          <td class="td1">${menu['gsx$nr.']['$t']}.</td>
          <td class="td2">${menu['gsx$bryggeri']['$t']}</td>
          <td class="td3">${menu['gsx$ølnavn']['$t']}</td>
          <td class="td4">${menu['gsx$ølkat.']['$t']}</td>
          <td class="td5">${menu['gsx$alk.']['$t']}</td>
          <td class="td6">${menu['gsx$beskrivelse']['$t']}</td>
          <td class="td7">${menu['gsx$pris']['$t']} kr</td>
      </tr>
    </tbody>
  </table>
      `;
  }
  document.querySelector("#menus").innerHTML += htmlTemplate;
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
let sheetNumber3 = 2;
let sheetUrl3 = `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetNumber3}/public/full?alt=json`;
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

fetch(sheetUrl3)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    appendDrinks(json.feed.entry);
  });

/* This appends the data from the json file, to the DOM - jannick */
function appendDrinks(drinks) {
  let htmlTemplate = "";
  for (let drink of drinks) {
    htmlTemplate += `
    <table>
      <tbody>
        <tr>

            <td>${drink['gsx$drikke']['$t']}</td>
            <td>${drink['gsx$pris']['$t']}</td>

        </tr>
    </tbody>
  </table>
        `;
  }
  document.querySelector("#drinkmenus").innerHTML += htmlTemplate;
}

/* Fetches the Google Sheet for the menu Jannick */
let sheetNumber4 = 3;
let sheetUrl4 = `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetNumber4}/public/full?alt=json`;

fetch(sheetUrl4)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    appendSjus(json.feed.entry);
  });

/* This appends the data from the json file, to the DOM - jannick */
function appendSjus(drinks) {
  let htmlTemplate = "";
  for (let drink of drinks) {
    htmlTemplate += `
    <table>
      <tbody>
        <tr>

            <td>${drink['gsx$drikke']['$t']}</td>
            <td>${drink['gsx$pris']['$t']}</td>
        </tr>
      </tbody>
    </table>
        `;
  }
  document.querySelector("#sjusmenus").innerHTML += htmlTemplate;
}

/* Fetches the Google Sheet for the menu Jannick */
let sheetNumber5 = 4;
let sheetUrl5 = `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetNumber5}/public/full?alt=json`;

fetch(sheetUrl5)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    appendSnack(json.feed.entry);
  });

/* This appends the data from the json file, to the DOM - jannick */
function appendSnack(snacks) {
  let htmlTemplate = "";
  for (let snack of snacks) {
    htmlTemplate += `
    <table>
      <tbody>
        <tr>
            <td>${snack['gsx$snack']['$t']}</td>
            <td>${snack['gsx$pris']['$t']}</td>
        </tr>
      </tbody>
    </table>
        `;
  }
  document.querySelector("#snackmenus").innerHTML += htmlTemplate;
}

/* Fetches the Google Sheet for the menu Jannick */
let sheetNumber6 = 5;
let sheetUrl6 = `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetNumber6}/public/full?alt=json`;

fetch(sheetUrl6)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    appendmns(json.feed.entry);
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
let sheetNumber9 = 8;
let sheetUrl9 = `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetNumber9}/public/full?alt=json`;

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

