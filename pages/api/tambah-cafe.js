import prisma from "../../client.ts";

const handler = async ( req,res ) => {
    if(req.method !== 'POST')
        return res
            .status(405)
            .json({ message: "Tidak diijinkan" });

    const cafe = JSON.parse( req.body );

    const tambah = await prisma.cafe.create({
        data: {
            nama: cafe.nama,
        },
    });

    res.json(tambah)
}

export default handler;