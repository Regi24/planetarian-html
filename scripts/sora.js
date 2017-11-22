var scenes = [];
var counter = 0;
var music = new Audio('');
var dialogue = new Audio('');

// Load external JSON file into scenes array
function loadJSON() {
	//$.getJSON("https://raw.githubusercontent.com/Regi24/planetarian-html/master/assets/story/scenes.json?token=AHEVrezP4j5AuUVEjfowGdiTz8x01e6Kks5aHUvkwA%3D%3D", function(data) {
	$.getJSON("./assets/story/scenes.json", function(data) {
		scenes = data;
		//console.log(scenes[0].title);
	});
}

function nextScene() {
	if(counter < scenes.length) {
		//document.getElementById("text").innerHTML = 'qweqwewqewqe';
		//playMusic(scenes[counter].music);
		//if(scenes[counter].dialogue !== '') {
		playDialogue(scenes[counter].dialogue);
		//}

		if(scenes[counter].clearText === 'true') {
			clearText();
		}
		if(scenes[counter].appendText === 'true') {
			appendText(scenes[counter].text, scenes[counter].newLine);
		} else {
			displayText(scenes[counter].text);
		}
		counter++;
	}
}

function playMusic(musicName) {
	if(!music.paused) {
		music.pause();
	}

	music = new Audio('./assets/music/' + musicName).play();
}

function playDialogue(dialogueName) {
	console.log('Play dialogue: ' + dialogueName);
	music = new Audio('./assets/dialogue/' + dialogueName + '.mp3').play();
}

function displayText(text) {
	console.log('Display text: ' + text);
	document.getElementById("text").innerHTML = text;
}

function appendText(text, newLine) {
	console.log('Append text: ' + text);
	if(newLine === 'true') {
		document.getElementById("text").innerHTML += '<br />' + text;
	} else {
		document.getElementById("text").innerHTML += ' ' + text;
	}

}

function clearText() {
	console.log('Clear text');
	document.getElementById("text").innerHTML = '';
}
