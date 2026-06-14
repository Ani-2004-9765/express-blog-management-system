const bcrypt = require('bcryptjs');
const userModel = require('../model/User');
const blodModel = require('../model/Blog');



const register = async (req, resp) => {
    try {

        const { name, email, password } = req.body;

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({ // save karne ke liye
            name,
            email,
            password: hashPassword
        });
        resp.redirect("/login");
    } catch (error) {
        console.log("Error:", error);
    }
}

// const login= async (req,resp)=>{
//     try {
//         const {name,password}=req.body;
//         const user= await userModel.findOne({name});
//     if (user && (await bcrypt.compare(password, user.password))) {
//             req.session.name=name
//             resp.redirect("/dashboard")
//         } else {
//             resp.redirect("/login")
//         }
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
const login = async (req, resp) => {
    try {
        const { name, password } = req.body;


        const user = await userModel.findOne({ name });


        if (user) {
            const match = await bcrypt.compare(password, user.password);
            console.log("Password match:", match);

            if (match) {
                req.session.name = name;
                console.log("Redirecting to dashboard...");
                return resp.redirect("/dashboard");
            }
        }

        console.log("Login failed");
        resp.redirect("/login");

    } catch (error) {
        console.log(error);
    }
}
const dashboard= async(req,resp)=>{
    if (!req.session.name) {
        resp.redirect("/login")
    } else {
        const blogs = await blodModel.find();
        resp.render("dashboard",{ name:req.session.name , blogs}) //data bhi diya 
    }
}

const logout=async (req,resp)=>{
    req.session.destroy(()=>{
        resp.redirect("/login")

    })
}

module.exports={register,login,dashboard,logout}