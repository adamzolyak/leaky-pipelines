var addResultToPage = function (pipelineName, pipelineLeakiness) {
	document.getElementById('results').innerHTML += (`<li class="result">${pipelineName} is ${pipelineLeakiness}% leaky</li>`);
}

var evaluateLeakinessOfPipeline = function (pipelineName, healthReportScore) {
	pipelineLeakiness = 100 - healthReportScore;

	if (pipelineLeakiness >= 80) {
		addResultToPage(pipelineName,pipelineLeakiness);
		$("#noresults").hide();
		$("body").css('background-color', '#d9534f');

	} 
}

var getPipelineHealthReportScore = function (index, pipeline) {
	$.getJSON(pipeline.url,function (response) {
		evaluateLeakinessOfPipeline(pipeline.pipelineName, response.healthReport[0].score);
	})
	
}

var checkHealthAllPipelines = function (pipelines) {
	$.each(pipelines, getPipelineHealthReportScore)		
}

$.ready($.getJSON("pipelines.json",checkHealthAllPipelines));