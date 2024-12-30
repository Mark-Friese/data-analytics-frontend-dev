import axios from 'axios';
import { API_CONFIG } from '../config/api';
import { DemandGroup } from '../types/demandGroup';

const api = axios.create(API_CONFIG);

export async function fetchDemandGroups(): Promise<DemandGroup[]> {
  const { data } = await api.get<DemandGroup[]>('/demand-groups');
  return data;
}

export async function fetchDemandGroupById(id: string): Promise<DemandGroup> {
  const { data } = await api.get<DemandGroup>(`/demand-groups/${id}`);
  return data;
}