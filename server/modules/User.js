import mongoose  from "mongoose";
import bcrypt from"bcrypt";
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: { type: String, required: true, unique: true, lowercase: true,trim: true},
    password:{type:String,rquired:true},
    role:{type:String,required:true,enum:["admin","User"], default:"User"},
    isactive:{type:Boolean,default:false}
},{timestamps:true})

//hasshing password
userSchema.pre("save",async function (next) {
    if(!this.isModified("password"))return next();
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    
})

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("Users",userSchema);
