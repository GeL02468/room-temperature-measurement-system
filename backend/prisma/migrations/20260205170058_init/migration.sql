-- CreateTable
CREATE TABLE "inside_measure" (
    "id" SERIAL NOT NULL,
    "inside_temperature" DOUBLE PRECISION NOT NULL,
    "inside_humidity" DOUBLE PRECISION NOT NULL,
    "inside_air_pressure" DOUBLE PRECISION NOT NULL,
    "inside_measure_date" TIMESTAMP(3) NOT NULL,
    "inside_measure_palce" TEXT NOT NULL,

    CONSTRAINT "inside_measure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "outside_measure" (
    "id" SERIAL NOT NULL,
    "outside_temperature" DOUBLE PRECISION NOT NULL,
    "outside_humidity" DOUBLE PRECISION NOT NULL,
    "outside_air_pressure" DOUBLE PRECISION NOT NULL,
    "outside_measure_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "outside_measure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "threshold" (
    "id" SERIAL NOT NULL,
    "outside_temperature_max_threshold" DOUBLE PRECISION NOT NULL,
    "outside_temperature_min_threshold" DOUBLE PRECISION NOT NULL,
    "outside_humidity_max_threshold" DOUBLE PRECISION NOT NULL,
    "outside_humidity_min_threshold" DOUBLE PRECISION NOT NULL,
    "outside_air_pressure_max_threshold" DOUBLE PRECISION NOT NULL,
    "outside_air_pressure_min_threshold" DOUBLE PRECISION NOT NULL,
    "outside_measure_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "threshold_pkey" PRIMARY KEY ("id")
);
