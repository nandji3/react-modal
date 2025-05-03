import React, { useState } from "react";
import axios from "axios"; // Make sure axios is imported

const ReactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        city: "",
    });

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        });
        if (file) {
            data.append("file", file);
        }

        console.log("Form Data:", data); // Logs form data

        try {
            const response = await axios.post("/api/submit-form", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Success:", response.data);
        } catch (error) {
            console.error("Upload failed:", error);
        }
    };

    return (
        <div className="p-8 max-w-md mx-auto bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
                User Information Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter First Name"
                        required
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Last Name"
                        required
                    />
                </div>

                {/* Gender */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                        Gender
                    </label>
                    <div className="flex items-center gap-6">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === "Male"}
                                onChange={handleChange}
                                className="mr-2"
                                required
                            />
                            Male
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === "Female"}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Female
                        </label>
                    </div>
                </div>

                {/* City */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                        City
                    </label>
                    <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    >
                        <option value="">Select a City</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Comilla">Comilla</option>
                        <option value="Narayanganj">Narayanganj</option>
                    </select>
                </div>

                {/* File Upload */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-600">
                        Upload File
                    </label>
                    <input
                        type="file"
                        accept=".jpg,.png,.pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="cursor-pointer w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReactForm;
