/*
init => Called when the module is instantiated,
start => Called when the module is started.
getScript => Returns a list of scripts the module requires to be loaded.
getStyles => Returns a list of stylesheets the module requires to be loaded.
getTranslations => Returns a map of translation files the module requires to be loaded.
getDom => return html to be displayed
getHeader => return header to display above the header.
getTemplate => Returns the template for the module which is used by the default getDom implementation.
getTemplateData => Returns the data to be used in the template.
notificationReceived => Called by the Magic Mirror core when a notification arrives.
nunjucksEnvironment => Returns the nunjucks environment for the current module.
socketNotificationReceived => Called when a socket notification arrives.
suspend => Called when the module is shown.
setData => set the module data
setConfig => Set the module config and combine it with the module defaults.
socket => Returns a socket object. If it doesn't exist, it's created.
file => Retrieve the path to a module file.
loadStyles =>  Load all required stylesheets by requesting the MM object to load the files.
loadScripts => Load all required scripts by requesting the MM object to load the files.
loadDependencies => Helper method to load all dependencies.
loadTranslations => Load all translations.
translate => Request the translation for a given key with optional variables and default value.
updateDom => Request an (animated) update of the module.
sendNotification => Send a notification to all modules.
sendSocketNotification => Send a socket notification to the node helper.
hide => Hide this module.
show => Show this module.



*/
