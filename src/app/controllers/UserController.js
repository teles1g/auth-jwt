const Yup = require('yup');

const User = require('../models/User');

class UserController {
  async show(req, res) {
    const user = await User.findByPk(req.userId);

    return res.json(user);
  }
  
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    }); 

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Complete all fields correctly' });
    }

    const userExist = await User.findOne({ where: { email: req.body.email } });

    if (userExist) {
      return res.status(400).json({ error: 'This user already exist.' });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name, 
      email,
    });
  }
}

module.exports = new UserController();
