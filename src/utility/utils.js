export const extractUrlAndId=(cloudinaryUrl)=>{
    const lastSlashIndex=cloudinaryUrl.lastIndexOf('/')
    const url=cloudinaryUrl.substring(0,lastSlashIndex)
    const id=cloudinaryUrl.substring(lastSlashIndex+1)
    return {url,id}
}
export const sanitizeHTML=(html)=>{
    const doc=new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent || ''
}

export const truncatedStory = (description) => {
    const maxLength = 40; // A maximális hossz 40 karakter
    const sanitizedDescription = sanitizeHTML(description);
    if (sanitizedDescription.length <= maxLength) return sanitizedDescription;
  
    const truncated = sanitizedDescription.slice(0, sanitizedDescription.lastIndexOf(" ", maxLength));
    return truncated || sanitizedDescription.slice(0, maxLength) + "...";
  };
  
  