import { Loader } from '../../components/UI/Loader/Loader';
import { NotFound } from '../../components/UI/NotFound/NotFound';
import { Header } from '../../components/Header';
import { Rover } from '../../components/Rover';
import { useRover } from '../../hooks/useRover';
import featureVideo from '../../assets/videos/feature.mp4';
import classes from '../../styles/Homepage.module.css';

export const Homepage = () => {
    const rovers = useRover();
    const { data, isLoading, isError } = rovers;

    if (isLoading) {
        return <Loader
                    size={200}
                    color="#FC3D21"
                    loading={isLoading} />
    }

    if (isError) return <NotFound />

    return (
        <>
            <Header />
            <main>
                <section>
                    <div className={classes.Wrapper}>
                        <div className={classes.Desc}>
                            <h1>Explore the Mysteries of the <i>Red Planet</i></h1>
                            <h3>Experience Mars with the high resolution images of its surface, taken by four rover missions and collected by NASA</h3>
                        </div>
                        <span>Choose rover mission to begin exploring</span>
                        <div className={classes.RoverList}>
                            {data.map((item) =>
                                <Rover key={item.id} rover={item} />
                            )}
                        </div>
                    </div>
                </section>
            </main>
            <div className={classes.Video}>
                <video autoPlay={true} muted loop>
                    <source src={featureVideo} type="video/mp4"/>
                    Your browser doesn't support HTML5 video tag.
                </video>
            </div>
        </>
    )
}