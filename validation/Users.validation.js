//contraintes de validation pour les utilisateurs (crud)
const isEmpty = require('./isEmpty.js');
const validator = require('validator');

module.exports = function ValidateUser(data) {

    let errors = {}; // initialisation du tableau d'erreurs

    //validation des champs
    data.Email = !isEmpty(data.Email) ? data.Email : '';
    data.Lastname = !isEmpty(data.Lastname) ? data.Lastname: '';
    data.Firstname = !isEmpty(data.Firstname) ? data.Firstname : '';
    data.Age = !isEmpty(data.Age) ? data.Age : '';

    // traitement des erreurs

    if(!validator.isEmail(data.Email)){
        errors.Email = "Format e-mail incorrect";
    }

    if(validator.isEmpty(data.Email)){
        errors.Email = "Email est requis";
    }
    if(validator.isEmpty(data.Lastname)){
        errors.Lastname = "Le nom est requis";
    }
    if(validator.isEmpty(data.Firstname)){
        errors.Firstname = "Le prénom est requis";
    }
    if(validator.isEmpty(data.Age)){
        errors.Age = "L'age est requis";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}