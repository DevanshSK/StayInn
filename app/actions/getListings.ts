import prisma from "@/app/libs/prismadb"

export default async function getListings(){
    try {
        // Fetch all listings
        const listings = await prisma.listing.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });

        return listings;
    } catch (error: any) {
        throw new Error(error);
    }
}