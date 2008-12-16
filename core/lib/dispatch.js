/**
 * @author stewartmatheson
 */

var dispatch = 
{
	run : function()
	{
		//get the get data
		var getData = Jaxer.request.current.queryParts;
		//load the controller file
		
		controllerName = getData.c || 'index';
		actionName = getData.a || 'index';
		Controller.load(controllerName, actionName) 	
	},
	
	loadController : function(controllerName, actionName)
	{
		controllerName =  Utils.capitalize(controllerName);
		controllerAddress = 'file://' + applicationRoot + '/controllers/' + controllerName  + 'Controller.js';
		Jaxer.load(controllerAddress);
		
		if(window[controllerName + 'Controller']["beforeFilter"] != undefined)
			window[controllerName + 'Controller']["beforeFilter"]();
		
		window[controllerName + 'Controller'][actionName]();
	}
}