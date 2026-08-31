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
        data: SaveData,
      });

    res.status(201).json;
  } catch (error) {
    next();
  }
};
