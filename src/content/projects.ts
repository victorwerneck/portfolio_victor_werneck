export type ProjectStatus = 'published' | 'draft';

export interface ProjectDefinition {
  id: string;
  slug: string;
  translationKey: 'project1' | 'project2' | 'project3';
  status: ProjectStatus;
  imageUrl: string;
}

export const projects: ProjectDefinition[] = [
  {
    id: 'portal-do-parceiro',
    slug: 'portal-do-parceiro',
    translationKey: 'project1',
    status: 'published',
    imageUrl: 'https://i.imgur.com/UlWzhaP.png',
  },
  {
    id: 'ppw',
    slug: 'ppw',
    translationKey: 'project2',
    status: 'draft',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 'lensly',
    slug: 'lensly',
    translationKey: 'project3',
    status: 'draft',
    imageUrl: 'https://images.unsplash.com/photo-1683818051102-dd1199d163b9?auto=format&fit=crop&w=1600&q=85',
  },
];
