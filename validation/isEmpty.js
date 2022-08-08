// value = req.body ( ce que l'on va récupérer dans le body de la requete lors de la saisi de l'utilisateur)
const isEmpty = (value) => 
value === undefined || value === null 
|| typeof (value) === 'object' && Object.keys(value).length === 0 
|| typeof (value) === 'string' && value.trim().length === 0

module.exports = isEmpty;