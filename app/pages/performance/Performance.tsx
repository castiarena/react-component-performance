import React, { Profiler, useState, useRef } from 'react';
import Layout from '../../components/Layout';
import ButtonAnchor from '../../components/ButtonAnchor';
import { Phar, SubTitle, Title } from '../../components/Typography';
import TableTest from '../test/components/TableTest';
import usePassengers from '../test/gateway/usePassengers';
import Box from '../../components/Box';
import FixedBox from '../../components/FixedBox';
import usePerformanceMetrics from './usePerformanceMetrics';

const Performance = () => {
    const {
        passengers, handleLoadMorePassengers, fetchPassengers, passengerDuration,
    } = usePassengers();
    const [showPerformance, setShowPerformance] = useState(true);
    const {
        handlerRenderProfiler, name, phase, duration, time,
    } = usePerformanceMetrics();

    const handleClickFetchPassengers = async () => {
        await fetchPassengers();
    };

    const handleClickShowPerformance = () => {
        setShowPerformance(!showPerformance);
    };

    return (
        <Layout columns={1} gap={40}>
            <Title align="center" bold>
                Components performance measuring
            </Title>
            {showPerformance
            && (
                <FixedBox>
                    <SubTitle bold ref={name} />
                    <Phar ref={phase} />
                    <Phar ref={duration} />
                    <Phar ref={time} />
                    <Phar>
                        Last request duration:
                        {' '}
                        {passengerDuration}
                    </Phar>
                </FixedBox>
            )}
            <Layout columns={1} gap={10}>
                <Layout columns={2} gap={10}>
                    <Box fitted>
                        <Phar>With the next button you can fetch the data from the API</Phar>
                        <ButtonAnchor onClick={handleClickFetchPassengers}>
                            Fetch it!
                        </ButtonAnchor>
                    </Box>

                    <Box fitted>
                        <Phar>
                            And whit this button you can see the performance metrics of the  first,
                            render and the repainting on each update, by using React.Profiler
                            component.
                        </Phar>
                        <ButtonAnchor onClick={handleClickShowPerformance} kind="secondary">
                            Toggle performance tab
                        </ButtonAnchor>
                    </Box>
                </Layout>
                <Profiler id="Passengers" onRender={handlerRenderProfiler}>
                    <TableTest
                        items={passengers}
                        handleLoadMoreItems={handleLoadMorePassengers}
                    />
                </Profiler>
            </Layout>
        </Layout>
    );
};

export default Performance;
