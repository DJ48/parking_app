/**
 * Controller for parking/exit
*/

const constants = require("../utils/constants");
const Parking = require("../models/parkingLot.model");
const Rate = require("../models/rate.model");
const Area = require("../models/area.model");



exports.park = async(req,res) =>{


    const userObjToBeStoredInDB = {
        parkingLotName : "L1",
        areaName : "L1A1",
    }

    /**
     * Insert new user to the DB
     */
    try{
        const userCreated = await Area.create(userObjToBeStoredInDB);
        console.log("Parking Created ", userCreated);

        /**
         * Return the response
         */

        
        res.status(201).send("success");
    }
    catch(err){
        console.error("Error while creating new user: ", err.message);
        res.status(500).send({
            message : "some internal error while inserting new user"
        });
    }
}



/**
 * Controller for Signin
 */

exports.signin = async(req,res) =>{
    //Search the user if it exists
    try{
        var user = await User.findOne({userId : req.body.userId});
    }catch(err){
        console.log("Error Occured While logging")
    }
    if(user == null){
        return res.status(400).send({
            message : "Failed ! User doesn't exist."
        })
    }

    /**
     * Check if user is Approved
     */
    if(user.userStatus != constants.userStatus.approved){
        return res.status(200).send({
            message : "Can't allow the login as the User is still not approved"
        })
    }

    //User is existing, so now we will do the password matching

    const isPasswordVaild = bcrypt.compareSync(req.body.password, user.password);

    if(!isPasswordVaild){
        return res.status(401).send({
            message : "Invalid Password"
        })
    }

    const token = jwt.sign({id : user.userId},authConfig.secret,{expiresIn:600} )

    res.status(200).send({
        name : user.name,
        userId : user.userId,
        email : user.email,
        userType : user.userType,
        userStatus : user.userStatus,
        accessToken : token
    })
}