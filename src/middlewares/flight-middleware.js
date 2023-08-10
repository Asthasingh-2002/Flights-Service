const { StatusCodes} = require('http-status-codes');

const { ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next){
    if(!req.body.flightNumber){
        ErrorResponse.message = 'Something went wrong while creating Flight';
        
        ErrorResponse.error = new AppError(['flightNumber  not found in  the incomeing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
               
    }
    if(!req.body.airplaneId){
        ErrorResponse.message = 'Something went wrong while create Flight ';
        
        ErrorResponse.error = new AppError(['airplaneId not found in  the incomeing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
               
    }

    if(!req.body.departureAirportId){
        ErrorResponse.message = 'Something went wrong while creating Flight';
        
        ErrorResponse.error = new AppError([' departureAirportId not found in  the incomeing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
               
    }
    if(!req.body.arrivalAirportId){
        ErrorResponse.message = 'Something went wrong while creating Flight';
        
        ErrorResponse.error = new AppError([' arrivalAirportId not found in  the incomeing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
               
    }
    if(!req.body.ArrivalTime){
        ErrorResponse.message = 'Something went wrong while creating Flight';
        
        ErrorResponse.error = new AppError([' ArrivalTime not found in  the incomeing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
               
    }
    if(!req.body.departureTime){
        ErrorResponse.message = 'Something went wrong while creating Flight';
        
        ErrorResponse.error = new AppError([' departureTime not found in  the incomeing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
               
    }
    if(!req.body.price){
        ErrorResponse.message = 'Something went wrong while creating Flight';
        
        ErrorResponse.error = new AppError([' price not found in  the incomeing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
               
    }
    if(!req.body.totalSeates){
        ErrorResponse.message = 'Something went wrong while creating Flight';
        
        ErrorResponse.error = new AppError([' totalSeates not found in  the incomeing request in the correct form'],StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
               
    }
    next();
}

function validateUpdateSeatsRequest(req, res, next) {
    if(!req.body.seats) {
        ErrorResponse.message = 'Something went wrong while creating flight';
        ErrorResponse.error = new AppError(['seats not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
}

module.exports={
validateCreateRequest,
validateUpdateSeatsRequest
}