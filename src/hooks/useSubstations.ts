import useSWR from 'swr';
import { fetchSubstations } from '../api/substations';
import { Substation } from '../types/demandGroup';

export function useSubstations(demandGroupId: string | null) {
  const { data, error, isLoading } = useSWR<Substation[]>(
    demandGroupId ? `substations-${demandGroupId}` : null,
    () => demandGroupId ? fetchSubstations(demandGroupId) : null
  );

  return {
    substations: data,
    isLoading,
    isError: error
  };
}