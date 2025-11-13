window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "15px";
  } else {
    document.getElementById("header").style.fontSize = "60px";
  }

    const header = document.getElementById("header");
    const heading = header.querySelector("h5");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.style.padding = "10px 10px";
      heading.style.fontSize = "15px";
    } else {
      header.style.padding = "50px 10px";
      heading.style.fontSize = "60px";
    }
  } 


  function change_CBM(){


    let SS = document.getElementById("SS");

    
    if (SS.getAttribute('href') == 'McLovins_CBM.css') {
                SS.setAttribute('href', 'McLovins.css');
            } 
    else if(SS.getAttribute('href') == 'McLovins.css') {
                SS.setAttribute('href', 'McLovins_CBM.css');
            } 
}



  function keep_SS(){

    let SS = document.getElementById("SS");

    if (SS.getAttribute('href') == 'McLovins.css') {
                SS.setAttribute('href', 'McLovins.css');
            } 
    else if(SS.getAttribute('href') == 'McLovins_CBM.css') {
                SS.setAttribute('href', 'McLovins_CBM.css');
            }

  }

const apiUrl = 'https://www.mapquestapi.com/staticmap/v5/map';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });