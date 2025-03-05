"use client"

import type { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RestaurantHeaderProps {
    restaurant: Pick<Restaurant, 'name' | 'coverImageUrl'>
}


const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
    const router = useRouter()
    const handleBackClick = () => router.back()


    return (
        <div className="relative h-[250px] w-full">
            <Button size="icon" variant={"secondary"} className="absolute top-4 left-4 z-50 rounded-full" onClick={handleBackClick} >
                <ChevronLeftIcon />
            </Button>
            <Button size="icon" variant={"secondary"} className="absolute top-4 right-4 z-50 rounded-full">
                <ScrollTextIcon />
            </Button>
            <Image src={restaurant?.coverImageUrl} alt={restaurant.name} className="object-cover" fill />
        </div>
    );
}

export default RestaurantHeader;