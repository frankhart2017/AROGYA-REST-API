const BMI = require('../../models/BMI');
module.exports = (app) => {

app.post('/api/account/bmr', (req,res,next) => {

const { body } = req;

const {
  uid,
  bmi,
  bmr
  } = body;
  
  let cond = {uid};
  
 BMI.findOneAndUpdate(cond, {$set:{bmi:bmi}}, {new:true}, function (err,doc) {
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
