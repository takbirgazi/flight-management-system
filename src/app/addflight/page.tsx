"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import Navbar from "@/components/Navbar/Navbar";

type FlightFormData = {
    flightNumber: string;
    airline: string;
    origin: string;
    destination: string;
    price: number;
    date: string;
    startTime: string;
    endTime: string;
    availableSeats: number;
};

const AddFlightPage: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FlightFormData>();

    const onSubmit: SubmitHandler<FlightFormData> = async (data) => {
        try {
            await axios.post("https://flight-back.vercel.app/api/v1/flight/create", {
                ...data,
                price: parseFloat(String(data.price)),
                availableSeats: parseInt(String(data.availableSeats)),
            });
            alert("Flight created successfully!");
            reset();
        } catch (error) {
            alert("Failed to create flight. Please try again.");
            console.error("Error creating flight:", error);
        }
    };

    return (
        <main className="bg-[#eef6ff] min-h-screen">
            <Navbar />
            <div className="flex items-center justify-center py-12">
                <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Flight</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="flightNumber" className="block text-gray-600 mb-2">
                                Flight Number
                            </label>
                            <input
                                type="text"
                                id="flightNumber"
                                {...register("flightNumber", { required: "Flight number is required" })}
                                className="w-full p-2 border rounded"
                            />
                            {errors.flightNumber && (
                                <p className="text-red-500 text-sm mt-1">{errors.flightNumber.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="airline" className="block text-gray-600 mb-2">
                                Airline
                            </label>
                            <input
                                type="text"
                                id="airline"
                                {...register("airline", { required: "Airline is required" })}
                                className="w-full p-2 border rounded"
                            />
                            {errors.airline && (
                                <p className="text-red-500 text-sm mt-1">{errors.airline.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="origin" className="block text-gray-600 mb-2">
                                Origin
                            </label>
                            <input
                                type="text"
                                id="origin"
                                {...register("origin", { required: "Origin is required" })}
                                className="w-full p-2 border rounded"
                            />
                            {errors.origin && (
                                <p className="text-red-500 text-sm mt-1">{errors.origin.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="destination" className="block text-gray-600 mb-2">
                                Destination
                            </label>
                            <input
                                type="text"
                                id="destination"
                                {...register("destination", { required: "Destination is required" })}
                                className="w-full p-2 border rounded"
                            />
                            {errors.destination && (
                                <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-600 mb-2">
                                Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                {...register("price", { required: "Price is required", valueAsNumber: true })}
                                className="w-full p-2 border rounded"
                            />
                            {errors.price && (
                                <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="date" className="block text-gray-600 mb-2">
                                Date
                            </label>
                            <input
                                type="datetime-local"
                                id="date"
                                {...register("date", { required: "Date is required" })}
                                className="w-full p-2 border rounded"
                            />
                            {errors.date && (
                                <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="startTime" className="block text-gray-600 mb-2">
                                Start Time
                            </label>
                            <input
                                type="datetime-local"
                                id="startTime"
                                {...register("startTime", { required: "Start time is required" })}
                                className="w-full p-2 border rounded"
                            />
                            {errors.startTime && (
                                <p className="text-red-500 text-sm mt-1">{errors.startTime.message}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="endTime" className="block text-gray-600 mb-2">
                                End Time
                            </label>
                            <input
                                type="datetime-local"
                                id="endTime"
                                {...register("endTime", { required: "End time is required" })}
                                className="w-full p-2 border rounded"
                            />
                            {errors.endTime && (
                                <p className="text-red-500 text-sm mt-1">{errors.endTime.message}</p>
                            )}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="availableSeats" className="block text-gray-600 mb-2">
                                Available Seats
                            </label>
                            <input
                                type="number"
                                id="availableSeats"
                                {...register("availableSeats", {
                                    required: "Available seats are required",
                                    valueAsNumber: true,
                                })}
                                className="w-full p-2 border rounded"
                            />
                            {errors.availableSeats && (
                                <p className="text-red-500 text-sm mt-1">{errors.availableSeats.message}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        >
                            Add Flight
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default AddFlightPage;