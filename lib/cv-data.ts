// Structure de données pour analyser la cohérence CV <-> Portfolio

export interface CVSection {
  section: string
  portfolioEquivalent: string
  status: 'aligned' | 'missing' | 'needs_update'
  notes: string
}

export interface CVAnalysis {
  personalInfo: CVSection
  experience: CVSection
  education: CVSection
  skills: CVSection
  certifications: CVSection
  projects: CVSection
  languages: CVSection
}

// Template d'analyse basé sur le contenu du portfolio
export const cvAnalysisTemplate: CVAnalysis = {
  personalInfo: {
    section: 'Informations personnelles',
    portfolioEquivalent: 'Hero Section + About',
    status: 'aligned',
    notes: 'Vérifier que le titre "Cloud Architect & Full-Stack Developer" correspond'
  },
  
  experience: {
    section: 'Expérience professionnelle',
    portfolioEquivalent: 'Solutions Section + Client Success',
    status: 'needs_update',
    notes: 'Doit inclure: PaieCashPlay, SDK Games Africa, AGRO-PME avec métriques de succès'
  },
  
  education: {
    section: 'Formation',
    portfolioEquivalent: 'Formation & Mentorat Section',
    status: 'aligned',
    notes: 'Université des Montagnes, ISTIC Bangangté mentionnés'
  },
  
  skills: {
    section: 'Compétences techniques',
    portfolioEquivalent: 'Expertise Section',
    status: 'aligned',
    notes: 'GCP, AWS, Angular, NestJS, MongoDB, Docker, Kubernetes, TypeScript'
  },
  
  certifications: {
    section: 'Certifications',
    portfolioEquivalent: 'Certifications Showcase',
    status: 'aligned',
    notes: 'Google Cloud Professional Architect, AWS Cloud Practitioner, Gestion de projet'
  },
  
  projects: {
    section: 'Projets',
    portfolioEquivalent: 'Solutions Section',
    status: 'needs_update',
    notes: 'Inclure les 3 projets principaux avec technologies et résultats mesurables'
  },
  
  languages: {
    section: 'Langues',
    portfolioEquivalent: 'Navigation FR/EN',
    status: 'aligned',
    notes: 'Français (natif), Anglais (professionnel) - cohérent avec site bilingue'
  }
}

// Points clés à vérifier dans le CV
export const cvCheckpoints = {
  title: {
    expected: 'Cloud Architect & Full-Stack Developer',
    importance: 'critical',
    reason: 'Cohérence avec le branding du portfolio'
  },
  
  certifications: {
    expected: [
      'Google Cloud Professional Architect (2025)',
      'AWS Cloud Practitioner (2024)',
      'Fondements Gestion de Projet (2024)',
      'YALI Digital Marketing (2024)'
    ],
    importance: 'high',
    reason: 'Crédibilité technique et progression de carrière'
  },
  
  projects: {
    expected: [
      {
        name: 'PaieCashPlay',
        role: 'Cloud Architect',
        tech: ['Google Cloud Run', 'NestJS', 'Angular', 'Cloud SQL'],
        results: ['99.9% Uptime', '10K+ TPS', 'Multi-region']
      },
      {
        name: 'SDK Games Africa',
        role: 'Lead Developer',
        tech: ['Kubernetes', 'TypeScript', 'Cloud Storage', 'Firebase'],
        results: ['50+ Games', 'Global CDN', 'Real-time Analytics']
      },
      {
        name: 'AGRO-PME Digital',
        role: 'Solution Architect',
        tech: ['BigQuery', 'IoT Core', 'Angular', 'Cloud Functions'],
        results: ['500+ Farmers', 'IoT Sensors', 'ML Predictions']
      }
    ],
    importance: 'critical',
    reason: 'Preuves concrètes des compétences et de l\'impact'
  },
  
  experience: {
    expected: [
      'Enseignant Assistant - Université des Montagnes',
      'Enseignant Assistant - ISTIC Bangangté',
      'Formateur & Mentor - Yaba-In'
    ],
    importance: 'medium',
    reason: 'Cohérence avec la section Formation & Mentorat'
  },
  
  skills: {
    expected: {
      cloud: ['Google Cloud Platform', 'Amazon Web Services', 'Multi-Cloud Architecture'],
      development: ['TypeScript', 'React', 'Angular', 'Node.js', 'NestJS', 'MongoDB'],
      devops: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      management: ['Scrum/Agile', 'Project Management', 'Team Leadership']
    },
    importance: 'high',
    reason: 'Alignement avec l\'expertise technique présentée'
  }
}

// Métriques de succès à inclure dans le CV
export const successMetrics = {
  costReduction: '30-50% réduction des coûts infrastructure',
  projectSuccess: '95% taux de réussite des projets',
  uptime: '99.9% disponibilité des systèmes',
  teamSize: 'Gestion d\'équipes de 5-15 développeurs',
  studentsImpacted: '200+ étudiants formés',
  technologiesUsed: '15+ technologies cloud maîtrisées'
}

export const cvRecommendations = {
  structure: [
    'En-tête avec titre professionnel clair',
    'Résumé professionnel (2-3 lignes)',
    'Expérience professionnelle avec métriques',
    'Projets clés avec technologies et résultats',
    'Certifications avec dates',
    'Compétences techniques organisées par catégorie',
    'Formation et enseignement',
    'Langues'
  ],
  
  keywords: [
    'Cloud Architecture', 'Google Cloud Platform', 'AWS',
    'Microservices', 'Kubernetes', 'Docker',
    'TypeScript', 'Angular', 'NestJS',
    'DevOps', 'CI/CD', 'Infrastructure as Code',
    'Project Management', 'Agile', 'Scrum',
    'Digital Transformation', 'Scalability', 'Security'
  ],
  
  quantifiableAchievements: [
    'Réduction des coûts infrastructure de 30-50%',
    'Amélioration des performances de 60%',
    'Gestion de 10,000+ transactions/seconde',
    'Formation de 200+ développeurs',
    '99.9% de disponibilité système',
    'Migration de 15+ applications vers le cloud'
  ]
}