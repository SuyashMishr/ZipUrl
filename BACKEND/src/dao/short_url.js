import urlSchema from "../models/short_url.model.js"
import { ConflictError } from "../utils/errorhandler.js";
export const saveShortUrl = async (shortUrl, longUrl, userId)=>{
    try{
        const newUrl = new urlSchema({
            full_url: longUrl,
            short_url: shortUrl
        });
        if(userId){
            newUrl.user_id = userId;
        }
        await newUrl.save();
    }
    catch(err){
        console.log(err);
        //Check for duplicate key error
        if (err.code === 11000 && err.keyPattern && err.keyPattern.short_url) {
            throw new ConflictError(`Short URL '${shortUrl}' already exists. Please try again.`);
        }
        throw new Error(err); // Rethrow the error to be handled by the controller
    }
}

export const getShortUrl = async (shortUrl)=>{
    return await urlSchema.findOneAndUpdate({short_url:shortUrl},{$inc:{clicks:1}})
}