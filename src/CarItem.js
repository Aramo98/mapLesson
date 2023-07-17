function CarItem({car}) {
    return(
        <>
        <div key={car.id} className="block">
            <div className="backImage">
                <img src={car.image} alt="" />
            </div>
            <h2>{car.name}</h2>
            <p>{car.price}</p>
        </div>
        </>
    )
}

export default CarItem