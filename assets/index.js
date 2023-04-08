var pokeSearch = $('#pokeSearch')
var go = $('#go')
var apiDashboard = $('#api')


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
    var title = $('<h2>').text(name)
    var pic = $('<img>').attr("src" ,img)
   var type = $('<p>').text("Type(s): " + dataType.map(type => type.type.name).join(", "));
    var pokeDiv = $('<div>').append(title, pic, type)
    apiDashboard.append(pokeDiv)
    console.log(data)
})

})

