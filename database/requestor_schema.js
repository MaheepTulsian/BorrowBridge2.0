import mongoose from "mongoose";

const business  = new mongoose.Schema({
          companyName: {
               type: String,
          },
          website: {
               type: String,
          },
          imageUrl: {
               type: String,
          },
          about:{
               type: String,
               trim: true,
          },
          marketAnalysis:{
               type: String,
               trim: true,
          },
          tokenSupply:{
               type: Number,
          },   
          tokenValue:{
               type: Number,
          },
          date:{
               type: Date,
               default: Date.now
          },
          Q1details:{
               type: String,
          },
          Q2details:{
               type: String,
          },
          Q3details:{
               type: String,
          },
          Q4details:{
               type: String,
          }
});

const registerSchema = new mongoose.Schema({

          firstName: {
               type: String,
          },
          lastName: {
               type: String,
          },
          email: {
               type: String,
               unique: true,
          },
          phoneNo:{
               type: String,
          },
          profileUrl:{
               type: String,
          },
          businessList:[business]
});

const Register = mongoose.model('Register', registerSchema);
export default Register;