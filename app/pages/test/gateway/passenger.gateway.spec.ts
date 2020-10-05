import passengerGateway from './passenger.gateway';

describe('Passenger Gateway', () => {
    it('should return 10 passengers', async () => {
        const passengerQuantity = 10;
        const mockPassengers = Array.from({ length: passengerQuantity }).map((i) => i);
        delete (window as any).fetch;
        delete (window as any).performance;

        const performance = {
            mark: jest.fn(),
            measure: jest.fn(),
            getEntriesByType: jest.fn(() => [
                { duration: 0 },
            ]),
        };

        Object.defineProperty(window, 'performance', {
            configurable: true,
            enumerable: true,
            value: performance,
            writable: true,
        });

        const mockFetch = {
            json: jest.fn(() => ({
                data: mockPassengers,
            })),
        };
        const fetch = jest.fn(() => new Promise((resolve) => resolve(mockFetch)));

        Object.defineProperty(window, 'fetch', {
            configurable: true,
            enumerable: true,
            value: fetch,
            writable: true,
        });

        const { passengers } = await passengerGateway(passengerQuantity);
        expect(passengers).toHaveLength(passengerQuantity);
    });
});
