import React from 'react';
import { amenityIconMap } from '../../config/amenities.config'; 
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

interface AmenityIconProps {
  iconKey: string;
  className?: string;
}

export const AmenityIcon: React.FC<AmenityIconProps> = ({ iconKey, ...props }) => {
  const IconComponent = amenityIconMap[iconKey];

  if (!IconComponent) {
    return <HelpOutlineIcon {...props} />;
  }

  return <IconComponent {...props} />;
};