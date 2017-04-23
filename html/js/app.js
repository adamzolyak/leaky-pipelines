var pipelines = [
		"https://jsonplaceholder.typicode.com/posts/1",
		"https://jsonplaceholder.typicode.com/posts/2",
		"https://jsonplaceholder.typicode.com/posts/3",
		"https://jsonplaceholder.typicode.com/posts/4",
		"https://jsonplaceholder.typicode.com/posts/5",
	];

function getAPI(url) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			var responseObject = JSON.parse(xhr.responseText)
			document.getElementById('result').innerHTML += (responseObject.id + '<br>');
		}
	};
	xhr.open('GET', url);
	xhr.send();
}

function checkHealth(updateHealthReport) {
	for (var i=0; i<pipelines.length; i++) {
		getAPI(pipelines[i]);
	}	
}

$.ready(checkHealth());