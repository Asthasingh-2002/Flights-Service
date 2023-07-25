const  {StatusCodes} = require('http-status-codes');

const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error'); 
const { error } = require('../utils/common/error-response');

const cityRepository = new CityRepository();

async function createCity(data){
  try{
        const city =await cityRepository.create(data);
        return city;
    }catch(error){
        console.log(error);
        
         if(error.name=='SequelizeValidationError' || 'SequelizeUniqueConstraintError'){
            let explanation = [];
            error.errors.forEach((err) => {
               explanation.push(err.message); 
            });
            // console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
         }
         throw new AppError('Cannot create a new City object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id){
    try {
        const city = await cityRepository.destroy(id);
        return city;
    } catch (error) {
        if(error.statusCode ==StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to delete is not present',error.statusCode);
        }
        throw new AppError('Cannot destroy data of city', StatusCodes.INTERNAL_SERVER_ERROR);
    } 
}

async function updateCity(id, data) {
    try {
        
        const city = await cityRepository.update(id, data);
        return city;
    }
    catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The city you request to Update is not present', error.statusCode)
        }
        throw new AppError('Cannot update data of the city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
        
 }

module.exports ={
 createCity,
 destroyCity,
 updateCity
}