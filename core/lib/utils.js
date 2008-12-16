/**
 * @author stewartmatheson
 */

 var Utils = 
 {

	foreach : function(list, execute)
	{;
		for(var i = 0; i < list.length; i++)
			execute(list[i]);
	},
	
	capitalize : function(word)
	{
		var firstLetter = word.substr(0,1);
		var rest = word.substr(1, word.length -1);
		return firstLetter.toUpperCase() + rest;
	},
	
	debug : function(value)
	{
		document.write('Cohesion Debugger<br />' + value.toString);
	},
	
	loadFile : function(path)
	{
		Jaxer.load('file://' + applicationRoot + path);
	},
	
	fileBase : 'file://' + applicationRoot
 }
