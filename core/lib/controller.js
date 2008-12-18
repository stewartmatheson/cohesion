/**
 * @author stewartmatheson
 */
var Controller = 
{
	renderModes : ['json', 'html'],
	
	load : function(controllerName, actionName)
	{
		this.controllerName =  Utils.capitalize(controllerName);
		this.actionName = actionName;
		
		Utils.loadFile('/controllers/' + this.controllerName  + 'Controller.js');
		
		if(window[this.controllerName + 'Controller']["beforeFilter"] != undefined)
			window[this.controllerName + 'Controller']["beforeFilter"]();
		
		window[this.controllerName + 'Controller'].set = this.set;		
		window[this.controllerName + 'Controller'][actionName]();
		
		this.renderAction();
		this.renderLayout();
	},
	
	renderAction : function()
	{
		Utils.foreach(this.renderModes, function(mode){

			var template = Utils.fileBase + '/views/'  + this.controllerName + '/' + this.actionName + '.' + mode;	
					
			if (Jaxer.File.exists(template))
			{
				currentView = Jaxer.File.read(template);
				var result = Render[mode](currentView);
				Request.action.output = result;
				return;
			}
			
		});
	},
	
	renderLayout : function()
	{
		Utils.foreach(this.renderModes, function(mode){
			
			var layout = Utils.fileBase + '/views/application.' + mode;
			if (Jaxer.File.exists(layout))
			{
				currentLayout = Jaxer.File.read(layout);
				Request.data.content_for_layout = Request.action.output;
				var result = Render[mode](currentLayout);
				document.write(result);
				return;
			}
			
		});
			
	},
	
	set : function(templateName, value)
	{
		Request.data[templateName] = value;
	}
}