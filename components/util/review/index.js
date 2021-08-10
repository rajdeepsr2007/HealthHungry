import baseURL from "../../../baseURL";
export const addReview = async (review,user) => {
    const {title,rating,description,images,recipe} = review;

    if( title.value==='' || description.value==='' || rating===0 )
        throw new Error('Review cannot be empty')
    if( images.length > 5 )
        throw new Error('Upload maximum 5 images')

    const fd = new FormData();
    fd.append('title',title.value);fd.append('description',description.value);fd.append('rating',rating);
    fd.append('recipe',recipe);fd.append('user',user);
    for( const image of images )
        fd.append('images',image);
    const response = await fetch(`${baseURL}/api/review/add`,{
        method : 'POST',
        body:fd
    });
    const data = await response.json();
    console.log(data);
    if( response.ok ){
        return data;
    }else{
        throw new Error(data.message || 'Review upload error')
    }
}