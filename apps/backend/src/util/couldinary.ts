import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: 'foo',
  api_key: '',
  api_secret: '',
});

const uploadOnCloudinary = async (localFilePath: string) => {
  try {
    if(!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
    })
    return response;
  } catch(e) {
    fs.unlinkSync(localFilePath);
    return null;
  }
}

export { uploadOnCloudinary }