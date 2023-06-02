import axios from 'axios';

export const categoryMovies = async (API_URL) =>{
    try{
        let res = await axios.get(API_URL);
        return res.data;
    }catch(error){
        console.log('Error while calling massage', error.massage);
        return error.res.data;
    }
}