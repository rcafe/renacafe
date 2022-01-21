import prisma from "../../client.ts";

const handler = async (req, res) => {
    if (req.method !== 'POST')
        return res
        .status(405)
        .json({ message: 'Request tidak diijinkan' });

    const data = JSON.parse(req.body);

    const hapus = await prisma.cafe.delete({
        where: {id: data.id},
        include: {detail:true}
    });

    res.json(hapus);
}

export default handler;