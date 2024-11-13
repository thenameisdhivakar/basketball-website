'use client'
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
export default function PlayerCard() {
    const back = useRouter();
    function handleBackButton() {
        back.push("/players")
    }
    return (
        <>
            <h1>PlayerCard</h1>
            <Button className="font-extrabold" onClick={handleBackButton} color="warning">Go to players</Button>
        </>
    )
}