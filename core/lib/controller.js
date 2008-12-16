/**
 * @author stewartmatheson
 */
var Controller = 
{
	
	load : function(controllerName, actionName)
	{
		this.controllerName =  Utils.capitalize(controllerName);
		this.actionName = actionName;
		
		Utils.loadFile('/controllers/' + this.controllerName  + 'Controller.js');
		
		if(window[this.controllerName + 'Controller']["beforeFilter"] != undefined)
			window[this.controllerName + 'Controller']["beforeFilter"]();
		
		window[this.controllerName + 'Controller'][actionName]();
		
		this.render();
	},
	
	render : function()
	{
		//first we need to find the right template. Lets check if there is json
		jsonTemplate = Utils.fileBase + '/views/'  + this.controllerName + '/' + this.actionName + '.json';
		
		if (Jaxer.File.exists(jsonTemplate))
		{
			currentView = Jaxer.File.read(jsonTemplate);
			currentView = JSON.decode(currentView);
			Render.json(currentView);
		}	
	} 
}
