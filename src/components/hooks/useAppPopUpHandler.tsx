import { useEffect, useState } from 'react';

export const useAppPopUpHandler = ({ ...params }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e: React.MouseEvent) => {
    setIsActive((prev) => !prev);
  };
  const handlePropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  useEffect(() => {
    setIsActive(false);
  }, [params.list, params.pipe]);
  return { isActive, handleClick, handlePropagation };
};
