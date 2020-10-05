import { useState } from 'react';
import passengerGateway, { Passenger } from './passenger.gateway';

const usePassengers = () => {
    const [renderedPassengers, setRenderedPassenger] = useState([]);
    const [quantity, setQuantity] = useState(500);
    const [total, setTotal] = useState(0);
    const [duration, setDuration] = useState(0);

    const fetchPassengers = async () => {
        const {
            passengers, passengersCount, passengerRequestTime,
        } = await passengerGateway(quantity);
        setRenderedPassenger(passengers);
        setTotal(passengersCount);
        setDuration(passengerRequestTime);
        return new Promise<Passenger[]>((resolve) => resolve(passengers));
    };

    const handleLoadMorePassengers = async () => {
        if (quantity >= total) {
            return new Promise<Passenger[]>((resolve) => resolve(renderedPassengers));
        }
        setQuantity(quantity + 100);
        return fetchPassengers();
    };

    return {
        passengers: renderedPassengers,
        passengerDuration: duration,
        handleLoadMorePassengers,
        fetchPassengers,
    };
};

export default usePassengers;
