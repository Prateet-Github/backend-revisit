 import {v2 as cloudinary} from 'cloudinary';

 import fs from 'fs';

 cloudinary.config({ 
  cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
  api_key: 'process.env.CLOUDINARY_API_KEY', 
  api_secret: 'process.env.CLOUDINARY_API_SECRET'
});


const uploadOnCloudinary = async (localFilePath) => {
try {
  if (!localFilePath) return null;

  // Upload the file to Cloudinary

  const result = await cloudinary.uploader.upload(localFilePath, {
    resource_type: 'auto', // Automatically detect the resource type (image, video, etc
  })   

  console.log("File uploaded to Cloudinary:", result);

  return result; // Return the Cloudinary URL

} catch (error) {
  fs.unlink(localFilePath);
  return null; // Return null if there's an error
} 
}


cloudinary.v2.uploader
.upload("dog.mp4", {
  
  public_id: "my_dog",
})
.then(result=>console.log(result));


export { uploadOnCloudinary };