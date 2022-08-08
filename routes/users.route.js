const express = require('express'); // initialisation de l'application express
const {AddUser, FindAllUsers, FindSingleUser, UpdateUser, DeleteUser} = require('../controllers/users.controller.js'); // import des fonctions des controllers
const router = express.Router(); // initialisation du routeur

//Ajout d'un utilisateur
router.post('/users', AddUser)
// trouver tout les utilisateurs
router.get('/users', FindAllUsers)
// trouver un utilisateur par son id
router.get('/users/:id', FindSingleUser)
// modifier un utilisateur
router.put('/users/:id', UpdateUser)

//supprimer un utilisateur
router.delete('/users/:id', DeleteUser)

module.exports = router; // export du routeur pour l'utiliser dans l'application express