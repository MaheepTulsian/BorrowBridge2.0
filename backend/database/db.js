import mongoose from 'mongoose';


const DB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {

        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exit process with failure
    }
};

export default DB;