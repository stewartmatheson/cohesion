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
	
	getClassName : function(fileName)
	{
		var fileNameParts = fileName.split(".");
		return this.capitalize(fileNameParts[0]);
	},
	
	debug : function(value)
	{
		document.write('Cohesion Debugger<br />' + value.toString);
	},
	
	loadFile : function(path)
	{
		Jaxer.load('file://' + applicationRoot + path);
	},
	
	loadJSON : function(path)
	{
		var data;
		if(Jaxer.File.exists(path))
		{
   			data = Jaxer.File.read(path);
    		data = JSON.decode(data);
		}
		
		return data;
	},
	
	fileBase : 'file://' + applicationRoot
 }
