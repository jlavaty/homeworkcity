$(document).ready(function(){
//grab the city
var input = $('#city-type');
var submit = $('.container form');
//background image to change
var body = $('body');
//submit the city
	$(submit).submit(function (event){
		event.preventDefault();
	var value = $(input).val();
	//change letters to lowercase or uppercase
	var value = value.toLowerCase().trim()
	
	//austin
	if (value === 'austin' || value === 'atx'){
		$(body).removeClass();
		$(body).addClass('austin');
	
//new york
	} else if (value === 'new york' || value === 'nyc' || value === 'new york city'){
		$(body).removeClass();
		$(body).addClass('nyc');
		
//san francisco
	}else if (value === 'san francisco' || value === 'sf' || value === 'san fran'){
		$(body).removeClass();
		$(body).addClass('sf');
		
//sydney
	}else if (value === 'sydney' || value ==='syd'){
		$(body).removeClass();
		$(body).addClass('sydney');
		
//los angeles
	}else if (value === 'los angeles' || value === 'la'){
		$(body).removeClass();
		$(body).addClass('la');
		
	}
	});
});