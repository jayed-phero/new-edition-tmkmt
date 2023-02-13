import React from 'react';
import CountUp from 'react-countup';

const ShortInfo = () => {

    const shortDetails = [
        {
            icon: <i class="fa-solid fa-chalkboard-user"></i>,
            number: "300",
            title: "Teachers of TMKMT",
            desc: "Kingster University was established by John Smith in 1920 for the public benefit and it is recognized."
        },
        {
            icon: <i class="fa-solid fa-school"></i>,
            number: "79",
            title: "Classrooms Number",
            desc: "Kingster University was established by John Smith in 1920 for the public benefit and it is recognized."
        },
        {
            icon: <i class="fa-solid fa-graduation-cap"></i>,
            number: "11900",
            title: "Students In TMKMT",
            desc: "Kingster University was established by John Smith in 1920 for the public benefit and it is recognized."
        },
        {
            icon: <i className="fa-solid fa-building-columns"></i>,
            number: "1985",
            title: "Founded Year",
            desc: "Kingster University was established by John Smith in 1920 for the public benefit and it is recognized."
        },
    ]
    return (
        <div className='bg-regal-indigo'>
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-16 py-20  px-5  max-w-7xl mx-auto mt-20'>
                {
                    shortDetails.map((details, i) =>
                        <div key={i} className=''>
                            <p className='text-5xl text-regal-green py-3'>{details.icon}</p>
                            <h3 className='text-white text-2xl font-semibold pb-3'>{details.title}</h3>
                            <h3 className='text-gray-400  '>{details.desc}</h3>
                            <h1 className='border-regal-green border-2 w-32 py-2 rounded-xl mt-5 flex items-center justify-center text-3xl font-bold text-white '>
                                <CountUp end={details.number} duration={5} enableScrollSpy />
                            </h1>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ShortInfo;



