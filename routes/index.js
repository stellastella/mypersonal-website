module.exports = (app) => {
    const authController = require('../controllers/Auth');
    app.get('/', (req, res) => {
      res.sendfile('./view/index.html');
    });
    
    app.get('/login', (req, res) => {
      res.sendfile('./view/login.html');
    });
  
    app.get('/register', (req, res) => {
      res.send('Register');
    });
    
    app.post('/login', authController.login);
  };