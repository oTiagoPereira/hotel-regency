import React from 'react';
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import PetsIcon from '@mui/icons-material/Pets';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SpaIcon from '@mui/icons-material/Spa';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import TvIcon from '@mui/icons-material/Tv';
import AccessibleIcon from '@mui/icons-material/Accessible';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ElevatorIcon from '@mui/icons-material/Elevator';
import LockIcon from '@mui/icons-material/Lock';
import BathtubIcon from '@mui/icons-material/Bathtub';
import KitchenIcon from '@mui/icons-material/Kitchen';

export interface Amenity {
  key: string;
  name: string;
  Icon: React.ElementType;
}

export const AllAmenities: Amenity[] = [
  { key: 'wifi', name: 'Wi-Fi Grátis', Icon: WifiIcon },
  { key: 'pool', name: 'Piscina', Icon: PoolIcon },
  { key: 'air-conditioning', name: 'Ar Condicionado', Icon: AcUnitIcon },
  { key: 'free-parking', name: 'Estacionamento Grátis', Icon: LocalParkingIcon },
  { key: 'pets-allowed', name: 'Aceita Pets', Icon: PetsIcon },
  { key: 'free-breakfast', name: 'Café da Manhã Incluso', Icon: FreeBreakfastIcon },
  { key: 'gym', name: 'Academia', Icon: FitnessCenterIcon },
  { key: 'spa', name: 'Spa e Centro de Bem-Estar', Icon: SpaIcon },
  { key: 'restaurant', name: 'Restaurante', Icon: RestaurantIcon },
  { key: 'bar', name: 'Bar / Lounge', Icon: LocalBarIcon },
  { key: 'room-service', name: 'Serviço de Quarto', Icon: RoomServiceIcon },
  { key: 'front-desk-24h', name: 'Recepção 24 horas', Icon: SupportAgentIcon },
  { key: 'business-center', name: 'Centro de Negócios', Icon: BusinessCenterIcon },
  { key: 'accessible', name: 'Acessível para Cadeirantes', Icon: AccessibleIcon },
  { key: 'elevator', name: 'Elevador', Icon: ElevatorIcon },
  { key: 'non-smoking-rooms', name: 'Quartos para Não Fumantes', Icon: SmokeFreeIcon },
  { key: 'tv', name: 'TV de Tela Plana', Icon: TvIcon },
  { key: 'safe', name: 'Cofre', Icon: LockIcon },
  { key: 'minibar', name: 'Frigobar', Icon: KitchenIcon },
  { key: 'bathtub', name: 'Banheira', Icon: BathtubIcon },
  { key: 'beach-access', name: 'Acesso à Praia', Icon: BeachAccessIcon },
];

export const amenityIconMap = AllAmenities.reduce((map, amenity) => {
  map[amenity.key] = amenity.Icon;
  return map;
}, {} as Record<string, React.ElementType>);

export const amenityNameMap = AllAmenities.reduce((map, amenity) => {
  map[amenity.key] = amenity.name;
  return map;
}, {} as Record<string, string>);