const Users = require("../models/users.models.js");
const ValidateUser = require("../validation/Users.validation.js");

const AddUser = async (req, res) => {
  //res.send('Ajout reussi') // test de l'ajout d'un utilisateur
  // console.log(req.body) // test de de la requete dans la console
  const { errors, isValid } = ValidateUser(req.body); // validation de la requete
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      //Vérification si l'utilisateur existe déjà
      await Users.findOne({ Email: req.body.Email }).then(async (exist) => {
        if (exist) {
          errors.Email = "Cet utilisateur existe déjà";
          res.status(404).json(errors);
        } else {
          await Users.create(req.body);
          res.status(201).json({ message: "Utilisateur ajouté avec succes" });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
const FindAllUsers = async (req, res) => {
  //res.send('Liste des utilisateurs renvoyé')
  try {
    const data = await Users.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
const FindSingleUser = async (req, res) => {
  //res.send('Affichage d un utilisateur ok')
  try {
    const data = await Users.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
const UpdateUser = async (req, res) => {
  //res.send('Mise a jour de l utilisateur ok')
  const { errors, isValid } = ValidateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Users.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};
const DeleteUser = async (req, res) => {
  //res.send('Suppression de l utilisateur ok')
  try {
    await Users.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "Utilisateur supprimé avec succes" });
  } catch (error) {
    console.log(error.message);
  }
};

//export des fonctions
module.exports = {
  AddUser,
  FindAllUsers,
  FindSingleUser,
  UpdateUser,
  DeleteUser,
};
