export interface Certification {
  id: string
  title: string
  issuer: string
  issuerLogo: string
  date: string
  level: 'foundation' | 'associate' | 'professional' | 'expert'
  category: 'cloud' | 'development' | 'management' | 'marketing'
  badge: string
  certificate?: string
  skills: string[]
  businessValue: string
  clientBenefit: string
}

export const certifications: Certification[] = [
  // Google Cloud Platform
  {
    id: 'gcp-professional-architect',
    title: 'Google Professional Cloud Architect',
    issuer: 'Google Cloud',
    issuerLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    date: 'Février 2025',
    level: 'professional',
    category: 'cloud',
    badge: '/assets/certifs/Professional-Cloud-Architect.png',
    skills: ['Architecture Design', 'Multi-Cloud', 'Security', 'Cost Optimization'],
    businessValue: 'Conception d\'architectures cloud évolutives et sécurisées',
    clientBenefit: 'Amélioration scalabilité de 300% et optimisation des coûts'
  },
  
  {
    id: 'pmp-in-progress',
    title: 'PMP (Project Management Professional)',
    issuer: 'PMI',
    issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/PMI_logo.svg',
    date: 'En cours',
    level: 'professional',
    category: 'management',
    badge: '/assets/certifs/pmp-logo.png',
    skills: ['Project Management', 'Leadership', 'Risk Management', 'Agile'],
    businessValue: 'Gestion de projets complexes avec méthodologies internationales',
    clientBenefit: 'Taux de réussite projet de 95% dans les délais'
  },
  
  // AWS Certifications
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    issuerLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    date: 'Novembre 2024',
    level: 'foundation',
    category: 'cloud',
    badge: '/assets/certifs/notion-essentiel-cloud-practitionner.png',
    certificate: '/assets/certifs/AWS/AWS Course Completion Certificate Notion essentiel Cloud Practitionner.pdf',
    skills: ['AWS Services', 'Cloud Economics', 'Security Basics'],
    businessValue: 'Maîtrise des fondamentaux AWS pour migrations cloud',
    clientBenefit: 'Migration sécurisée vers AWS avec optimisation des coûts'
  },
  
  // Project Management
  {
    id: 'project-management-foundations',
    title: 'Fondements de la Gestion de Projet',
    issuer: 'LinkedIn Learning',
    issuerLogo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    date: 'Octobre 2024',
    level: 'foundation',
    category: 'management',
    badge: '/assets/certifs/fondement-gestion-projet.png',
    certificate: '/assets/certifs/Gestion de projet/CertificatDaccomplissement_Les fondements de la gestion de projet.pdf',
    skills: ['Agile/Scrum', 'Planning', 'Risk Management', 'Team Leadership'],
    businessValue: 'Gestion de projets cloud complexes avec méthodologies agiles',
    clientBenefit: 'Livraison dans les délais avec 95% de réussite projet'
  },
  
  {
    id: 'google-workspace-deployment',
    title: 'Google Education Deployment',
    issuer: 'Google Workspace',
    issuerLogo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg',
    date: 'Octobre 2023',
    level: 'associate',
    category: 'cloud',
    badge: '/assets/certifs/google-workspace.png',
    skills: ['Google Workspace', 'Deployment', 'Training', 'Change Management'],
    businessValue: 'Déploiement et formation Google Workspace pour organisations',
    clientBenefit: 'Amélioration productivité de 60% via outils collaboratifs'
  }
]

export const certificationStats = {
  total: certifications.length,
  byLevel: {
    foundation: certifications.filter(c => c.level === 'foundation').length,
    associate: certifications.filter(c => c.level === 'associate').length,
    professional: certifications.filter(c => c.level === 'professional').length,
    expert: certifications.filter(c => c.level === 'expert').length
  },
  byCategory: {
    cloud: certifications.filter(c => c.category === 'cloud').length,
    development: certifications.filter(c => c.category === 'development').length,
    management: certifications.filter(c => c.category === 'management').length,
    marketing: certifications.filter(c => c.category === 'marketing').length
  }
}

export const clientSuccessMetrics = {
  scalabilityImprovement: '+300%',
  projectSuccessRate: '95%',
  teamsTrained: '200+',
  clientsServed: '50+',
  productivityGain: '+60%',
  costReduction: '30-50%',
  infrastructureUptime: '99.9%'
}