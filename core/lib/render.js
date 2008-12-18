/**
 * @author stewartmatheson
 */

 var Render = 
 {
 	json : function(view)
	{
		view = JSON.decode(view);
		Utils.foreach(view.view, function(item){
			var currentNode = document.createElement(item.tag);
			currentNode.innerHTML = item.content;
			document.body.appendChild(currentNode);
		});
	},
	
	html : function(view)
	{		
		//document.write(view);
		var myTemplateObj = Template.parseTemplate(view);
		return myTemplateObj.process(Request.data);
	}
 }