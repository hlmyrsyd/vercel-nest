-- CreateTable
CREATE TABLE "Patient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "weight" INTEGER,
    "height" INTEGER,
    "diseaseHistory" TEXT[],
    "laborHistory" TEXT[],
    "breastfeedHistory" TEXT[],
    "guardianName" TEXT,
    "guardianGender" TEXT,
    "guardianAge" INTEGER,
    "guardianStatus" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsultationHistory" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "patientId" TEXT NOT NULL,

    CONSTRAINT "ConsultationHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsultationData" (
    "id" TEXT NOT NULL,
    "consultationId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "activity" TEXT[],
    "fnbIntake" TEXT[],
    "lastMed" TEXT[],
    "opinion" TEXT[],
    "anxiety" TEXT[],
    "pain" TEXT[],

    CONSTRAINT "ConsultationData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ConsultationData_consultationId_key" ON "ConsultationData"("consultationId");

-- AddForeignKey
ALTER TABLE "ConsultationHistory" ADD CONSTRAINT "ConsultationHistory_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConsultationData" ADD CONSTRAINT "ConsultationData_consultationId_fkey" FOREIGN KEY ("consultationId") REFERENCES "ConsultationHistory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
