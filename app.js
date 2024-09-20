import express from "express"; // Importation d'Express
import * as dotenv from "dotenv"; // Importation de dotenv pour les variables d'environnement
import routes from "./src/routers/router.js"; // Importation des routes
import path from "path"; // Importation du module path pour gérer les chemins de fichiers
import { fileURLToPath } from "url"; // Pour utiliser __filename et __dirname en ES modules

// Charger les variables d'environnement
dotenv.config();

// Résoudre __dirname et __filename dans un module ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Définir le port (depuis .env ou par défaut 3000)
const port = process.env.PORT || 3000;

// Créer l'application Express
const app = express();

// Définir le dossier contenant les fichiers statiques (CSS, images, JS compilé, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Configurer EJS comme moteur de templates
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

// Utiliser les routes importées
app.use(routes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
