import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';

export default function JobListing({
    id,
    title,
    type,
    description,
    location,
    salary,
}) {
    const [showFullDesc, setShowFullDesc] = useState(false);

    let desc = description;

    if (!showFullDesc) {
        desc = desc.substring(0, 90) + '...';
    }

    const buttonStyle = {
        cursor: 'pointer',
        margin: '0',
        display: 'inline-block',
        paddingLeft: '10px',
    };

    return (
        <div key={id} className='bg-white rounded-xl shadow-md relative'>
            <div className='p-4'>
                <div className='mb-6'>
                    <div className='text-gray-600 my-2'>{type}</div>
                    <h3 className='text-xl font-bold'>{title}</h3>
                </div>

                <div className='mb-5'>
                    {desc}
                    <button
                        style={buttonStyle}
                        className='text-indigo-500 mb-5 hover:text-indigo-600'
                        onClick={() =>
                            setShowFullDesc((prevState) => !prevState)
                        }
                    >
                        {showFullDesc ? 'Less' : 'More'}
                    </button>
                </div>

                <h3 className='text-indigo-500 mb-2'>{salary} / Year</h3>

                <div className='border border-gray-100 mb-5'></div>

                <div className='flex flex-col lg:flex-row justify-between mb-4'>
                    <div className='text-orange-700 mb-3'>
                        {/* <i className='fa-solid fa-location-dot text-lg'></i> */}
                        <FaMapMarker className='inline text-lg mb-1 mr-1 ' />
                        {location}
                    </div>
                    <a
                        href={`/job/${id}`}
                        className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
}
