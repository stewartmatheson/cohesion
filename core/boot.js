/**
 * @author stewartmatheson
 */
var applicationRoot = '/Users/stewartmatheson/Documents/Aptana Studio/cohesion';
Jaxer.load('file://' + applicationRoot +  '/core/lib/utils.js');
Jaxer.load('file://' + applicationRoot +  '/core/lib/dispatch.js');
Jaxer.load('file://' + applicationRoot +  '/core/lib/render.js');
Jaxer.load('file://' + applicationRoot +  '/core/lib/request.js');
Jaxer.load('file://' + applicationRoot +  '/core/lib/controller.js');
Jaxer.load('file://' + applicationRoot +  '/core/lib/template.js');
Jaxer.load('file://' + applicationRoot +  '/core/lib/model.js');
Model.constructor();
dispatch.run();