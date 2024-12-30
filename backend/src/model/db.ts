import mongoose from "mongoose"




const main = async () => {
    await mongoose.connect('mongodb+srv://sunilsahu21633:sunil04345@secondbrain.alydi.mongodb.net/?retryWrites=true&w=majority&appName=secondbrain');
   // await mongoose.connect('mongodb://localhost:27017/secondBrain')
}

main()
.then((res) => console.log( "db",res))
.catch((err) => console.log("db", err));
