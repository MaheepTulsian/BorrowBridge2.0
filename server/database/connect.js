import mongoose  from 'mongoose';

//username and password to be added
const Bridge = 'Bridge';
const TBqXEvwN0NaV9NcG = 'TBqXEvwN0NaV9NcG';

const uri = `mongodb+srv://${Bridge}:${TBqXEvwN0NaV9NcG}@cluster0.kg9taog.mongodb.net/?retryWrites=true&w=majority`;

const connectingDatabase = async () => {
     try {
       await mongoose.connect(uri, {
         // Add this option if you're using a version of the MongoDB Node.js driver that requires it.
       });
       console.log('Database is connected');
     } catch (error) {
       console.error('Error connecting to the database:', error.message);
     }
};

connectingDatabase();

export default connectingDatabase;

