import userModel from "../model/userModel.js";

const homeController = (req,res) => {
    try {
        res.render('ind.ejs');
    } catch (error) {

        console.log(error.message)
    }
  
};


const ContactUserController = async (req, res) => {
    try {
        const data = await userModel({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message
        })
        if(data){
            await data.save()
            console.log("user saved successfully");
        }
        res.render('ind.ejs');
        
    } catch (error) {
        console.log(error.message)
    }

}

export{homeController, ContactUserController}; 


//render used for ejs files