define("sap_viz_ext_linechartzoom-src/js/flow", ["sap_viz_ext_linechartzoom-src/js/module"], function(moduleFunc) {
	var flowRegisterFunc = function() {
		var flow = sap.viz.extapi.Flow.createFlow({
			id: "sap.viz.ext.linechartzoom",
			name: "Line Chart with Zoom",
			dataModel: "sap.viz.api.data.CrosstableDataset",
			type: "BorderSVGFlow"
		});

		var titleElement = sap.viz.extapi.Flow.createElement({
			id: "sap.viz.chart.elements.Title",
			name: "Title"
		});
		flow.addElement({
			"element": titleElement,
			"propertyCategory": "title",
			"place": "top"
		});

		// var legendElement = sap.viz.extapi.Flow.createElement({
		// 	id: "sap.viz.chart.elements.ColorLegend",
		// 	name: "Legend",
		// 	dimensionIndex: [1]
		// });
		// flow.addElement({
		// 	"element": legendElement,
		// 	"propertyCategory": "legend",
		// 	"place": "right"
		// });

		var element = sap.viz.extapi.Flow.createElement({
			id: "sap.viz.ext.linechartzoom.PlotModule",
			name: "Line Chart with Zoom Module"
		});
		element.implement("sap.viz.elements.common.BaseGraphic", moduleFunc);

		/*Feeds Definition*/
		var ds1 = {
			"id": "sap.viz.ext.linechartzoom.PlotModule.DS1",
			"name": "X Axis",
			"type": "Dimension",
			"min": 0, //minimum number of data container
			"max": 2, //maximum number of data container
			"aaIndex": 1
		};
		element.addFeed(ds1);

		var ms1 = {
			"id": "sap.viz.ext.linechartzoom.PlotModule.MS1",
			"name": "Y Axis",
			"type": "Measure",
			"min": 0, //minimum number of measures
			"max": Infinity, //maximum number of measures
			"mgIndex": 1
		};
		element.addFeed(ms1);

		element.addProperty({
			name: "colorPalette",
			type: "StringArray",
			supportedValues: "",
			defaultValue: d3.scale.category20().range().concat(d3.scale.category20b().range()).concat(d3.scale.category20c().range())
		});

		flow.addElement({
			"element": element,
			"propertyCategory": "plotArea"
		});
		sap.viz.extapi.Flow.registerFlow(flow);
	};
	flowRegisterFunc.id = "sap.viz.ext.linechartzoom";
	return {
		id: flowRegisterFunc.id,
		init: flowRegisterFunc
	};
});