// const express = require('express');
// const router = express.Router();

// // Route pour récupérer les données depuis l'autre programme
// router.get('/social', async (req, res) => {
//     try {
//         // Effectuez ici votre logique pour récupérer les données
//         // depuis l'autre programme (par exemple, une API externe)
//         const data = await getDataFromOtherProgram();

//         // Répondez avec les données au format JSON
//         res.json(data);
//     } catch (error) {
//         console.error('Erreur lors de la récupération des données :', error);
//         res.status(500).json({ error: 'Erreur lors de la récupération des données' });
//     }
// });

// module.exports = router;

//----------------------------------------------------------------

const express = require('express');
const router = express.Router();
const socialController = require('../controllers/social');

// Route pour récupérer les données JSON
router.get('/social', socialController.social);

module.exports = router;