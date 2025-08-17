import { Button, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const ServiceDetails = () => {
    const [service, setService] = useState(null);
    const [messageApi, contextHolder] = message.useMessage();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => {
                // data is an array of categories
                let foundService = null;
                data.forEach(category => {
                    const match = category.services.find(s => s.id === parseInt(id));
                    if (match) foundService = match;
                });
                setService(foundService);
            })
            .catch(err => console.error(err));
    }, [id])

    const handleApply = () => {
        const existingApplications = JSON.parse(localStorage.getItem("applications")) || [];

        const alreadyApplied = existingApplications.some(app => app.id === service.id);

        if (alreadyApplied) {
            messageApi.warning("You have already applied for this service.");
            return;
        }
        const newApplication = {
            id: service.id,
            title: service.title,
            category: service.category,
            date: new Date().toISOString()
        };
        // Save the new application to localStorage
        localStorage.setItem("applications", JSON.stringify([...existingApplications, newApplication]));
        messageApi.info('Apply Succesful. Your application has been saved.');
        navigate("/my-application");
    };
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl hover:shadow-md pt-10 fira-sans flex flex-col lg:flex-row items-center gap-8">
                {/* Service Card */}
                <div>
                    <img src={service?.image} alt="" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-[#1C6EA4] mb-4">{service?.title}</h1>
                    <p className="text-gray-700 mb-4">{service?.description}</p>
                    <p className="text-gray-600 mb-2"><strong>Processing Time:</strong> {service?.processingTime}</p>
                    <p className="text-gray-800 font-semibold mb-6"><strong>Price:</strong> {service?.price}</p>


                    {/* Apply Button */}
                    <>
                        {contextHolder}
                        <Button
                            onClick={handleApply}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition duration-300"
                        >
                            Apply Now
                        </Button>
                    </>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;