var pipelines = [
		{url:"https://jsonplaceholder.typicode.com/posts/1", checkType:"poorHealth"},
		{url:"https://jsonplaceholder.typicode.com/posts/2", checkType:"poorHealth"},
		{url:"https://jsonplaceholder.typicode.com/posts/3", checkType:"singleFail"},
		{url:"https://jsonplaceholder.typicode.com/posts/4", checkType:"singleFail"},
		{url:"https://jsonplaceholder.typicode.com/posts/5", checkType:"singleFail"},
	];

function getAPI(url, checkType) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			var responseObject = JSON.parse(xhr.responseText)

			if (checkType === "poorHealth") {
				document.getElementById('result').innerHTML += ("Poor Health Check: " + responseObject.id + '<br>');
			} else if (checkType === "singleFail") {
				document.getElementById('result').innerHTML += ("Single Fail Check: " + responseObject.id + '<br>');
			}
		}
	};
	xhr.open('GET', url);
	xhr.send();
}

function checkHealth(updateHealthReport) {
	for (var i=0; i<pipelines.length; i++) {
		getAPI(pipelines[i].url,pipelines[i].checkType);
	}	
}

$.ready(checkHealth());