'use client'
import Link from "next/link"
import HomeImg from "../../public/image.png"
import { useUser } from '@auth0/nextjs-auth0/client';


import { Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";

export default function Home() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

    function handleHelp() {
        alert("We are sorry! User is busy...")
    }

    return (
        <>
            <div
                className="bg-cover bg-center h-full min-h-screen"
                style={{ backgroundImage: `url(${HomeImg.src})` }}
            >

                <div>
                    <div>
                        <div className="p-3 font-bold text-2xl text-white flex justify-between items-center">

                            <div className="w-full">
                                <div>
                                    <Navbar isBordered className="bg-transparent fixed">
                                        {/* Left-aligned brand */}
                                        <NavbarContent justify="start">
                                            <NavbarBrand className="mr-4">
                                                <p className="font-bold">CK ACADEMY</p>
                                            </NavbarBrand>
                                        </NavbarContent>

                                        {/* Center-aligned navbar items */}
                                        <NavbarContent justify="center" className="hidden sm:flex gap-3 space-x-4 ">
                                            <NavbarItem >
                                                <Link className="hover:text-blue-400" color="foreground" href="/players">
                                                    Players
                                                </Link>
                                            </NavbarItem>
                                            <NavbarItem >
                                                <Link className="hover:text-blue-400" href="/tournament" color="secondary">
                                                    Tournament
                                                </Link>
                                            </NavbarItem>
                                            <NavbarItem >
                                                <Link className="hover:text-blue-400" href="/payment" color="secondary">
                                                    Payment
                                                </Link>
                                            </NavbarItem>
                                            <NavbarItem>
                                                <Link className="hover:text-blue-400" href="contact">
                                                    Contact
                                                </Link>
                                            </NavbarItem>
                                        </NavbarContent>

                                        {/* Right-aligned profile dropdown */}
                                        <NavbarContent as="div" className="items-center" justify="end">
                                            <Dropdown placement="bottom-end">

                                                <DropdownTrigger>
                                                    <div className="flex items-center space-x-2">
                                                        {user ? (
                                                            <Avatar
                                                                isBordered
                                                                as="button"
                                                                className="transition-transform"
                                                                color="secondary"
                                                                size="sm"
                                                                src={user.picture} // use src for the user's profile image
                                                                alt="User Profile Picture"
                                                            />
                                                        ) : (
                                                            <Avatar
                                                                isBordered
                                                                as="button"
                                                                className="transition-transform"
                                                                color="secondary"
                                                                name="Guest"
                                                                size="sm"
                                                            />
                                                        )}

                                                    </div>
                                                </DropdownTrigger>


                                                <DropdownMenu aria-label="Profile Actions" variant="flat">
                                                    <DropdownItem key="profile" className="h-14 gap-2">
                                                        <p className="font-semibold">Signed in as</p>
                                                        {user ? (
                                                            <p className="font-semibold">{user.email}</p>
                                                        ) : (
                                                            <p className="font-semibold">Guest</p>
                                                        )}
                                                    </DropdownItem>
                                                    <DropdownItem onClick={handleHelp} key="help_and_feedback">Help</DropdownItem>
                                                    <DropdownItem key="logout">
                                                        <Link href="/api/auth/logout" className="text-red-500 mt-2 inline-block">Logout</Link>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </NavbarContent>
                                    </Navbar>
                                </div>
                            </div>
                        </div>
                    </div>

                  

                    <div className="flex flex-row pb-40">
                        <div>
                            <h1 className="pt-40 px-28 pb-4 font-extrabold text-white text-5xl animate-pulse">Welcome to CK Academy</h1>
                            <p className="px-28 text-lg text-gray-400">Dive into intensive training, improve your game, and make <br />lifelong memories with us.</p>
                        </div>
                    </div>

                    
                    
                    <div className="mx-auto max-w-3xl">
                    <h1 className="text-white text-3xl font-extrabold text-center pt-5 ">Coaching and Mentorship Programs</h1>
                    <p className="px-24 pt-3 text-gray-200 pb-7 text-center">Our expert coaching staff provides individual mentorship, focusing on both athletic and personal growth. We ensure that our players are well-rounded individuals, prepared for success in all aspects of life.</p>
                   
                    </div>
                    <div className="sm:flex space-x-4 justify-center pt-5 ">
                        <div className="flex justify-center pb-7">
                            <div className="bg-white bg-opacity-0 backdrop-blur-lg border border-white border-opacity-20 rounded-lg shadow-lg p-8 max-w-sm text-center">
                                <h2 className="text-2xl font-bold text-white mb-4">WHAT WE OFFER</h2>
                                <p className="text-white text-opacity-80 mb-6">
                                    News & Updates: Stay up-to-date with the latest in basketball.
                                </p>
                                <p className="text-white text-opacity-80 mb-6">
                                    Training & Skills Development: Access expert tutorials to improve your game.
                                </p>
                                <p className="text-white text-opacity-80 mb-6 pb-8">
                                    Player Spotlights: Learn about rising stars and legendary players.
                                </p>

                                <button className="px-6  py-2 bg-white bg-opacity-20 text-white rounded-full shadow-lg transition transform hover:bg-opacity-30 hover:scale-105">
                                    More Info
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center pb-7">
                            <div className="bg-white bg-opacity-0 backdrop-blur-lg border border-white border-opacity-20 rounded-lg shadow-lg p-8 max-w-sm text-center">
                                <h2 className="text-2xl font-bold text-white mb-4">LIVE SCORES AND GAME HIGHLIGHTS</h2>
                                <p className="text-white text-opacity-80 mb-6 ">
                                    Live Game Scores updated in real-time for ongoing games
                                </p>
                                <p className="text-white text-opacity-80 mb-6 ">
                                    Video Highlights of top games, exciting plays, or weekly recaps
                                </p>
                                <p className="text-white text-opacity-80 mb-6">
                                    Community Events: Join meetups and live game coverage.
                                </p>

                                <button className="px-6 py-2 bg-white bg-opacity-20 text-white rounded-full shadow-lg transition transform hover:bg-opacity-30 hover:scale-105">
                                    More Info
                                </button>


                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-white text-sm pb-4">© CK Basketball. All rights reserved.</p>
                    </div>

                </div>


            </div >
        </>
    )
}