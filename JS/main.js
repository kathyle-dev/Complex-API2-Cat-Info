//worked on with House Hayden: Rebecca, Kadeisha, Jeffrey, and Anastasia

const catAPI ={
  button: document.getElementById('button'),
  name: document.getElementById('name'),
  description: document.getElementById('description'),
  url: document.getElementById('url'),
  temperament: document.getElementById('temperament'),
  altNames: document.getElementById('altNames'),
  box: document.getElementsByClassName('box')[0],
  hide: document.getElementById('hide'),
  count: 0,
  getCat(){
    fetch('https://catfact.ninja/breeds?limit=50')
    .then(response => response.json())
    .then(info => {
      let breed = info.data[catAPI.count].breed;
        catAPI.name.innerHTML = breed;
        catAPI.count +=1;
        console.log(info)
        fetch(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`)
          .then(response => response.json())
          .then(info => {
            catAPI.description.innerHTML= `DESCRIPTION: ${info[0].description}`
            if(info[0].alt_names == ""){
              catAPI.altNames.innerHTML = "";
            }else{
              catAPI.altNames.innerHTML = `ALTERNATIVE NAMES: ${info[0].alt_names}`
            }
            catAPI.temperament.innerHTML = `TEMPERAMENT: ${info[0].temperament}`
            catAPI.url.href = info[0].vetstreet_url;
            catAPI.hide.style.display = "inline";
            catAPI.box.style.display = "inline";

            catAPI.button.innerHTML = "GIVE ME ANOTHER CATTT"
          })
        })
    }
}
catAPI.button.addEventListener("click", catAPI.getCat)
