"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/app/loading";
import Navbar from "@/components/Navbar/Navbar";
import { useParams } from "next/navigation";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


interface Flight {
    _id: string;
    flightNumber: string;
    airline: string;
    origin: string;
    destination: string;
    date: string;
    startTime: string;
    endTime: string;
    price: number;
    availableSeats: number;
}



const SingleFlightPage = () => {
    const params = useParams();
    const id = params.id
    const [flight, setFlight] = useState<Flight | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchFlight();
    }, [id]);

    const fetchFlight = async () => {
        try {
            const response = await axios.get(
                `https://flight-back.vercel.app/api/v1/flight/${id}`
            );
            setFlight(response.data.data); // Assuming response.data.data contains the flight object
        } catch (error) {
            setError("Failed to fetch flight data");
            console.error("Error fetching flight:", error);
        }
    };

    if (error) {
        return (
            <div className="min-h-screen bg-[#eef6ff] flex items-center justify-center">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    if (!flight) {
        return <Loading />;
    }

    return (
        <main className="bg-[#eef6ff]">
            <Navbar />
            <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-3xl w-full backdrop-blur-3xl border shadow-lg rounded-lg p-6">
                    <div className="flex items-center mb-4 gap-3">
                        <Link title="Back" href="/flight" className="border rounded-md bg-[#ecf5fd] text-2xl" > <MdOutlineKeyboardArrowLeft /> </Link>
                        <h1 className="text-2xl font-bold text-gray-800">Flight Details</h1>
                    </div>
                    <div className="">
                        <div className="flex justify-between items-center border-b border-t py-2">
                            <span className="font-semibold text-gray-600">Flight Number:</span>
                            <span className="text-gray-800">{flight.flightNumber}</span>
                        </div>
                        <div className="flex justify-between items-center border-b py-2">
                            <span className="font-semibold text-gray-600">Airline:</span>
                            <span className="text-gray-800">{flight.airline}</span>
                        </div>
                        <div className="flex justify-between items-center border-b py-2">
                            <span className="font-semibold text-gray-600">Origin:</span>
                            <span className="text-gray-800">{flight.origin}</span>
                        </div>
                        <div className="flex justify-between items-center border-b py-2">
                            <span className="font-semibold text-gray-600">Destination:</span>
                            <span className="text-gray-800">{flight.destination}</span>
                        </div>
                        <div className="flex justify-between items-center border-b py-2">
                            <span className="font-semibold text-gray-600">Date:</span>
                            <span className="text-gray-800">{new Date(flight.date).toDateString()}</span>
                        </div>
                        <div className="flex justify-between items-center border-b py-2">
                            <span className="font-semibold text-gray-600">Start Time:</span>
                            <span className="text-gray-800">{flight.startTime}</span>
                        </div>
                        <div className="flex justify-between items-center border-b py-2">
                            <span className="font-semibold text-gray-600">End Time:</span>
                            <span className="text-gray-800">{flight.endTime}</span>
                        </div>
                        <div className="flex justify-between items-center border-b py-2">
                            <span className="font-semibold text-gray-600">Price:</span>
                            <span className="text-gray-800">${flight.price}</span>
                        </div>
                        <div className="flex justify-between items-center border-b py-2">
                            <span className="font-semibold text-gray-600">Available Seats:</span>
                            <span className="text-gray-800">{flight.availableSeats}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SingleFlightPage;
