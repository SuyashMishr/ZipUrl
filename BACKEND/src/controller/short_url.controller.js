import { getShortUrl } from "../dao/short_url.js";
import { createShortUrlWithoutUser } from "../services/short_url.service.js";
import { generateNanoId } from "../utils/helper.js";
import wrapAsync from "../utils/tryCatchWrapper.js";
export const createShortUrl = wrapAsync (async(req, res, ) => {
   
        const {url} = req.body;
        const shortUrl = await createShortUrlWithoutUser(url);
        
        res.status(200).json({shortUrl : process.env.APP_URL + shortUrl});

   
})


export const redirectFromShortUrl = wrapAsync (async(req, res, next) => {
   
        const {id} = req.params;
        const url = await getShortUrl(id);
        if(url) {
            res.redirect(url.full_url);
        } else {
            res.status(404).send("Not Found");
        }
})