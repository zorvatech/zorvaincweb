import User from "../modules/User.js";

export const userRegistration = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });
    user = new User({ name, email, password, role });
    const saveData = await user.save();
    res
      .status(201)
      .json({
        success: true,
        message: "User registered successfully",
        data: saveData,
      });

    res.status(201).json;
  } catch (error) {
    next();
  }
};


export const  getAllUsers = async (req , res , next ) => {
    try {
        const user = await User.find().select('-password');
        res.status(201).json({ success: true, count: user.length , message: "User finded successfully",data: user})
    } catch (error) {
        next(error)
    }
}


export const getUserByID = async (req , res ,next ) => {
  try {
    const {id} = req.params;
    const user = await User.findById(id).select('-password')
    if(!user) return res.status(404).json({success: false , message: "User not found"})
    res.status(200).json({success: true , message: "User finded successfully" , data: user})
  } catch (error) {
    next(error);
  }
}


export const updateUserByID = async (req , res , next) =>{
  try{
    const {id } = req.params;
    const {name , email , password , role  } = req.body;
    const user = await User.findByIdAndUpdate(id, {name, email, password, role },{new:true,runValidators: true}).select('password');
    if(!user) return res.status(404).json({success: false , message: "User not found"})
    res.status(200).json({success: true , message: "User updated successfully" , data: user})
  } catch (error) {
    next(error)
  }
}
