import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = props => {
    let height = '220',
        width = '1060';
    // switch (props.screen) {
    //     case 'mobile': {
    //         height = '100'
    //         width = '400'
    //         break
    //     }
    //     case 'desktop': {
    //         height = '100'
    //         width = '1060'
    //         break
    //     }
    //     case 'large-screen': {
    //         height = '150'
    //         width = '1920'
    //         break
    //     }
    //     default: {
    //         height = '100'
    //         width = '1060'
    //         break
    //     }
    // }
    return (
        <ContentLoader
            height={height}
            width={width}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
            {...props}
        >
            <rect x="20" y="20" rx="5" ry="5" width="210" height="120" />
            <rect x="50" y="150" rx="5" ry="5" width="150" height="12" />
            <rect x="30" y="170" rx="5" ry="5" width="180" height="12" />
            <rect x="60" y="190" rx="5" ry="5" width="125" height="12" />

            <rect x="290" y="20" rx="5" ry="5" width="210" height="120" />
            <rect x="320" y="150" rx="5" ry="5" width="150" height="12" />
            <rect x="300" y="170" rx="5" ry="5" width="180" height="12" />
            <rect x="330" y="190" rx="5" ry="5" width="125" height="12" />

            <rect x="570" y="20" rx="5" ry="5" width="210" height="120" />
            <rect x="600" y="150" rx="5" ry="5" width="150" height="12" />
            <rect x="580" y="170" rx="5" ry="5" width="180" height="12" />
            <rect x="610" y="190" rx="5" ry="5" width="125" height="12" />

            <rect x="830" y="20" rx="5" ry="5" width="210" height="120" />
            <rect x="860" y="150" rx="5" ry="5" width="150" height="12" />
            <rect x="840" y="170" rx="5" ry="5" width="180" height="12" />
            <rect x="870" y="190" rx="5" ry="5" width="125" height="12" />
        </ContentLoader>
    );
};

const ImageList = () => (
    <React.Fragment>
        {Array(5)
            .fill('')
            .map((e, i) => (
                <Loader
                    screen="desktop"
                    key={i}
                    style={{ opacity: Number(2 / i).toFixed(1) }}
                />
            ))}
    </React.Fragment>
);

ImageList.metadata = {
    name: 'Gaurav Agarwal',
    github: 'gauravagarwal2704',
    description: 'List with image (rectangle/circle)',
    filename: 'ImageList',
};

export default ImageList;
