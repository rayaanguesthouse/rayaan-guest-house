import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const rooms = [
  {
    type: "Standard Room",
    price: "₹1800 per night",
    features: ["Wi-Fi", "Attached Bathroom", "Ceiling Fan", "Room Service"],
    image: "/images/standard-room.jpg",
  },
  {
    type: "Deluxe Room",
    price: "₹2500 per night",
    features: ["Wi-Fi", "Attached Bathroom", "Ceiling Fan", "Room Service", "Air Cooler"],
    image: "/images/deluxe-room.jpg",
  },
];

export default function RayaanGuestHouse() {
  return (
    <div className="p-4 space-y-6">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Rayaan Guest House</h1>
        <p className="text-lg text-gray-600">
          Zeal Lane, Near Mirak Shah, Shalimar, Srinagar (KMR)
        </p>
        <p className="text-sm">Bilal: 96222-32870 | Saroj: 96823-11216</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rooms.map((room, idx) => (
            <Card key={idx}>
              <img src={room.image} alt={room.type} className="w-full h-60 object-cover rounded-t-2xl" />
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">{room.type}</h3>
                <p className="text-sm text-gray-600">{room.price}</p>
                <ul className="list-disc list-inside text-sm">
                  {room.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Lobby with dining table (ground floor)</li>
          <li>Second lobby with dining table and cooler (first floor)</li>
          <li>Peaceful garden space (photo coming soon)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/images/gallery1.jpg" alt="Room" className="rounded-2xl" />
          <img src="/images/gallery2.jpg" alt="Room" className="rounded-2xl" />
          <img src="/images/gallery3.jpg" alt="Room" className="rounded-2xl" />
          <img src="/images/lobby-placeholder.jpg" alt="Lobby" className="rounded-2xl" />
          <img src="/images/garden-placeholder.jpg" alt="Garden" className="rounded-2xl" />
        </div>
      </section>

      <section className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">Book Your Stay</h2>
        <p>Call Bilal: 96222-32870 or Saroj: 96823-11216</p>
        <Button className="mt-2">Send Booking Inquiry</Button>
      </section>
    </div>
  );
}
