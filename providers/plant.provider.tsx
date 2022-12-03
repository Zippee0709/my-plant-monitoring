import React, { useEffect, useMemo, useState } from 'react';
import Cookies from 'universal-cookie';
import PlantContext from '../contexts/plant.context';
import { RequestFailedResponseType } from '../types/clientApi.types';
import { PlantType } from '../types/plant.types';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

function PlantProvider({ children }: Props) {
  const cookies = new Cookies();
  const token = cookies.get('token');

  const [plants, setPlants] = useState<PlantType[]>([]);

  async function GetPlants(): Promise<RequestFailedResponseType | PlantType[]> {
    try {
      const rep = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/user/plant`, {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const data: PlantType[] = await rep.json();
      setPlants(data);
      return data;
    } catch (error) {
      return {
        statusCode: 400,
        error: 'Bad Request',
        message: 'PlantsError',
      };
    }
  }

  useEffect(() => {
    GetPlants();
  }, []);

  const value = useMemo(
    () => ({
      plants,
      GetPlants,
    }),
    [plants]
  );

  return <PlantContext.Provider value={value}>{children}</PlantContext.Provider>;
}

export default PlantProvider;
