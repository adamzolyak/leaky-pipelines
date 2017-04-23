var pipelines = [
		{url:"https://jsonplaceholder.typicode.com/posts/1", checkType:"poorHealth"},
		{url:"https://jsonplaceholder.typicode.com/posts/2", checkType:"poorHealth"},
		{url:"https://jsonplaceholder.typicode.com/posts/3", checkType:"singleFail"},
		{url:"https://jsonplaceholder.typicode.com/posts/4", checkType:"singleFail"},
		{url:"https://jsonplaceholder.typicode.com/posts/5", checkType:"singleFail"},
	];

function checkResult(url, checkType, responseJSON) {
	if (checkType === "poorHealth") {
				document.getElementById('result').innerHTML += ("Poor Health Check: " + responseJSON.id + '<br>');
	} else if (checkType === "singleFail") {
				document.getElementById('result').innerHTML += ("Single Fail Check: " + responseJSON.id + '<br>');
	}
}

function getJSON(url, checkType) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var responseObject = JSON.parse(xhr.responseText)
			checkResult(url, checkType, responseObject);
		}
	};
	xhr.open('GET', url);
	xhr.send();
}

function checkHealth() {
	for (var i=0; i<pipelines.length; i++) {
		getJSON(pipelines[i].url,pipelines[i].checkType);
	}	
}

$.ready(checkHealth());