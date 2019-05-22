requestAPI = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            user = {
                name: data['name'],
                speacial_attack: data["stats"][2]["base_stat"],
                hp: data["stats"][5]["base_stat"],
                defense:data["stats"][1]["base_stat"],
                ability:data["abilities"][1]["ability"]["name"]

            }
        }
    };
    xhttp.open("GET", " https://fizal.me/pokeapi/api/v2/name/pikachu.json", true);
    xhttp.open("GET", " https://fizal.me/pokeapi/api/v2/name/jigglypuff.json", true);
    xhttp.open("GET", " https://fizal.me/pokeapi/api/v2/name/kangaskhan.json", true);
    xhttp.send();
}

requestAPI()
,
displayUser = () => {
    let cont = document.createElement('div')
    let h1 = document.createElement('h1')
    let p1 = document.createElement('p')
    let img = document.createElement('img')

    h1.innerText = user['name']
    p1.innerText = user['followers']
    img.setAttribute('src', user['image'])
    cont.appendChild(h1)
    cont.appendChild(p1)
    cont.appendChild(img)
    document.body.appendChild(cont)
}

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function openCity(cityName, elmnt, color) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(cityName).style.display = "block";

  elmnt.style.backgroundColor = color;
}


document.getElementById("defaultOpen").click();
