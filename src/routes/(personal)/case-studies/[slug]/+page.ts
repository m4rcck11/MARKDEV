import { getCaseById } from '$lib/cases/index.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function entries() {
  return [
    { slug: 'libremetricas' }
    // Add more slugs as you create more case studies
    // { slug: 'tesla-cognos' },
    // { slug: 'insyspo' }
  ];
}

export async function load({ params }: { params: { slug: string } }) {
  const caseData = getCaseById(params.slug);
  
  if (!caseData) {
    throw error(404, 'Estudo de caso não encontrado');
  }
  
  return { caseData };
}

