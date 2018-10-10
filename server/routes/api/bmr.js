const BMI = require('../../models/BMI');
module.exports = (app) => {

app.post('/api/account/bmr', (req,res,next) => {

const { body } = req;

const {
  uid,
  bmi,
  bmr
  } = body;
  
  BMI.findByIdAndUpdate(
    req.params.uid,
    
    req.body,
    
    {new:true},
    
    (err,up) => {
    
    if (err) return res.status(500).send(err);
    return res.send(todo);
    
    }
    );
  
  
  const newBmi = new BMI();
  newBmi.uid = uid;
  newBmi.bmi = bmi;
  newBmi.bmr = bmr;
  newBmi.save((err, user) => {
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

});

}
