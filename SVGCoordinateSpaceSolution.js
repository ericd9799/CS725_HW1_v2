var spaceCircles = [30, 70, 110];

var svgContainer = d3.select("#area2").append("svg")
	.attr("width", 200)
	.attr("height", 200);
var circles = svgContainer.selectAll("circle")
	.data(spaceCircles)
	.enter()
	.append("circle");

var circleAttributes = circles
	.attr("cx", function (d) { return d;} )
	.attr("cy", function (d) { return d;} )
	.attr("r", 20)
	.style("fill", function (d) {
		var returnColor;
		if (d == 30) { returnColor = "green"; }
		else if (d == 70) { returnColor = "purple"; }
		else if (d == 110) { returnColor = "red"; }
		return returnColor;
	});

var spaceCircles = [40, 85, 95];


var circles = svgContainer.selectAll("circle")
	.data(spaceCircles);

var circleAttributes = circles
	.attr("cx", function (d) { return d;} )
	.attr("cy", function (d) { return d;} );


var circleAttributes = circles
	.style("fill", function (d) {
		var returnColor;
		if (d == 40) { returnColor = "pink"; }
		else if (d == 85) { returnColor = "blue"; }
		else if (d == 95) { returnColor = "silver"; }
		return returnColor;
	});
