
import { Dropdown, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { DownOutlined } from '@ant-design/icons';

const VisaServicePage = () => {
    const [services, setServices] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error("Failed to fetch services:", err));
    }, [])

    // console.log(services);

    const filteredServices = services.filter(category =>
        !selectedCategory || category.category === selectedCategory
    )
        .map(category => ({
            ...category,
            services: category.services.filter(service =>
                service.title.toLowerCase().includes(searchText.toLowerCase())
            )
        }));





    return (
        <div className="max-w-6xl mx-auto px-4 py-10 fira-sans">
            <h1 className="text-3xl font-bold text-center mb-6 text-[#1C6EA4]">
                Visa Services
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-8">
                
                <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                >
                    <option value="">All Categories</option>
                    {services.map(cat => (
                        <option key={cat.category} value={cat.category}>
                            {cat.category}
                        </option>
                    ))}
                </select>

                {/* Search Input */}
                <input
                    type="text"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    placeholder="Search service..."
                    className="border border-gray-300 bg-gray-100 rounded-full px-5 py-2 w-full lg:w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
            </div>

            {filteredServices.length > 0 ? (
                filteredServices.map(service => (
                    <div key={service.category} className="mb-12">
                        {/* Category Name */}
                        <h2 className="text-2xl font-semibold text-center mb-6 text-[#1C6EA4]">
                            {service.category}
                        </h2>

                        {/* Service Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.services.map(s => (
                                <Link to={`/service/${s.id}`} key={s.id}>
                                    <div

                                        className="bg-gray-100 rounded-md p-6 text-center hover:shadow-md hover:scale-105 transition duration-300"
                                    >

                                        <img src={s.image} className='w-full h-50 object-cover rounded-md mb-2' alt="service_image" />
                                        <h3 className="text-xl font-bold mb-2 text-[#1C6EA4]">{s.title}</h3>
                                        <p className="text-gray-600">Processing Time: {s.processingTime}</p>
                                        <p className="text-gray-800 font-semibold mt-2">Price: {s.price}</p>

                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <h2 className='text-center text-gray-500 text-xl'>No Category Found</h2>
            )}
        </div>
    );
};

export default VisaServicePage;