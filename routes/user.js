const express=require("express"); 
const{handleGetAllUsers, getUserById, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser}=require("../controllers/user")
const router=express.Router();
 router.route("/")
 .get(handleGetAllUsers)
 .post(handleCreateNewUser)


 router.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)


router.post("/",handleCreateNewUser)


 module.exports=router;