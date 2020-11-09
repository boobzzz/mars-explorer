import { Loader } from '../UI/Loader/Loader';
import { NotFound } from '../UI/NotFound/NotFound';
import { Button } from '../UI/Button/RegularBtn/Button';
import { useImages } from './useImages';

import classes from './Gallery.module.css';

export const Gallery = ({ mission, params }) => {
    const images = useImages(mission, params)
    const { data, isLoading, isError, loadMore } = images

    if (isLoading) return <Loader size={200} color="#FC3D21" loading={isLoading} />

    if (isError) return <NotFound />

    return (
        <div className={classes.Outer}>
            {data.length === 0
            ? <h3>No images for the provided params</h3>
            : <div className={classes.Inner}>
                <div className={classes.Images}>
                    {data.map((image) =>
                        <a href={image.img_src} target="_blank" rel="noreferrer">
                            <img src={image.img_src} alt=""/>
                        </a>
                    )}
                </div>
                <Button title="LOAD MORE" clicked={loadMore} />
            </div>}
        </div>
    )
}