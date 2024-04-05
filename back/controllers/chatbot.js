// Définissez un point d'extrémité pour recevoir les messages du chatbot
exports.chatbot = (req, res) => {
    // Exécutez un script Python pour traiter le message
    const { spawn } = require('child_process');
    const pythonProcess = spawn('python', ['./python_script.py']);
    console.log("test")
    // Écoutez les données de sortie du processus Python
    pythonProcess.stdout.on('data', (data) => {
        const response = data.toString(); // Récupérez la réponse du script Python
        console.log(response);
    });
};