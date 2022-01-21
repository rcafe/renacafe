import prisma from "../../client.ts";

const handler = async( req,res ) => {
    const cafe = await prisma.cafe.findMany();
    res.json(cafe);
}

export default handler;