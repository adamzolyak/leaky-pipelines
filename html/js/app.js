function addResult(pipelineName, pipelineLeakiness) {
	document.getElementById('results').innerHTML += (`<li class="result">${pipelineName} is ${pipelineLeakiness}% leaky</li>`);
}

var checkResult = function (pipelineName, healthReportScore) {
	pipelineLeakiness = 100 - healthReportScore;

	if (pipelineLeakiness >= 80) {
		addResult(pipelineName,pipelineLeakiness);
		$("#noresults").hide();
		$("body").css('background-color', '#d9534f');

	} 
}

var getPipeline = function (index, pipeline) {
	$.getJSON(pipeline.url,function (response) {
		checkResult(pipeline.pipelineName, response.healthReport[0].score);
	})
	
}

var checkAllPipelineHealth = function (pipelines) {
	$.each(pipelines, getPipeline)		
}

$.ready($.getJSON("pipelines.json",checkAllPipelineHealth));