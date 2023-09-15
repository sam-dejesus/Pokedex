var pokeSearch = $('#pokeSearch')
var go = $('#go')
var apiDashboard = $('#api')
var newsFeed = $('#newsFeed')


go.click((event)=>{
    event.preventDefault();
var pokemon = pokeSearch.val()
var url = "https://pokeapi.co/api/v2/pokemon/"+ pokemon
fetch(url)
.then(response => response.json())
.then(data => {
    apiDashboard.empty();
    var name = data.name
    var img = data.sprites.front_default
    var dataType = data.types
    // var dataAbility = data.ability
    var title = $('<h2>').text(name)
    var pic = $('<img>').attr("src" ,img).addClass('pokeimg')
   var type = $('<p>').text("Type(s): " + dataType.map(type => type.type.name).join(", "));
//    var ability = $('<p>').text("ability(s): " + dataAbility.map(ability => ability.ability.name).join(", "));
    var pokeDiv = $('<div>').addClass('pokebox')
    pokeDiv.append(title, pic, type)
    apiDashboard.append(pokeDiv)
    console.log(data)
})

})
//----------

//----------


var style = $('<style>').text(`
.dashboard-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: white;
  border: 2px solid gray;
  margin: 10px;
  width: 80%;
  height:400px;
}
.dashboard-item h2 {
  font-size: 15px;
  margin: 10px;
}
.dashboard-item img {
    display: flex;
    align-items: center;
    justify-content: center;
  max-width: 50%;
  max-height: 50%;
  margin-bottom: 10px;
  height: 200px;
}

.dashboard-item a {
  font-size: 30px;
  text-decoration: none;
  color: red;
  margin-top: 10px;
}
`).appendTo('head');
var url = 'https://newsapi.org/v2/everything?' +
          'q=Pokemon& ' +
          'sortBy=popularity&' +
          'apiKey=3ff335e19cf94ef4b1a61bb83c5760aa';

var req = new Request(url);

fetch(url)
 .then(response => response.json())
 .then(data => {
    console.log(data)
  
    for (let i = 0; i < 8; i++){
        var title = data.articles[i].title
        var img =  data.articles[i].urlToImage
        var description = data.articles[i].description
        var articles = data.articles[i].url

        var name = $('<h2>').text(title).addClass()
        var pic = $('<img>').attr("src" ,img)
        var detail = $('<p>').text(description)
        var link = $('<a>').attr('href', articles).text('Read More');
        var items = $('<div>').addClass('dashboard-item')
        items.append(name, pic, detail, link)
        newsFeed.append(items)
        // console.log(title, img, description)
    }

 })

