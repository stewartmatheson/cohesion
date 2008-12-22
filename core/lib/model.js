/**
 * @author stewartmatheson
 */
 
var Model = 
{
	constructor : function()
	{
		var models = Jaxer.Dir.grep(applicationRoot +  '/models/', "^.*\.js$", false);	
		Utils.foreach(models, function(model){
			Jaxer.load('file:///' + model.path);
			var currentModelName = Utils.getClassName(model.leaf);
		});
	} 
}
