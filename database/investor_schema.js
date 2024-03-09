import mongoose from "mongoose";

const investments  = new mongoose.Schema({
          companyName:{
               type: String,
          },
          investedTokens:{
               type: Number,
          },
          entryDate:{
               type: Date,
               default: Date.now
          },
          tokenValue:{
               type: Number,
          },
          status:{
               type: String,
               enum: ['active', 'exited'],
          },
          exitDate:{
               type: Date,
          }
});

const investorSchema = new mongoose.Schema({

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
          investmentsList:[investments]
});

const Investor = mongoose.model('Register', investorSchema);
export default Investor;