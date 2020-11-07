import { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useRovers } from './useRovers';
import { Header } from '../../components/Header/Header';
import { Rover } from '../../components/Rover';
import featureVideo from '../../assets/videos/feature.mp4';

import classes from './Homepage.module.css';

export const Homepage = () => {
    const rovers = useRovers()
    const { data, isLoading, isError } = rovers

    if (isLoading) return <div>...loading data</div>

    if (isError) return <div>...error loading data</div>

    return (
        <>
            <Header />
            <main>
                <section>
                    <div className={classes.Video}>
                        <video autoPlay={true} muted loop>
                            <source src={featureVideo} type="video/mp4"/>
                            Your browser doesn't support HTML5 video tag.
                        </video>
                    </div>
                    <div className={classes.Wrapper}>
                        <div className={classes.Header}>
                            <h1>Explore the Mysteries of the <i>Red Planet</i></h1>
                            <h3>Experience Mars with the high resolution images of its surface, taken by three rover missions and collected by NASA</h3>
                        </div>
                        <div className={classes.RoverContainer}>
                            <h3>Choose rover mission to begin exploring</h3>
                            <div className={classes.InnerContainer}>
                                {data.map((item) =>
                                    <Rover key={item.id} rover={item} />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}