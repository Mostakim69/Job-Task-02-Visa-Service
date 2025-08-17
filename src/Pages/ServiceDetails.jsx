import { Button, message, Spin, Rate } from 'antd';
import { FaClock, FaMoneyBill, FaCheckCircle, FaArrowLeft, FaShareAlt } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const ServiceDetails = () => {
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [applying, setApplying] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetch("/services.json")
            .then(res => res.json())
            .then(data => {
                let foundService = null;
                data.forEach(category => {
                    const match = category.services.find(s => s.id === parseInt(id));
                    if (match) {
                        foundService = { ...match, category: category.title };
                    }
                });
                setService(foundService);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    const handleApply = () => {
        if (!service) return;
        setApplying(true);

        setTimeout(() => {  // Simulate server delay
            const existingApplications = JSON.parse(localStorage.getItem("applications")) || [];
            const alreadyApplied = existingApplications.some(app => app.id === service.id);

            if (alreadyApplied) {
                messageApi.warning("You have already applied for this service.");
                setApplying(false);
                return;
            }

            const newApplication = {
                id: service.id,
                title: service.title,
                category: service.category,
                date: new Date().toLocaleString()
            };

            localStorage.setItem("applications", JSON.stringify([...existingApplications, newApplication]));
            messageApi.success('Application Successful! Your application has been saved.', 3);
            setApplying(false);
            navigate("/my-application");
        }, 800);
    };

    if (loading) return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-[#b7c5eb] to-[#747e8f]'>
            <Spin size="large" />
        </div>
    );

    if (!service) return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#b7c5eb] to-[#747e8f]'>
            <h2 className='text-2xl font-bold text-white mb-4'>Service Not Found</h2>
            <Button onClick={() => navigate(-1)} className="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800">
                Go Back
            </Button>
        </div>
    );

    return (
        <div className='min-h-screen bg-gradient-to-r from-[#b7c5eb] to-[#747e8f] py-10 px-4 md:px-10'>
            {contextHolder}

            {/* Breadcrumb */}
            <div className='text-white mb-6 flex items-center gap-2'>
                <FaArrowLeft className='cursor-pointer hover:text-gray-200' onClick={() => navigate(-1)} />
                <span className='text-sm'>Home / Services / <span className='font-semibold'>{service.title}</span></span>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg flex flex-col lg:flex-row overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Image Section */}
                <div className="lg:w-1/2 relative">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/80 rounded-full p-2 cursor-pointer hover:bg-white">
                        <FaShareAlt />
                        <span className='text-sm font-medium'>Share</span>
                    </div>
                </div>

                {/* Details Section */}
                <div className="lg:w-1/2 p-8 flex flex-col gap-4">
                    <h1 className="text-3xl font-bold text-[#1C6EA4]">{service.title}</h1>
                    <p className="text-gray-700">{service.description}</p>

                    {/* Key info */}
                    <div className="flex gap-6 mt-4">
                        <div className='flex items-center gap-2 text-gray-700'>
                            <FaClock className='text-blue-500' /> {service.processingTime}
                        </div>
                        <div className='flex items-center gap-2 text-gray-700'>
                            <FaMoneyBill className='text-green-500' /> {service.price}
                        </div>
                    </div>

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                        <div className="mt-4">
                            <h3 className='font-semibold text-gray-800 mb-2'>Key Highlights</h3>
                            <ul className='flex flex-col gap-1 text-gray-600'>
                                {service.features.map((feat, idx) => (
                                    <li key={idx} className='flex items-center gap-2'><FaCheckCircle className='text-blue-500' /> {feat}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Rating */}
                    <div className="mt-4 flex items-center gap-2">
                        <Rate disabled defaultValue={4.5} allowHalf />
                        <span className="text-gray-500 text-sm">(120 Reviews)</span>
                    </div>

                    {/* Apply Button */}
                    <div className="mt-6 flex gap-4">
                        <Button
                            onClick={handleApply}
                            className="bg-[#2fcece] text-white px-4 py-2 rounded-md hover:bg-[#66d3d3] transition duration-300 font-medium text-sm cursor-pointer"
                            loading={applying}
                        >
                            Apply Now
                        </Button>
                        <Button
                            onClick={() => navigate(-1)}
                            className="bg-[#2fcece] text-white px-4 py-2 rounded-md hover:bg-[#66d3d3] transition duration-300 font-medium text-sm cursor-pointer"
                        >
                            Back
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
