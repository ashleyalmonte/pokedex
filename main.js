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

requestAPI = () => {
  const Pokemon = prompt("Enter a pokemon")
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            user = {
                name: data['name'],
                attack: data["stats"][4]["base_stat"],
                hp: data["stats"][5]["base_stat"],
                defense:data["stats"][3]["base_stat"],
                ability:data["abilities"][0]["ability"]["name"]

            }
            displayUser()

        }
    };
        xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/name/${Pokemon}.json`, true);
    xhttp.send();
}
 let cont = document.createElement('div')
displayUser = () => {
    let cont = document.createElement('div')
    let h1 = document.createElement('h1')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p2')
    let p3 = document.createElement('p3')
    let p4 = document.createElement('p4')
    let img = document.createElement('img')

  h1.innerText = user['name']
  p1.innerText = user['defense']
  p2.innerText = user['attack']
  p3.innerText = user['hp']
  p4.innerText = user['ability']
  img.setAttribute('src', user['sprite'])
   cont.appendChild(h1)
    cont.appendChild(p1)
    cont.appendChild(p2)
    cont.appendChild(p3)
    cont.appendChild(p4)
    cont.appendChild(img)
    document.body.appendChild(cont)


}
requestAPI()
