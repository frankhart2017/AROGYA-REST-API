const User = require('../../models/User');
const bcrypt = require('bcrypt');
module.exports = (app) => {

    app.post('/api/account/edit', (req, res, next) => {

        const { body } = req;

        const {
            uid,
            Name,
            password,
            gender
        } = body;

        var _id = uid;

        User.findOneAndUpdate({ _id: _id }, { $set: { Name: Name, password: bcrypt.hashSync(password, bcrypt.genSaltSync(8), null), gender: gender } }, { new: true }, function (err, doc) {
            if (err) {

            }
            return res.send({
                success: true,
                message: "FUCK OFF"
            })

        });







    });

}
