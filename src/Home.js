import CarItem from './CarItem';
import { useState } from 'react';
import CreateCar from './CreateCar';
import { cars as carsData } from './folderData/data-car';

function Home (){
const [cars,setCars]= useState(carsData)  

 return(
    <>
    <div className="container">
        <h1>Car Catalog</h1>
         <CreateCar setCars={setCars}/>
         <div className="Catalog">
         {cars.map(car=><CarItem key={car.id} car={car} />)}
         </div>
      
    </div>
    </>
 )

}

export default Home