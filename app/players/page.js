'use client';
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import HomeImg from "../../public/image.png";
import Model from '../../app/components/Model';
import Skeleton from '../../app/components/Skeleton'

export default function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState('');
    const [gender, setGender] = useState('');

    useEffect(() => {
        fetch('/api/players')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const router = useRouter();

    function handleBackButton() {
        router.push("/home");
    }

    const filteredData = data.filter((value) => {
        const matchesSearch = value.name.toLowerCase().includes(type.toLowerCase());
        const matchesGender = gender ? value.gender.toLowerCase() === gender.toLowerCase() : true;
        return matchesSearch && matchesGender;
    });

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    return (
        <div
            className="bg-cover bg-center h-full min-h-screen"
            style={{ backgroundImage: `url(${HomeImg.src})` }}
        >
            <div className="text-white px-4">
                <h1 className="text-5xl font-extrabold text-center pb-5">PLAYERS</h1>
                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center pb-5">
                    <select
                        className="rounded-xl p-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition text-black w-full sm:w-auto"
                        value={gender}
                        onChange={handleGenderChange}
                    >
                        <option value="">All</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <input
                        className="text-white  rounded-xl p-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/20 transition w-full sm:w-1/3 md:w-1/4 lg:w-56"
                        type="text"
                        placeholder="Search players"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </div>

                {loading ? (

                    <div className="flex flex-wrap gap-3 pb-5 justify-center">

                        {Array.from({ length: 10 }, (_, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
                                <Skeleton />
                            </div>
                        ))}
                    </div>

                ) : (
                    <ul className="flex flex-wrap gap-3 pb-5 justify-center">
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <Card
                                    className="px-6 py-3 text-lg font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg hover:bg-white/20 transition w-full sm:w-1/2 md:w-1/4 lg:w-1/5"
                                    shadow="sm"
                                    key={index}
                                    isPressable
                                    onPress={() => console.log("item pressed")}
                                >
                                    <CardBody className="overflow-hidden">
                                        <Image
                                            shadow="sm"
                                            radius="full"
                                            width="100%"
                                            alt={item.title}
                                            className="object-cover"
                                            src={item.src}
                                        />
                                    </CardBody>
                                    <CardFooter className="flex flex-col text-small justify-between">
                                        <p className="pb-3 text-lg font-extrabold">{item.name}</p>
                                        <Model
                                            name={item.name}
                                            position={item.position}
                                            height={item.height}
                                            weight={item.weight}
                                            pointsPerGame={item.stats.pointsPerGame}
                                            reboundsPerGame={item.stats.reboundsPerGame}
                                            assistsPerGame={item.stats.assistsPerGame}
                                            status={item.status}
                                        />
                                    </CardFooter>
                                </Card>
                            ))
                        ) : (
                            <p className="text-center text-xl font-semibold text-red-600">
                                User not found
                            </p>
                        )}
                    </ul>
                )}

                <div className="flex justify-center">
                    <Button
                        className="animate-pulse p-6 px-11 rounded-full bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg"
                        onClick={handleBackButton}
                    >
                        GO TO HOMEPAGE
                    </Button>
                </div>
            </div>
        </div>
    );
}
