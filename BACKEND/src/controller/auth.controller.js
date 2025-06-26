import wrapAsync from "../utils/tryCatchWrapper";

export const register_user = wrapAsync( async(req, res) => {
    const{name,email,password} = req.body;
    const user = await User.findOne({email});
    if(user){
        throw new Error("User already exists");
    }
    const newUser = new User({
        name,
        email,
        password,
    });
    await newUser.save();
    res.status(201).json({
        success: true,
        message: "User created",
    });
})

export const login_user = wrapAsync( async(req, res) => {
    res.send("Login");
})