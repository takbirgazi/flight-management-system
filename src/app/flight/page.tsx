"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

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

const FlightPage: React.FC = () => {
    const [flights, setFlights] = useState<Flight[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");

    useEffect(() => {
        fetchFlights();
    }, [searchTerm, origin, destination]);

    const fetchFlights = async () => {
        try {
            const response = await axios.get(
                `https://flight-back.vercel.app/api/v1/flight?searchTerm=${searchTerm}&origin=${origin}&destination=${destination}`
            );
            setFlights(response.data.data.data);
        } catch (error) {
            console.error("Error fetching flights:", error);
        }
    };
    return (
        <main className="bg-[#eef6ff] min-h-screen">
            <Navbar />
            <div className="p-4 container mx-auto">
                <h1 className="text-2xl font-bold mb-4">Flight Management</h1>

                {/* Search and Filter Section */}
                <div className="mb-6 flex flex-col md:flex-row gap-4">
                    <input
                        type="text"
                        placeholder="Search by Flight Number or Airline"
                        className="p-2 border rounded w-full md:w-1/3"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Filter by Origin"
                        className="p-2 border rounded w-full md:w-1/3"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Filter by Destination"
                        className="p-2 border rounded w-full md:w-1/3"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>

                {/* Flights Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border p-2">Flight Number</th>
                                <th className="border p-2">Airline</th>
                                <th className="border p-2">Origin</th>
                                <th className="border p-2">Destination</th>
                                <th className="border p-2">Date</th>
                                <th className="border p-2">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {flights.map((flight) => (
                                <tr key={flight._id} className="hover:bg-gray-50">
                                    <td className="border p-2">{flight.flightNumber}</td>
                                    <td className="border p-2">{flight.airline}</td>
                                    <td className="border p-2">{flight.origin}</td>
                                    <td className="border p-2">{flight.destination}</td>
                                    <td className="border p-2">{new Date(flight.date).toLocaleDateString()}</td>
                                    <td className="border p-2 text-center cursor-pointer font-semibold text-sm"><Link href={`/flight/${flight._id}`}>View Details</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
};

export default FlightPage;