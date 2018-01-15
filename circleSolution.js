var circleRadii = [40, 20, 10];


var svgContainer = d3.select("body").append("svg")
	.attr("width", 200)
	.attr("height", 200);
var circles = svgContainer.selectAll("circle")
	.data(circleRadii)
	.enter()
	.append("circle");
var circleAttributes = circles
	.attr("cx", 50)
	.attr("cy", 50)
	.attr("r", function (d) { return d; })
	.style("fill", "green");
var circleAttributes = circles
	.attr("cx", 50)
	.attr("cy", 50)
	.attr("r", function (d) { return d; })
	.style("fill", function (d) {
	var returnColor;
	if (d == 40) { returnColor = "green"; }
	else if (d == 20) { returnColor = "purple"; }
	else if (d == 10) { returnColor = "red"; }
	return returnColor;
});
var circleAttributes = circles
	.attr("cx", 50)
	.attr("cy", 50)
	.attr("r", function (d) { 
	var returnRadii;
	if (d == 40) { returnRadii = 60; }
	else if (d == 20) { returnRadii = 35; }
	else if (d == 10) { returnRadii = 20; }
	return returnRadii;
 })
	.style("fill", function (d) {
	var returnColor;
	if (d == 40) { returnColor = "gray"; }
	else if (d == 20) { returnColor = "blue"; }
	else if (d == 10) { returnColor = "white"; }
	return returnColor;
});
