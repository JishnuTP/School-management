const schoolModel = require("../models/schoolModel");

const signup =  async (req, res) => {
    try {
     console.log(req.body);
      const { email, school_name, password } = req.body;
  
      // Check if the email is already registered
      const existingSchool = await schoolModel.findOne({ email });
      if (existingSchool) {
        return res.status(409).json({ message: 'Email already registered' });
      }
  
      // Create a new user
      const school = new schoolModel({ email, school_name, password });
      console.log("aa",school);
      
      await school.save();
  
      return res.status(201).json({ message: 'Registration successful',success:true });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error',success:false });
     
    }
  };

  module.exports={
    signup
}