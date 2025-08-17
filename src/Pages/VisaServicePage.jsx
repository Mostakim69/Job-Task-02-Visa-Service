import { Dropdown, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { DownOutlined } from '@ant-design/icons';

const VisaServicePage = () => {
    const [services, setServices] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortOrder, setSortOrder] = useState("default");

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error("Failed to fetch services:", err));
    }, []);

    const filteredServices = services
        .filter(category => !selectedCategory || category.category === selectedCategory)
        .map(category => ({
            ...category,
            services: category.services
                .filter(service => service.title.toLowerCase().includes(searchText.toLowerCase()))
                .sort((a, b) => {
                    if (sortOrder === "low-to-high") {
                        return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
                    } else if (sortOrder === "high-to-low") {
                        return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
                    }
                    return 0; // Default: no sorting
                })
        }));

    return (
        <div className="bg-[linear-gradient(to_right,#b7c5eb,#747e8f)] mx-auto px-4 py-12 fira-sans min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-600 tracking-tight">
                Visa Services
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-10">
                <input
                    type="text"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    placeholder="Search services..."
                    className="border border-gray-200 bg-white rounded-full px-5 py-2 w-full lg:w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="border border-gray-200 rounded-lg px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full lg:w-64"
                >
                    <option value="">All Categories</option>
                    {services.map(cat => (
                        <option key={cat.category} value={cat.category}>
                            {cat.category}
                        </option>
                    ))}
                </select>
                <select
                    value={sortOrder}
                    onChange={e => setSortOrder(e.target.value)}
                    className="border border-gray-200 rounded-lg px-4 py-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full lg:w-64"
                >
                    <option value="default">Sort by: Default</option>
                    <option value="low-to-high">Sort by: Low to High</option>
                    <option value="high-to-low">Sort by: High to Low</option>
                </select>
            </div>

            {filteredServices.length > 0 ? (
                filteredServices.map(service => (
                    <div key={service.category} className="mb-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {service.services.map(s => (
                                <div
                                    key={s.id}
                                    className="bg-white border border-gray-200 rounded-lg text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                >
                                    <img
                                        src={s.image}
                                        className="w-full h-40 object-cover rounded-t-lg"
                                        alt={s.title}
                                    />
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-[#2fcece] mb-2 leading-6 line-clamp-2">
                                            {s.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm font-medium mb-2 leading-5">
                                            Processing Time: {s.processingTime}
                                        </p>
                                        <p className="text-[#2fcece] text-base font-semibold mb-4 leading-6">
                                            Price: {s.price}
                                        </p>
                                        <Link to={`/service/${s.id}`}>
                                            <button className="w-full bg-[#2fcece] text-white px-4 py-2 rounded-md hover:bg-[#66d3d3] transition duration-300 font-medium text-sm cursor-pointer">
                                                View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <h2 className="text-center text-gray-500 text-xl">No Category Found</h2>
            )}
        </div>
    );
};

export default VisaServicePage;