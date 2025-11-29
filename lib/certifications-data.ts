export interface Certification {
  id: string
  title: string
  issuer: string
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
    title: 'Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: '2025',
    level: 'professional',
    category: 'cloud',
    badge: '/assets/certifs/Professional-Cloud-Architect.png',
    skills: ['Architecture Design', 'Multi-Cloud', 'Security', 'Cost Optimization'],
    businessValue: 'Conception d\'architectures cloud évolutives et sécurisées',
    clientBenefit: 'Réduction des coûts infrastructure de 30-50% et amélioration de la disponibilité'
  },
  
  // AWS Certifications
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    level: 'foundation',
    category: 'cloud',
    badge: '/assets/certifs/notion-essentiel-cloud-practitionner.png',
    certificate: '/assets/certifs/AWS/AWS Course Completion Certificate Notion essentiel Cloud Practitionner.pdf',
    skills: ['AWS Services', 'Cloud Economics', 'Security Basics'],
    businessValue: 'Maîtrise des fondamentaux AWS pour migrations cloud',
    clientBenefit: 'Migration sécurisée vers AWS avec optimisation des coûts'
  },
  
  {
    id: 'aws-cloud-acquisition',
    title: 'Acquisition dans le Cloud',
    issuer: 'Amazon Web Services',
    date: '2024',
    level: 'associate',
    category: 'cloud',
    badge: '/assets/certifs/AWS/AWS Course Completion Certificate Acquisition dans le cloud.pdf',
    skills: ['Cloud Procurement', 'Vendor Management', 'Cost Analysis'],
    businessValue: 'Stratégies d\'acquisition et négociation cloud',
    clientBenefit: 'Optimisation des contrats cloud et réduction des coûts'
  },
  
  // Project Management
  {
    id: 'project-management-foundations',
    title: 'Fondements de la Gestion de Projet',
    issuer: 'Google/Coursera',
    date: '2024',
    level: 'foundation',
    category: 'management',
    badge: '/assets/certifs/fondement-gestion-projet.png',
    certificate: '/assets/certifs/Gestion de projet/CertificatDaccomplissement_Les fondements de la gestion de projet.pdf',
    skills: ['Agile/Scrum', 'Planning', 'Risk Management', 'Team Leadership'],
    businessValue: 'Gestion de projets cloud complexes avec méthodologies agiles',
    clientBenefit: 'Livraison dans les délais avec 95% de réussite projet'
  },
  
  // Digital Marketing
  {
    id: 'yali-digital-marketing',
    title: 'Digital Marketing Recognition',
    issuer: 'YALI (Young African Leaders Initiative)',
    date: '2024',
    level: 'associate',
    category: 'marketing',
    badge: '/assets/certifs/Yali/digital_markeint_recongnition.pdf',
    skills: ['Digital Strategy', 'Growth Hacking', 'Analytics'],
    businessValue: 'Stratégies digitales pour startups et PME africaines',
    clientBenefit: 'Croissance digitale accélérée et acquisition clients'
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
  costReduction: '30-50%',
  projectSuccessRate: '95%',
  infrastructureUptime: '99.9%',
  migrationTime: '40% faster',
  teamProductivity: '+60%'
}