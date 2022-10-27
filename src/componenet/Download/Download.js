import React from 'react';
import { FaDownload } from "react-icons/fa";
import ReactToPdf from 'react-to-pdf'

const Download = () => {

    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [4, 2]
    };
    return (
        <div >
            {/* <FaDownload></FaDownload>
            <h5>Download</h5> */}
            <div ref={ref} className="card lg:card bg-base-100shadow-xl">
                <figure><img src='' alt="" /></figure>

            </div>
            <ReactToPdf targetRef={ref} filename="Course-Details.pdf">
                {({ toPdf }) => (
                    <button className='rounded-md m-5 py-2 px-3 bg-green-400' onClick={toPdf}>Generate pdf<FaDownload></FaDownload></button>
                )}
            </ReactToPdf>

        </div>
    );
};

export default Download;