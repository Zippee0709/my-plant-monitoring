//
// Plants types
// ===== ===== ===== ===== =====
export interface PlantType {
  id: string;
  name: string;
  serialNumber: string;
  macAddress: string;
  isEnable: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  datas: Data[];
}

interface Data {
  id: string;
  plantId: string;
  temperature: number;
  humidityAir: number;
  humiditySoil: number;
  pressure: number;
  battery: number;
  light: number;
  createdAt: Date;
  updatedAt: Date;
}
