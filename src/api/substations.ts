import axios from 'axios';
import { API_CONFIG } from '../config/api';
import { Substation } from '../types/demandGroup';

const api = axios.create(API_CONFIG);

export async function fetchSubstations(demandGroupId: string): Promise<Substation[]> {
  const { data } = await api.get<Substation[]>(`/demand-groups/${demandGroupId}/substations`);
  return data;
}