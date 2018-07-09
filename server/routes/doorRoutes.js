const mongoose = require ('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const Record = mongoose.model('records')
module.exports = app => {
  app.post('/api/doors',requireLogin, async (req,res) => {
    const {title,subject} = req.body;     // this requires app.use(bodyParser.json()) in server index.js?
    console.log("Title:"+title+" subject:"+subject);
    const record = new Record({title,subject});
    // See c8e3cfd in original repo, or lesson 136
    console.log("$$$$$==Ready to Save Door==$$$$$$")
    try {
      await record.save();
      //const user = await req.user.save();
      console.log("Save finished");
      res.send(req.user);
    }
    catch (err) {
        console.log("Catch " + JSON.stringify(err))
        res.status(422).send(err);
    }

  })
}
