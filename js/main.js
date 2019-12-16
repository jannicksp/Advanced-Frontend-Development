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

// weather api Jannick
document.addEventListener("DOMContentLoaded", function() {
  // the DOM is fully loaded
  console.log("Document ready!");

  // url: http://api.apixu.com/v1/current.json?key=19474b792e92493e809105720180110&q=Aarhus

  const url = 'http://api.weatherstack.com/current';
  const key = 'f104663606762aadb9858a8367d0d156';
  let query = 'Aarhus';

  fetch(`${url}?access_key=${key}&query=${query}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      let current = json.current;
if( current.temperature<10){
document.querySelector('#current-condition').innerHTML = `
  <img src='${current.weather_icons}'>
  <p>Det er ${current.temperature} &#8451 <br>Kom ind og få varmen med en Kaffe</p>
`;}
if( current.temperature>15){
document.querySelector('#current-condition').innerHTML = `
  <img src='${current.weather_icons}'>
  <p>Det er ${current.temperature} &#8451 <br>Kom ind og køl ned med en øl</p>
`;}


    });
});

/* Pageloader - Ian */
const pageloader = document.querySelector('.pageloader');


window.addEventListener('load', function(){
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

  /* Fetches the Google Sheet for the About site - Ian */
  let sheetNumber2 = 6;
  let sheetUrl2 = `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetNumber2}/public/full?alt=json`;
  console.log(sheetUrl2);

  fetch(sheetUrl2)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      appendArtists(json.feed.entry);
    });

  /* This appends the data from the json file, to the DOM - Ian */
  function appendArtists(artists) {
    console.log(artists);
    let htmlTemplate = "";
    for (let artist of artists) {
      htmlTemplate += `
          <article class="center">
            <h2>${artist['gsx$kunstner']['$t']}</h2>
            <h5>&nbsp-&nbsp${artist['gsx$kunstform']['$t']}</h5>
          </article>
        `;
    }
    document.querySelector("#artists").innerHTML += htmlTemplate;
  }


  /* Fetches the Google Sheet for the menu Jannick */
  let sheetNumber3 = 2;
  let sheetUrl3 = `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetNumber3}/public/full?alt=json`;
  console.log(sheetUrl3);

  fetch(sheetUrl3)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      appendDrinks(json.feed.entry);
    });

  /* This appends the data from the json file, to the DOM - jannick */
  function appendDrinks(drinks) {
    console.log(drinks);
    let htmlTemplate = "";
    for (let drink of drinks) {
      htmlTemplate += `
          <article class="center">
                <h2>${drink['gsx$nr']['$t']}.</h2>
            <h2>${drink['gsx$drikke']['$t']}</h2>
            <h3>&nbsp-&nbsp${drink['gsx$pris']['$t']}</h3>
          </article>
        `;
    }
    document.querySelector("#drinkmenus").innerHTML += htmlTemplate;
  }
