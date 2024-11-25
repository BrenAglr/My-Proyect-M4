//react
import React from "react";

// next
import Image from "next/image"; 

// imagenes
import celu from "@/assets/celular.png";
import compu from "@/assets/data.png";
import persona from "@/assets/persona.png";

export const About: React.FC = () => {
    return (
        <div className="flex flex-col gap-16 max-w-7xl mx-6 p-8 ">
            <div className="flex flex-col md:flex-row items-center gap-8" >
                <Image 
                    src={persona} 
                    alt="Imagen sobre nosotros" 
                    className="w-full md:w-1/2 h-64 object-contain rounded-lg"
                    width={600} 
                    height={300} 
                />
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">Who are we?</h1>
                    <p className="text-lg text-gray-700">
                        We are a company dedicated to offering the latest in technology to improve the lives of our customers. From electronic devices to innovative accessories, we select high-quality products to meet the needs of a constantly changing world. We are passionate about technology and work to make it accessible to everyone.
                    </p>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">What is our vision?</h1>
                    <p className="text-lg text-gray-700">
                        To be the benchmark for innovation and reliability in the tech industry, helping our clients stay at the forefront. We aim to be a company committed to technological advancement and creating experiences that transform everyday life.
                    </p>
                </div>
                <Image 
                    src={compu} 
                    alt="Imagen de visión" 
                    className="w-full md:w-1/2 h-64 object-contain rounded-lg"
                    width={600}
                    height={300}
                />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
                <Image 
                    src={celu} 
                    alt="Imagen de misión" 
                    className="w-full md:w-1/2 h-64 object-contain rounded-lg"
                    width={600}
                    height={300}
                />
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-bold mb-4">What is our mission?</h1>
                    <p className="text-lg text-gray-700">
                        Our mission is to provide technological solutions that enhance the well-being and productivity of our clients. Through personalized service and trustworthy products, we aim to simplify daily life and facilitate a connection with the future.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
