const Pedo = require('../../models/Pedo');
module.exports = (app) => {

    app.post('/api/account/pedo', (req, res, next) => {

        const { body } = req;

        const {
            uid,
            cb,
            nos
        } = body;



        Pedo.find({ uid: uid }, function (err, user) {

            if (err) {
                res.send(err);
            }
            console.log(user);
            if (user && user.length) {

                Pedo.findOneAndUpdate({ uid: uid }, { $set: { cb: cb, nos: nos } }, { new: true }, function (err, doc) {
                    if (err) {

                    }
                    return res.send({
                        success: true,
                        message: "FUCK OFF"
                    })

                });

            }
            else {

                const newPedo = new Pedo();
                newPedo.uid = uid;
                newPedo.cb = cb;
                newPedo.nos = nos;
                newPedo.save((err, user) => {
                    if (err) {
                        return res.send({
                            success: false,
                            message: 'Error: Server error'
                        });
                    }
                    return res.send({
                        success: true,
                        message: 'Saved Successfully'
                    });
                });

            }
        })






    });

}
