var scenes = [];
var counter = 0;
var music = new Audio('');

// Load external JSON file into scenes array
function loadJSON() {
	$.getJSON("https://raw.githubusercontent.com/Regi24/planetarian-html/master/assets/story/scenes.json?token=AHEVrezP4j5AuUVEjfowGdiTz8x01e6Kks5aHUvkwA%3D%3D", function(data) {
		scenes = data;
		//console.log(scenes[0].title);
	});
}

function nextScene() {
	if(counter < scenes.length) {
		document.getElementById("speech").innerHTML = scenes[counter].title;
		playMusic(scenes[counter].music);
		counter++;
	} 
}

function playMusic(musicName) {
	if(!music.paused) {
		music.pause();
	}
	
	music = new Audio('./assets/music/' + musicName).play();
}