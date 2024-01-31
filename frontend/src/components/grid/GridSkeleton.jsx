import "./gridProperties.styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const GridSkeleton = ({ count = 4 }) => {
    return (
        <div className='properties-wrapper'>
            {Array(count)
                .fill(0)
                .map((_, index) => (
                    <div className='property' key={index}>
                        <div className='property__image'>
                            <Skeleton height={180} />
                        </div>
                        <div className='property__info'>
                            <Skeleton width={100} />
                            <Skeleton count={3} />

                            <Skeleton
                                count={3}
                                height={30}
                                containerClassName='flex'
                            />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default GridSkeleton;
