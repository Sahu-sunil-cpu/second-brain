import mongoose from "mongoose"




const main = async () => {
    await mongoose.connect('mongodb+srv://ironman97158_db_user:2pYY9vS6iRfOmup5@cluster0.ssgtbza.mongodb.net');
   // await mongoose.connect('mongodb://localhost:27017/secondBrain')
}

main()
.then((res) => console.log( "db",res))
.catch((err) => console.log("db", err));
