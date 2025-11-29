'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  DollarSign,
  Users,
  Target,
  Award
} from 'lucide-react'

const successStories = [
  {
    client: 'FinTech Startup',
    project: 'PaieCashPlay Platform',
    challenge: 'Scalabilité et sécurité des paiements',
    solution: 'Architecture microservices sur Google Cloud',
    results: [
      '10,000+ transactions/seconde',
      '99.9% uptime garanti',
      '40% réduction coûts infrastructure',
      'Conformité PCI-DSS'
    ],
    tech: ['Google Cloud Run', 'Kubernetes', 'Cloud SQL', 'Security Command Center'],
    timeline: '3 mois',
    roi: '300%'
  },
  {
    client: 'Gaming Company',
    project: 'SDK Games Africa',
    challenge: 'Distribution globale et performance',
    solution: 'CDN global avec auto-scaling',
    results: [
      '50+ jeux intégrés',
      'Latence < 50ms mondiale',
      '60% amélioration performance',
      'SDK adopté par 200+ développeurs'
    ],
    tech: ['Cloud CDN', 'Firebase', 'Cloud Functions', 'Analytics'],
    timeline: '4 mois',
    roi: '250%'
  },
  {
    client: 'AgriTech PME',
    project: 'AGRO-PME Digital',
    challenge: 'Digitalisation et IoT agricole',
    solution: 'Plateforme IoT avec ML prédictif',
    results: [
      '500+ agriculteurs connectés',
      '30% augmentation rendement',
      'Prédictions météo précises',
      'Réduction gaspillage 25%'
    ],
    tech: ['IoT Core', 'BigQuery', 'AI Platform', 'Cloud Storage'],
    timeline: '6 mois',
    roi: '400%'
  }
]

const serviceOfferings = [
  {
    title: 'Audit & Stratégie Cloud',
    description: 'Évaluation complète de votre infrastructure actuelle',
    duration: '2-4 semaines',
    deliverables: [
      'Audit technique complet',
      'Roadmap de migration',
      'Estimation ROI',
      'Plan de sécurité'
    ],
    price: 'À partir de 5,000€',
    icon: Target
  },
  {
    title: 'Migration Cloud Complète',
    description: 'Transition sécurisée vers le cloud avec zéro interruption',
    duration: '2-6 mois',
    deliverables: [
      'Migration sans downtime',
      'Optimisation performance',
      'Formation équipes',
      'Support 24/7'
    ],
    price: 'Sur devis',
    icon: Zap
  },
  {
    title: 'Développement Sur Mesure',
    description: 'Applications cloud-natives scalables et sécurisées',
    duration: '3-8 mois',
    deliverables: [
      'Architecture microservices',
      'CI/CD automatisé',
      'Monitoring avancé',
      'Documentation complète'
    ],
    price: 'Sur devis',
    icon: Award
  }
]

export default function ClientSuccessSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Succès Clients & Impact Mesurable
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment mes certifications se traduisent en résultats concrets pour mes clients
          </p>
        </motion.div>

        {/* Success Stories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {successStories.map((story, index) => (
            <motion.div
              key={story.project}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{story.project}</h3>
                      <p className="text-sm text-gray-600">{story.client}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">+{story.roi}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-red-600 mb-1">Défi</h4>
                      <p className="text-sm text-gray-700">{story.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-blue-600 mb-1">Solution</h4>
                      <p className="text-sm text-gray-700">{story.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-600 mb-3">Résultats</h4>
                    <div className="space-y-2">
                      {story.results.map((result) => (
                        <div key={result} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {story.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {story.timeline}
                    </div>
                    <Button variant="outline" size="sm">
                      Voir le cas d'étude
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Service Offerings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Comment Je Peux Vous Aider
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Services personnalisés basés sur mes certifications et expérience terrain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceOfferings.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Durée:</span>
                        <span className="font-medium">{service.duration}</span>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 mb-2">Livrables:</h5>
                        <ul className="space-y-1">
                          {service.deliverables.map((item) => (
                            <li key={item} className="text-sm text-gray-600 flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold text-gray-900">{service.price}</span>
                        <DollarSign className="w-5 h-5 text-green-600" />
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Demander un devis
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 text-lg">
              Planifier une Consultation Gratuite
            </Button>
            <p className="text-sm text-gray-600 mt-2">
              30 minutes pour discuter de vos besoins • Sans engagement
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}