import { nanoid } from 'nanoid';
import crypto from 'crypto';

export const generateNanoId = (length)=>{
    return nanoid(length);
}

// /**
//  * Generates a Gravatar URL for a given email
//  * @param {string} email - User's email address
//  * @param {Object} options - Configuration options
//  * @param {string} options.defaultImage - Default image type (mp, identicon, monsterid, wavatar, retro, robohash, blank)
//  * @param {number} options.size - Image size in pixels
//  * @param {string} options.rating - Image rating (g, pg, r, x)
//  * @returns {string} - Gravatar URL
//  */
export const generateGravatarUrl = (email, options = {}) => {
    const defaultOptions = {
        defaultImage: 'mp',
        size: 200,
        rating: 'g'
    };
    
    const config = { ...defaultOptions, ...options };
    
    // Trim and lowercase the email before hashing
    const normalizedEmail = email.trim().toLowerCase();
    
    // Create MD5 hash of the email
    const emailHash = crypto.createHash('md5').update(normalizedEmail).digest('hex');
    
    // Construct Gravatar URL
    return `https://www.gravatar.com/avatar/${emailHash}?d=${config.defaultImage}&s=${config.size}&r=${config.rating}`;
};
