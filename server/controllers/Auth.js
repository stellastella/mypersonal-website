class Auth {
  static login (req, res) {
    console.log(req.body);
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;
    res.send({firstName: firstName, lastName: lastName, email: email, password: password});
  }
}

module.exports = Auth;