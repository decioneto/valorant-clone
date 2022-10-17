import mongoose from 'mongoose';

function DBConnect() {
    mongoose.connect(`${process.env.DB_URL}`).then(() => {
        console.log('🎈 Database Connected');
    });
}

export default DBConnect;
