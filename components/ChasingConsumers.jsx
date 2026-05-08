import React from 'react';
import Marquee from 'react-fast-marquee';

const ChasingConsumers = () => {
    return (
        <div className="bg-[#efeeec] text-black">
            <Marquee pauseOnHover={false} speed={50}>
                <div className="flex items-center text-[7em] md:text-[9em] py-3 font-bold">
                    <h2>Chasing Consumers</h2>
                    <img src="https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750859361&s=8df7953c8590164f1507ce725ef56bd7" className="size-28 rounded-xl" />
                    <h2>Not Algorithms</h2>
                    <img src="https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846538&s=b3a59f30ae95b2098230edc2137e02f7" className="size-28 rounded-xl" />
                </div>
            </Marquee>
        </div>
    );
};

export default ChasingConsumers;