import mongoose from "mongoose"



const connection = async() => {
    const URL=`mongodb+srv://deepkumarmishra1234:9563756663@curd-app.yeqzby7.mongodb.net/?retryWrites=true&w=majority`;

try{
 await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser: true});
 console.log('Database connected successfully');
}catch(error){
    console.log('Error while connecting to the database', error);
}
}
export default connection;




