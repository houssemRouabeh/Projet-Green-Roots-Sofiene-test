import express from 'express'; // Importation du module Express


const router = express.Router(); // Création d'une nouvelle instance de router pour définir des routes


// Route principale (racine de l'application)
router.get('/', (req, res) => { 
  res.render('index');
});
// Définition de la route GET pour l'URL racine ('/')
// La méthode res.render() sert à rendre la vue 'index.ejs'
// Express va chercher le fichier 'index.ejs' dans le dossier spécifié dans app.js (dossier 'views')



// Exportation du routeur pour pouvoir l'importer dans d'autres fichiers (comme app.js)
export default router;
