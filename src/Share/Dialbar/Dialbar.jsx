import React from 'react';
import { MdAddCall, MdOutlineWatchLater } from 'react-icons/md';

const Dialbar = () => {
    return (
        <div className="fab">
            {/* a focusable div with tabIndex is necessary to work on all browsers. role="button" is necessary for accessibility */}
            <div tabIndex={0} role="button" className="btn btn-lg btn-circle btn-info"><MdAddCall /></div>

            {/* close button should not be focusable so it can close the FAB when clicked. It's just a visual placeholder */}
            <div className="fab-close">
                <span className="btn btn-circle btn-lg btn-error">✕</span>
            </div>

            {/* buttons that show up when FAB is open */}
            <div className="card card-border bg-base-100 w-96">
                <div className="card-body">
                    <h2 className="card-title font-bold">TechLabs</h2>
                    <p>তোমার কোনো হেল্প লাগলে আমাদেরকে জানাও!</p>
                    <div className='flex items-center space-x-2'>
                        <a href={"tel:+8801311271610"}>013xxxxxxx145</a>,
                        <a href={"tel:+8801311271610"}>013xxxxxxx145</a>
                    </div>
                    <div className='flex items-center'>
                        <p><MdOutlineWatchLater /></p>
                        <p>Available : Sat - Thu, 10:00 AM to 7:00 PM</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dialbar;