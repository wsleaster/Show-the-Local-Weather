var getWeather = function(data) {
  $.getJSON('http://api.openweathermap.org/data/2.5/weather', {
        lat: data.lat,
        lon: data.lon,
        appid: "884748095e7c841ac0c25aa1aee85468"
    }, showWeather, 'jsonp');
};

var showWeather = function(data) {
    $('#temp').text(data.main.temp)
    $('#description').text(data.weather[0].description)
    $('#place').text(data.name)
  
  var tempK = data.main.temp;
						//convert Kelvin to Fahrenheit
						var tempF = ((((9 * (tempK - 273.15)) / 5) + 32).toFixed(2));
						//convert Fahrenheit to Celsius
						var tempC = ((((tempF - 32) * 5) / 9).toFixed(2));

					$('#temp').html(tempF + "°F");
  //change background based on temp
  if ( tempF< 0){
    $('body').css('background', '#0066ff')
  } else if (tempF < 25 && tempF > 0 ){
    $('body').css('background', '#6600ff')
  } else if( tempF < 50 && tempF > 25){
    $('body').css('background', ' #66ff33')
  } else if( tempF < 75 && tempF > 50){
    $('body').css('background', '#ffcc00')
  }else if( tempF < 100 && tempF > 75){
    $('body').css('background', '#990000')
  } else {
    $('body').css('background', '#ffffff')
  }
  // change between fahrenheit and celsius
  function changeUnit(){
							$('#c').click(function(){
								$('#temp').html(tempC + '°C');
							})
							$('#f').click(function(){
								$('#temp').html(tempF + '°F');
							});
						}
};
//change text and background on button click
$(document).ready(function() {
    $('#mainBtn').click(function() {
        $.getJSON('http://ip-api.com/json', getWeather)
    })
})