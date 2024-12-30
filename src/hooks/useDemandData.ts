import useSWR from 'swr';
import { fetchDemandData, DemandData } from '../lib/api';

export function useDemandData() {
  const { data, error, isLoading, mutate } = useSWR<DemandData[]>(
    'demand',
    fetchDemandData
  );

  return {
    data,
    isLoading,
    isError: error,
    mutate,
  };
}