'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Award, 
  Download, 
  ExternalLink, 
  TrendingUp, 
  Shield, 
  Zap,
  Users,
  Target,
  CheckCircle
} from 'lucide-react'
import { certifications, certificationStats, clientSuccessMetrics } from '@/lib/certifications-data'

const levelColors = {
  foundation: 'bg-blue-100 text-blue-800 border-blue-200',
  associate: 'bg-green-100 text-green-800 border-green-200',
  professional: 'bg-purple-100 text-purple-800 border-purple-200',
  expert: 'bg-red-100 text-red-800 border-red-200'
}

const categoryIcons = {
  cloud: Shield,
  development: Zap,
  management: Users,
  marketing: Target
}

export default function CertificationsShowcase() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header avec métriques */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Certifications & Expertise Validée
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
          
          {/* Stats rapides */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { label: 'Certifications', value: certificationStats.total, icon: Award },
              { label: 'Réduction Coûts', value: clientSuccessMetrics.costReduction, icon: TrendingUp },
              { label: 'Taux de Réussite', value: clientSuccessMetrics.projectSuccessRate, icon: CheckCircle },
              { label: 'Disponibilité', value: clientSuccessMetrics.infrastructureUptime, icon: Shield }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-xl flex items-center justify-center shadow-md">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Grille des certifications */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => {
            const CategoryIcon = categoryIcons[cert.category]
            
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Header avec badge niveau */}
                  <div className="relative">
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${levelColors[cert.level]}`}>
                      {cert.level.toUpperCase()}
                    </div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                          <CategoryIcon className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {cert.title}
                          </CardTitle>
                          <p className="text-sm text-gray-600 mt-1">{cert.issuer} • {cert.date}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </div>

                  <CardContent className="space-y-6">
                    {/* Compétences */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Compétences Clés</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Valeur business */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Valeur Business</h4>
                      <p className="text-sm text-gray-600">{cert.businessValue}</p>
                    </div>

                    {/* Bénéfice client */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-blue-900 mb-2 flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        Impact Client
                      </h4>
                      <p className="text-sm text-blue-800">{cert.clientBenefit}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      {cert.certificate && (
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={cert.certificate} target="_blank">
                            <Download className="w-4 h-4 mr-2" />
                            Certificat
                          </a>
                        </Button>
                      )}
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={cert.badge} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Badge
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Section "Comment je peux vous aider" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Comment Ces Certifications Vous Aident</h3>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Chaque certification représente une expertise concrète pour résoudre vos défis business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Migration Cloud Sécurisée',
                description: 'Transition vers le cloud sans interruption avec optimisation des coûts',
                metrics: ['30-50% réduction coûts', 'Zero downtime', 'Sécurité renforcée'],
                icon: Shield
              },
              {
                title: 'Architecture Évolutive',
                description: 'Conception d\'infrastructures qui grandissent avec votre business',
                metrics: ['Auto-scaling', '99.9% disponibilité', 'Performance optimale'],
                icon: Zap
              },
              {
                title: 'Gestion de Projet Agile',
                description: 'Livraison dans les délais avec méthodologies éprouvées',
                metrics: ['95% réussite projet', 'Délais respectés', 'Budget maîtrisé'],
                icon: Users
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-blue-100 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.metrics.map((metric) => (
                    <div key={metric} className="flex items-center justify-center text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
              Discutons de Votre Projet
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}