import { useRef, RefObject } from 'react';

const usePerformanceMetrics = () => {
    const name = useRef(null);
    const phase = useRef(null);
    const duration = useRef(null);
    const time = useRef(null);
    const setIfDefined = (ref: RefObject<HTMLElement>, value: string) => {
        if (!ref || !ref.current) {
            return;
        }
        // eslint-disable-next-line no-param-reassign
        ref.current.innerHTML = value;
    };

    const handlerRenderProfiler = (
        id: string,
        _phase: 'mount' | 'update',
        actualDuration: number,
        baseDuration: number,
        startTime: number,
        commitTime: number,
    ) => {
        setIfDefined(name, `Name: ${id}`);
        setIfDefined(phase, `Phase: ${_phase}`);
        setIfDefined(duration, `Duration: <br/> actual: ${actualDuration} <br/> base: ${baseDuration} `);
        setIfDefined(time, `Time: <br/> start: ${startTime} <br/> commit: ${commitTime} `);
    };

    return {
        handlerRenderProfiler,
        name,
        phase,
        time,
        duration,
    };
};

export default usePerformanceMetrics;
