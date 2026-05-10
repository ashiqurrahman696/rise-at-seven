import React from 'react';
import { RxArrowTopRight } from 'react-icons/rx';

const CTAButton = () => {
    return (
        <div className="px-8 text-center max-md:w-full">
            <a
                href="#"
                className="group inline-flex items-center gap-3 text-black bg-white px-8 py-4 rounded-full text-sm tracking-tighter font-medium transition max-md:w-full hover:rounded-xl"
            >
                <span>Explore Our Work</span>
                <RxArrowTopRight />
            </a>
        </div>
    );
};

export default CTAButton;