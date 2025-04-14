import axios from 'axios'


export const uploadFile=async (file)=>{
    const  formData=new FormData()
    formData.append('file',file)
    formData.append('upload_preset',import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
    const url=`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`
    try {
        const response=await axios.post(url,formData)
        return {url:response.data.secure_url,id:response.data.public_id}
    } catch (error) {
        console.log(error);
        
    }
}

const url="https://backend-ekk0.onrender.com"


export const delPhoto= async (id) => {
  console.log(id);
  try {
    await axios.delete(url+'/post/'+id);
  } catch (error) {
    console.log(error);  
  }    
};