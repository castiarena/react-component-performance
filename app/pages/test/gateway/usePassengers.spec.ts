import { renderHook, act } from '@testing-library/react-hooks';
import usePassengers from './usePassengers';

const mockGatewayResult = {
    passengers: [{}, {}],
    passengersCount: 1000,
    passengerRequestTime: 12,
};

jest.mock('./passenger.gateway', () => jest.fn()
    .mockImplementationOnce(() => new Promise((resolve) => resolve({
        ...mockGatewayResult,
        passengersCount: 600,
    })))
    .mockImplementationOnce(() => new Promise((resolve) => resolve({
        ...mockGatewayResult,
        passengersCount: 0,
    })))
    .mockImplementation(() => new Promise((resolve) => resolve(mockGatewayResult))));

describe('Use Passengers hook', () => {
    it('should have the properties on the result', () => {
        const { result } = renderHook(() => usePassengers());

        expect(result.current).toHaveProperty('fetchPassengers');
        expect(result.current).toHaveProperty('handleLoadMorePassengers');
        expect(result.current).toHaveProperty('passengerDuration');
        expect(result.current).toHaveProperty('passengers');
    });

    it('should update when calls fetchPassengers', async () => {
        const { result } = renderHook(() => usePassengers());

        await act(async () => {
            await result.current.fetchPassengers();
        });
        expect(result.current.passengerDuration).toBe(mockGatewayResult.passengerRequestTime);
        expect(result.current.passengers).toBe(mockGatewayResult.passengers);
    });

    it('should update when calls handleLoadMorePassengers', async () => {
        const { result } = renderHook(() => usePassengers());

        await act(async () => {
            await result.current.fetchPassengers();
            await result.current.handleLoadMorePassengers();
        });

        expect(result.current.passengerDuration).toBe(mockGatewayResult.passengerRequestTime);
        expect(result.current.passengers).toBe(mockGatewayResult.passengers);
    });

    it('should update when calls twice handleLoadMorePassengers', async () => {
        const { result } = renderHook(() => usePassengers());

        await act(async () => {
            await result.current.fetchPassengers();
            await result.current.handleLoadMorePassengers();
            await result.current.handleLoadMorePassengers();
        });

        expect(result.current.passengerDuration).toBe(mockGatewayResult.passengerRequestTime);
        expect(result.current.passengers).toBe(mockGatewayResult.passengers);
    });
});
