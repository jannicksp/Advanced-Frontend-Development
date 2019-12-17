"use strict";
//overlay nav
    if (typeof jQuery == 'undefined')
        document.write(unescape("%3Cscript src='js/jquery-1.9.js'" +
            "type='text/javascript'%3E%3C/script%3E"))

    function openNav() {
        document.getElementById("myNav").style.width = "100%";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

// weather api Jannick
document.addEventListener("DOMContentLoaded", function() {
  // the DOM is fully loaded
  console.log("Document ready!");

  // url: Working APi weather Jannick

  const url = 'http://api.weatherstack.com/current';
  const key = 'bd0a450124fc4cf4e16547a0bffd1426';
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
        <article class="centermenu">
          <h2>${menu['gsx$nr']['$t']}. &nbsp</h2>
          <h4>${menu['gsx$bryggeri']['$t']}&nbsp &nbsp </h4>
          <h4>${menu['gsx$ølnavn']['$t']}</h4>
          <h4>${menu['gsx$ølkat']['$t']} |</h4>
          <h4>${menu['gsx$alk']['$t']} |</h4>
            <h5>${menu['gsx$beskrivelse']['$t']} | </h5>
                <h3>${menu['gsx$pris']['$t']}Kr|</h3>
              <br></br>
                <br></br>
        </article>
      `;
  }
  document.querySelector("#menus").innerHTML += htmlTemplate;
}


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
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

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
          <article class="centermenu">
                <h2>${drink['gsx$nr']['$t']}.</h2>
            <h2>${drink['gsx$drikke']['$t']}</h2>
            <h3>&nbsp-&nbsp${drink['gsx$pris']['$t']}</h3>
          </article>
        `;
      }
        document.querySelector("#drinkmenus").innerHTML += htmlTemplate;
        }

  /* Fetches the Google Sheet for the menu Jannick */
  let sheetNumber4 = 3;
  let sheetUrl4 = `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetNumber4}/public/full?alt=json`;
  console.log(sheetUrl4);

  fetch(sheetUrl4)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      appendSjus(json.feed.entry);
    });

  /* This appends the data from the json file, to the DOM - jannick */
  function appendSjus(drinks) {
    console.log(drinks);
    let htmlTemplate = "";
    for (let drink of drinks) {
      htmlTemplate += `
          <article class="centermenu">
                <h2>${drink['gsx$nr']['$t']}.</h2>
            <h2>${drink['gsx$drikke']['$t']}</h2>
            <h3>&nbsp-&nbsp${drink['gsx$pris']['$t']}</h3>
          </article>
        `;
    }
    document.querySelector("#sjusmenus").innerHTML += htmlTemplate;
  }

  /* Fetches the Google Sheet for the menu Jannick */
  let sheetNumber5 = 4;
  let sheetUrl5 = `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetNumber5}/public/full?alt=json`;
  console.log(sheetUrl5);

  fetch(sheetUrl5)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      appendSnack(json.feed.entry);
    });

  /* This appends the data from the json file, to the DOM - jannick */
  function appendSnack(snacks) {
    console.log(snacks);
    let htmlTemplate = "";
    for (let snack of snacks) {
      htmlTemplate += `
          <article class="centermenu">
                <h2>${snack['gsx$nr']['$t']}.</h2>
            <h2>${snack['gsx$snack']['$t']}</h2>
            <h3>&nbsp-&nbsp${snack['gsx$pris']['$t']}</h3>
          </article>
        `;
    }
    document.querySelector("#snackmenus").innerHTML += htmlTemplate;
  }

  /* Fetches the Google Sheet for the menu Jannick */
  let sheetNumber6 = 5;
  let sheetUrl6 = `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetNumber6}/public/full?alt=json`;
  console.log(sheetUrl6);

  fetch(sheetUrl6)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      appendmns(json.feed.entry);
    });

  /* This appends the data from the json file, to the DOM - jannick */
  function appendmns(mns) {
    console.log(mns);
    let htmlTemplate = "";
    for (let mn of mns) {
      htmlTemplate += `
          <article class="centermenu">
                <h2>${mn['gsx$nr']['$t']}.</h2>
            <h2>${mn['gsx$drikke']['$t']}</h2>
            <h4>${mn['gsx$beskrivelse']['$t']}</h4>
            <h3>&nbsp-&nbsp${mn['gsx$pris']['$t']}</h3>
          </article>
        `;
    }
    document.querySelector("#menumenus").innerHTML += htmlTemplate;
  }

  /* Fetches the Google Sheet for the menu Jannick */
  let sheetNumber9 = 8;
  let sheetUrl9 = `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetNumber9}/public/full?alt=json`;
  console.log(sheetUrl9);

  fetch(sheetUrl9)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      appendBottle(json.feed.entry);
    });

  /* This appends the data from the json file, to the DOM - jannick */
  function appendBottle(bottles) {
    console.log(bottles);
    let htmlTemplate = "";
    for (let bottle of bottles) {
      htmlTemplate += `
      <article class="centermenu">
        <h2>${bottle['gsx$nr']['$t']}. &nbsp</h2>
        <h4>${bottle['gsx$bryggeri']['$t']}&nbsp &nbsp </h4>
        <h4>${bottle['gsx$ølnavn']['$t']}</h4>
        <h4>${bottle['gsx$ølkat']['$t']} |</h4>
        <h4>${bottle['gsx$alk']['$t']} |</h4>
          <h5>${bottle['gsx$beskrivelse']['$t']} | </h5>
              <h3>${bottle['gsx$pris']['$t']}Kr|</h3>
            <br></br>
              <br></br>
      </article>
    `;
    }
    document.querySelector("#menus2").innerHTML += htmlTemplate;
  }

  //Get the button:(go to top page Burhan)
  let mybutton = document.getElementById("gototop");

  // When the user scrolls down 400px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    console.log(document.body.scrollTop)
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


  //infograph chart.js

  let sheetNumber8 = 7;
  let sheetUrl8 = `https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetNumber8}/public/full?alt=json`;
  console.log(sheetUrl8);

  fetch(sheetUrl8)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      appendChart(json.feed.entry);
    });

  function appendChart(data) {
    console.log(data);

    // prepare data
    let marks = [];
    let numbers = [];
    let colors = [];

    for (let mark of data) {
      marks.push(`${mark['gsx$mark']['$t']}: ${mark['gsx$explanation']['$t']}`);
      numbers.push(mark['gsx$number']['$t']);
      colors.push(mark['gsx$color']['$t']);
    }

    // generate chart
    let chart = document.getElementById('chart');
    let myDoughnutChart = new Chart(chart, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: numbers,
          backgroundColor: colors
        }],
        labels: marks
      }
    });
  }

//dato og tid - Burhan

//jeg har gjort så tal under 10 skal tilføje et 0, hvis i er mindre end 10 så tilføjes der et 0.
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//addZero er den function som tilføjer 0, når tallet er 1 cifret.

function myFunction() {
var d = new Date();
var n = JSON.stringify(d.getFullYear());
var k = addZero(d.getDate());
var b = addZero(d.getMonth()+1);
var t = addZero(d.getHours());
var m = addZero(d.getMinutes());

//jeg kalder på de variabler der skal vises.

document.getElementById("demo").innerHTML = k +  "/" +  b + " " + t + ":" + m + "-" + n;
}

//her kalder vi på functionerne så de aktiveres.

myFunction();
