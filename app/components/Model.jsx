import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";

export default function App({ name, position, height, weight, pointsPerGame, reboundsPerGame, assistsPerGame,status }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [size, setSize] = React.useState('md')

    const sizes = ["full"];


    const handleOpen = (size) => {
        setSize(size)
        onOpen();
    }

    return (
        <>
            <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                    <div className="text-white rounded-lg px-12 p-2 bg-blue-400 hover:bg-blue-200" key={size} onClick={() => handleOpen(size)}>view</div>
                ))}
            </div>
            <Modal
                size={size}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent className=" p-8 bg-white/5 backdrop-blur-md border border-white/20 shadow-lg hover:bg-white/5 transition text-white">
                    {(onClose) => (
                        <div>
                            <ModalHeader className="flex flex-col gap-1 font-extrabold text-center text-4xl"> {name}!</ModalHeader>
                            <ModalBody className="text-center">
                                <p>
                                    POSITION : {position}
                                </p>
                                <p>
                                    HEIGHT : {height}
                                </p>
                                <p>
                                    WEIGHT : {weight}
                                </p>

                                <p>STATUS : {status}</p>
                                
                                <Table className="max-w-3xl mx-auto mt-5 ">
                                    <TableHeader>
                                        <TableColumn>POINTS PER GAME</TableColumn>
                                        <TableColumn>RE-BOUNDS PER GAME</TableColumn>
                                        <TableColumn>ASSISTS PER GAME</TableColumn>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow key="1">
                                            <TableCell className="text-black">{pointsPerGame}</TableCell>
                                            <TableCell className="text-black">{reboundsPerGame}</TableCell>
                                            <TableCell className="text-black">{assistsPerGame}</TableCell>
                                            
                                        </TableRow>
                                        <TableRow key="2">
                                            <TableCell>Zoey Lang</TableCell>
                                            <TableCell>Technical Lead</TableCell>
                                            <TableCell>Paused</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </ModalBody>
                            <ModalFooter className="justify-center">
                                <Button className="bg-red-600 text-white" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
