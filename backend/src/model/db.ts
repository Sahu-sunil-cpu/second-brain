import mongoose from "mongoose"




const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/secondBrain');
}

main()
.then((res) => console.log( "db",res))
.catch((err) => console.log("db", err));
