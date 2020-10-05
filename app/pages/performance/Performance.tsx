import React, { Profiler, useState, useRef } from 'react';
import Layout from '../../components/Layout';
import ButtonAnchor from '../../components/ButtonAnchor';
import { Phar, SubTitle, Title } from '../../components/Typography';
import TableTest from '../test/components/TableTest';
import usePassengers from '../test/gateway/usePassengers';
import Box from '../../components/Box';
import FixedBox from '../../components/FixedBox';
import usePerformanceMetrics from './usePerformanceMetrics';

const isDevelopment = process.env.NODE_ENV === 'development';

const Performance = () => {
    const {
        passengers,
        handleLoadMorePassengers,
        fetchPassengers,
        passengerDuration,
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
            {showPerformance && isDevelopment && (
                <FixedBox>
                    <SubTitle bold ref={name} />
                    <Phar ref={phase} />
                    <Phar ref={duration} />
                    <Phar ref={time} />
                    <Phar>
                        Last request duration:
                        {passengerDuration}
                    </Phar>
                </FixedBox>
            )}
            <Layout columns={1} gap={10}>
                {!isDevelopment && (
                    <Layout columns={2} gap={10} fitted responsive>
                        <Box>
                            <SubTitle>Performance viewing</SubTitle>
                            <Phar>
                                In order to see the performance metrics running you should follow
                                the steps on the repository and run it locally, on development mode.
                            </Phar>
                            <ButtonAnchor
                                href="https://github.com/castiarena/react-component-performance"
                                target="_blank"
                            >
                                Repo
                            </ButtonAnchor>
                        </Box>
                        <Box shadow>
                            <SubTitle>Direct download</SubTitle>
                            <Phar>Download here the repository via https</Phar>
                            <ButtonAnchor
                                href="https://github.com/castiarena/react-component-performance.git"
                                download
                                kind="secondary"
                            >
                                Repo
                            </ButtonAnchor>
                        </Box>
                    </Layout>
                )}
                {isDevelopment && (
                    <>
                        <Layout columns={2} gap={10} responsive>
                            <Box fitted>
                                <Phar>
                                    With the next button you can fetch the data from the API
                                </Phar>
                                <ButtonAnchor onClick={handleClickFetchPassengers}>
                                    Fetch it!
                                </ButtonAnchor>
                            </Box>

                            <Box fitted>
                                <Phar>
                                    And whit this button you can see the performance metrics of the
                                    first, render and the repainting on each update, by using
                                    React.Profiler component.
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
                    </>
                )}
            </Layout>
        </Layout>
    );
};

export default Performance;
