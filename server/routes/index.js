module.exports = (app) => {
    const authController = require('../controllers/Auth');
    
    app.post('/login', authController.login);
  };