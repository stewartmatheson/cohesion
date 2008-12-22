/**
 * @author stewartmatheson
 */
var dba = 
{
	connect : function()
	{
		Config.database = Utils.loadJSON('file://' + applicationRoot +  '/config/database.json');		
		Jaxer.DB.MySQL.Connection.constructor(Config.database.development);
	},
	
	
	insert : function(data)
	{
	}
}
