import mongoose from 'mongoose';


const DB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {

        });
        console.log('MongoDB connected successfully');
        console.log('You are good to go');
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit process with failure
    }
};

export default DB;