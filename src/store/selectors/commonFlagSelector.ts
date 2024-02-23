import { selectedActionTab } from '@/store/reducers/commonFlags';
import { useAppSelector } from '@/hooks/redux';

export const getActionTab = () => {
  return useAppSelector(selectedActionTab);
};
