interface Airline {
    _id: number;
    name: string;
    logo: string;
    slogan: string;
    // eslint-disable-next-line camelcase
    head_quaters: string;
    website: string;
    established: string;
}

export interface Passenger{
    _id: string,
    name: string,
    trips: number,
    airline: Airline;
}

interface PassengerGatewayResponse {
    passengers: Passenger[];
    pages: number;
    passengersCount: number;
}
const passengerGateway = async (size: number, page: number): Promise<PassengerGatewayResponse> => {
    const data = await fetch(
        `https://api.instantwebtools.net/v1/passenger?size=${size}&page=${page}`,
    );
    const response = await data.json();
    return {
        passengers: response.data,
        pages: response.totalPages,
        passengersCount: response.totalPassengers,
    };
};

export default passengerGateway;
