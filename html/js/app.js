function getPipelines() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var responseObject = JSON.parse(xhr.responseText)
			checkHealth(responseObject);
		}
	};
	xhr.open('GET', 'pipelines.json');
	xhr.send();

}

function checkResult(url, checkType, responseJSON) {
	if (checkType === "poorHealth") {
				document.getElementById('result').innerHTML += ("Poor Health Check: " + responseJSON.id + '<br>');
	} else if (checkType === "singleFail") {
				document.getElementById('result').innerHTML += ("Single Fail Check: " + responseJSON.id + '<br>');
	}
}

function getPipeline(url, checkType) {
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

function checkHealth(pipelines) {
	console.log("Pipelines: " + pipelines);
	for (var i=0; i<pipelines.length; i++) {
		getPipeline(pipelines[i].url,pipelines[i].checkType);
	}	
}

$.ready(getPipelines());
