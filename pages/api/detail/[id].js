import prisma from '../../../client.ts';
const handler = async (req, res) => {
    
    const { id } = req.query;
    
    const cafe = await prisma.cafe.findUnique({
        where: { id: Number(id) },
        include: { detail: true, sosialMedia: true },
    });
    
    res.json(cafe);
};
export default handler;