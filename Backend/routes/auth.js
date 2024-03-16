const express = require('express');
const User = require('../models/User')
const {body,validationResult} = require('express-validator');

const router = express.Router();

//create user

router.post('/',[
    body('name','enter a valid name ').isLength({min:5}),
    body('email','enter a valid email').isEmail(),
    body('password','password must be atleast 5 char ')
],(req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        User.create({
          name:req.body.name,
          email:req.body.email,
          password:req.body.password
        }).then(user => res.json(user));
      res.send(req.body)
    //    res.json(obj)
})


module.exports = router