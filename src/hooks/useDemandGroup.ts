import useSWR from 'swr';
import { fetchDemandGroupById, fetchDemandGroups } from '../api/demandGroups';
import { DemandGroup } from '../types/demandGroup';

export function useDemandGroups() {
  const { data, error, isLoading } = useSWR<DemandGroup[]>(
    'demand-groups',
    fetchDemandGroups
  );

  return {
    demandGroups: data,
    isLoading,
    isError: error
  };
}

export function useDemandGroup(id: string | null) {
  const { data, error, isLoading } = useSWR<DemandGroup>(
    id ? `demand-group-${id}` : null,
    () => id ? fetchDemandGroupById(id) : null
  );

  return {
    demandGroup: data,
    isLoading,
    isError: error
  };
}