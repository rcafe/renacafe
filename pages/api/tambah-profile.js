import prisma from "../../client.ts";

const handler = async (req, res) => {
    if(req.method !== 'POST')
    return res
        .status(405)
        .json({ message: "Tidak diijinkan" });
    
    console.log(`Req body : ${req.body}`);

    const cafe = JSON.parse(req.body);

    let sosmed = [];

    if(cafe.facebook)
        sosmed.push({namaSosmed: 'Facebook', username: cafe.facebook});
    if(cafe.instagram)
        sosmed.push({namaSosmed: 'Instagram', username: cafe.instagram});

    const tambah = await prisma.cafe.create({
        data:{
            nama: cafe.namaCafe,
            detail:{
                create:{
                    fotoCafe: cafe.fotoPath,
                    lokasiCafe: cafe.lokasiCafe ||null,
                    deskripsiCafe: cafe.deskripsiCafe,    
                },
            },
            sosialMedia:{
                create: sosmed,
            }
        }
    });

    res.json(tambah);
}

export default handler;