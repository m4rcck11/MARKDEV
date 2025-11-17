import { libremetricas } from './libremetricas.js';
import type { CaseStudy } from './libremetricas.js';

export const cases: CaseStudy[] = [
  libremetricas
];

export const getCaseById = (id: string): CaseStudy | undefined => {
  return cases.find(c => c.id === id);
};

export { libremetricas };
export type { CaseStudy, ProjectSection, CodeSnippet, CaseStudyMetric, CaseStudyImage } from './libremetricas.js';
