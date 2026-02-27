import { Artefact } from './artefact.ts';

export interface ArtefactsState {
  artefacts: Artefact[];
  error: null | string;
}
