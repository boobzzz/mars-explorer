import { useState, useEffect } from 'react';
import queryString from 'query-string';
import { RiArrowUpCircleLine } from "react-icons/ri";
import { useRovers } from './useRovers';
import { Header } from '../../components/Header/Header';
import { Checkbox } from '../../components/UI/Checkbox/Checkbox';
import { Button } from '../../components/UI/Button/Button';
import featureVideo from '../../assets/videos/feature.mp4';

import classes from './Homepage.module.css';

export const Homepage = () => {
    const rovers = useRovers()
    const { data, isLoading, isError } = rovers

    const changeHandler = () => {}

    const sendParams = () => {}

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
                                {data.map((rover) =>
                                    <div key={rover.id} className={classes.Rover}>
                                        <div className={classes.RoverLabel}>
                                            <div>
                                                <span>{rover.name}</span>
                                                <span>{`${rover.max_sol} sols on mars`}</span>
                                            </div>
                                            <div className={classes.Arrow}>
                                                <RiArrowUpCircleLine />
                                            </div>
                                        </div>
                                        <div className={classes.Camera}>
                                            <ul>Choose camera:
                                                {rover.cameras.map(r =>
                                                    <li key={r.id}>
                                                        <Checkbox
                                                            id={r.id}
                                                            name={r.name}
                                                            changed={changeHandler}
                                                            checked={r.checked} />
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                        <div className={classes.Sol}>
                                            <label htmlFor="sol">Sol <i>(Max. {rover.max_sol})</i>:</label>
                                            <input type="text" id="sol"/>
                                        </div>
                                        <div className={classes.Button}>
                                            <Button title="EXPLORE" clicked={sendParams} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}