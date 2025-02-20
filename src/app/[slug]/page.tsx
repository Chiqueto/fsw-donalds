import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ConsumptionMethodItem from "./consumption-method-item";

interface RestaurantPageProps {
    params: Promise<{ slug: string }>
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
    const { slug } = await params
    const restaurant = await db.restaurant.findUnique({ where: { slug } })

    if (!restaurant) {
        return notFound()
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center px-6 py-24">
            {/* LOGO E TIRULO */}
            <div className="flex flex-col items-center gap-2">
                <Image src={restaurant?.avatarImageUrl} alt={restaurant.name} width={82} height={82} />
                <h2 className="font-semibold">{restaurant.name}</h2>
            </div>
            {/* BEM VINDO */}
            <div className="space-y-2 pt-24 text-center">
                <h3 className="text-sxl font-semibold">
                    Seja Bem-vindo!
                </h3>
                <p className="opacity-55">
                    Escolha como prefere aproveitar sua refeição. Estamos aqui para oferecer praticidade e sabor em cada detalhe!
                </p>
            </div>

            <div className="pt-14 grid grid-cols-2 gap-4">
                <ConsumptionMethodItem buttonText="Para comer aqui" imageAlt="Para comer aqui" imageUrl="/dine_in.png" option="DINE_IN" slug={slug} />
                <ConsumptionMethodItem buttonText="Para levar" imageAlt="Para levar" imageUrl="/takeaway.png" option="TAKEAWAY" slug={slug} />

            </div>
        </div>
    );
}

export default RestaurantPage;