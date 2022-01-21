-- CreateTable
CREATE TABLE "Cafe" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Cafe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Detail" (
    "idCafe" INTEGER NOT NULL,
    "fotoCafe" TEXT,
    "lokasiCafe" TEXT,
    "deskripsiCafe" TEXT,

    CONSTRAINT "Detail_pkey" PRIMARY KEY ("idCafe")
);

-- CreateTable
CREATE TABLE "SosialMedia" (
    "idSosmed" SERIAL NOT NULL,
    "idCafe" INTEGER NOT NULL,
    "namaSosmed" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "SosialMedia_pkey" PRIMARY KEY ("idSosmed")
);

-- AddForeignKey
ALTER TABLE "Detail" ADD CONSTRAINT "Detail_idCafe_fkey" FOREIGN KEY ("idCafe") REFERENCES "Cafe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SosialMedia" ADD CONSTRAINT "SosialMedia_idCafe_fkey" FOREIGN KEY ("idCafe") REFERENCES "Cafe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
