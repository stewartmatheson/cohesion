/**
 * @author stewartmatheson
 */

 var Render = 
 {
 	json : function(view)
	{
		Utils.foreach(view.view, function(item){
			var currentNode = document.createElement(item.tag);
			currentNode.innerHTML = item.content;
			document.body.appendChild(currentNode);
		});
	}
 }