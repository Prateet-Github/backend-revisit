import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import ApiResponse from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {

// get user data from frontend
// validation not emppty 
// check if user already exists username email
// check for images and avatar
// upload images to cloudinary
// create user object - craete entry iin db
// remove password and referch token from response
// check for user creation success
// return response 

const { username, email, fullName, password} = req.body;

console.log(email)

if (fullName === '' || username === '' || email === '' || password === '') {
  throw new ApiError(400, 'All fields are required');
     }

    const existedUSer =  User.findOne({ $or: [{ username }, { email }] })
     
    if (existedUSer) {
      throw new ApiError(409, 'Username or email already exists');
    }

    const avatarLocalPath = req.files?.avatar[0].path 
    const coverImageLocalPath = req.files?.coverImage[0].path 

    if (!avatarLocalPath){
      throw new ApiError(400, 'Avatar image is required');
    }

    const avatar = await  uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath) 

    if (!avatar){
      throw new ApiError(500, 'Failed to upload avatar image');
    }

   const user =  User.create({
      username:username.toLowerCase(),
      email,
      fullName,
      avatar:avatar.url,
      coverImage:coverImage.url|| '',
      password
    })

   const createdUser =  User.findById(user._id).select(
    '-password -refreshToken'); 

    if (!createdUser) {
        throw new ApiError(500, 'User creation failed');
      }
   
      return res.status(201).json(
        new ApiResponse(201, 'User registered successfully', createdUser)
      );


});

export { registerUser };