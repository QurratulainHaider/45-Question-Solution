import { features } from "process";

function storeCarInfo(manufacturer: string, modelName:string, ...extrOption:{[key : string] :any } [] ) :Object
{

    const carInfo={
        manufacturer,
        modelName,
        ...Object.assign({},...extrOption)
    }

    return carInfo;
};

let answer=storeCarInfo('Honda', 'Civic',{color:'black'},{features: ['Navigation', 'Power window']})

console.log(answer);

