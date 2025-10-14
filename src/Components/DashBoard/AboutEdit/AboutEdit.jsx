import React, { useState } from 'react';

const AboutEdit = () => {
    const [aboutData, setAboutData] = useState({
        title: 'About Our Company',
        description: 'We are a team of passionate developers who love to create amazing things. Our mission is to provide the best services to our clients and make a positive impact on the world.',
        imageUrl: 'https://via.placeholder.com/500x300'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAboutData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Updated About Data:', aboutData);
        alert('About section updated successfully!');
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Edit About Section</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={aboutData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            rows="6"
                            value={aboutData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="imageUrl" className="block text-gray-700 font-semibold mb-2">Image URL</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            value={aboutData.imageUrl}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AboutEdit;
