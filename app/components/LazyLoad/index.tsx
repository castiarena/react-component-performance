import React, {
    FC, useState, useEffect, Suspense, lazy,
} from 'react';
import Loading from '../Loading';
import { Phar } from '../Typography';

interface LazyLoadProps {
    importComponent: () => any;
}

const LazyLoading = () => (
    <Loading>
        <Phar align="center">loading...</Phar>
    </Loading>
);

const LazyLoad: FC<LazyLoadProps> = ({ importComponent }) => {
    const [isFront, setIsFront] = useState(false);
    const LazyComponent = lazy(importComponent);

    useEffect(() => {
        process.nextTick(() => setIsFront(() => !!globalThis.window));
    }, [isFront]);

    if (!isFront) {
        return <LazyLoading />;
    }

    return (
        <Suspense fallback={<LazyLoading />}>
            <LazyComponent />
        </Suspense>
    );
};

export default LazyLoad;
