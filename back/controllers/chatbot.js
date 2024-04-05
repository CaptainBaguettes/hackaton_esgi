exports.chatbot = (req, res) => {
    const { spawn } = require('child_process');
    const pythonProcess = spawn('python', ['./python_script.py']);
    console.log("test")
    
    pythonProcess.stdout.on('data', (data) => {
        const response = data.toString();
        console.log(response);
    });
};