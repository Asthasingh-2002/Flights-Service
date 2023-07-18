const { AirplaneRepository } = require('../repositories');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        const airpalne =await airplaneRepository.create(data);
        return airplane;
    }catch(error){
        throw error;
    }
} 

module.export ={
    createAirplane
}