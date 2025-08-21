import asyncHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  console.log("Incoming request body:", req.body);

  res.status(200).json({
    success: true,
    message: "User registered successfully",
    data: req.body, // just to check what Postman sends
  });
});

export { registerUser };