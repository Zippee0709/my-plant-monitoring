import { createContext } from 'react';
import { RequestFailedResponseType } from '../types/clientApi.types';
import { NotificationType } from '../types/notification.types';
import { CreatePlantResponseType, PlantType } from '../types/plant.types';

interface PlantContextData {
  plants: PlantType[];
  GetPlants(): Promise<RequestFailedResponseType | PlantType[]>;
  CreatePlant(): Promise<RequestFailedResponseType | CreatePlantResponseType>;
  GetNotifications(): Promise<RequestFailedResponseType | NotificationType[]>;
}

const PlantContext = createContext<PlantContextData | null>(null);

export default PlantContext;
