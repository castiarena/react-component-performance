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
    passengerRequestTime: number;
}

const passengerGateway = async (size: number): Promise<PassengerGatewayResponse> => {
    performance.mark('passengers-gateway-start');
    const data = await fetch(
        `https://api.instantwebtools.net/v1/passenger?size=${size}`,
    );
    const response = await data.json();
    performance.mark('passengers-gateway-end');
    performance.measure(
        'passenger-gateway-measure',
        'passengers-gateway-start',
        'passengers-gateway-end',
    );

    const [passengersMeasures] = performance.getEntriesByType('measure');
    return {
        passengers: response.data,
        pages: response.totalPages,
        passengersCount: response.totalPassengers,
        passengerRequestTime: passengersMeasures.duration,
    };
};

export default passengerGateway;
