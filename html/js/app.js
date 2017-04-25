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

function addResult(pipelineName, pipelineLeakiness) {
	document.getElementById('results').innerHTML += (`<li class="result">${pipelineName} is ${pipelineLeakiness}% leaky</li>`);
}

function checkResult(pipelineName, responseJSON) {
	pipelineLeakiness = 100 - responseJSON.healthReport[0].score;

	if (pipelineLeakiness >= 80) {
		addResult(pipelineName,pipelineLeakiness);
		$("#noresults").hide();
		$("body").css('background-color', '#d9534f');

	} 
}

function getPipeline(pipelineName, url) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var responseObject = JSON.parse(xhr.responseText)
			checkResult(pipelineName, responseObject);
		}
	};
	xhr.open('GET', url);
	xhr.send();
}

function checkHealth(pipelines) {
	console.log("Pipelines: " + pipelines);
	for (var i=0; i<pipelines.length; i++) {
		getPipeline(pipelines[i].pipelineName,pipelines[i].url);
	}			
}

$.ready(getPipelines());
