'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Download, 
  FileText,
  Target,
  TrendingUp,
  Award,
  Briefcase,
  GraduationCap,
  Code
} from 'lucide-react'
import { cvAnalysisTemplate, cvCheckpoints, successMetrics, cvRecommendations } from '@/lib/cv-data'

const statusIcons = {
  aligned: CheckCircle,
  missing: XCircle,
  needs_update: AlertTriangle
}

const statusColors = {
  aligned: 'text-green-600 bg-green-100',
  missing: 'text-red-600 bg-red-100',
  needs_update: 'text-yellow-600 bg-yellow-100'
}

export default function CVAnalysisComponent() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Analyse CV ↔ Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vérification de la cohérence entre votre CV et votre portfolio professionnel
          </p>
        </motion.div>

        {/* CV Downloads */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <a href="/assets/cv/new CV Cloud-PRoject Cedric Nguendap FR.pdf" target="_blank">
              <Download className="w-4 h-4 mr-2" />
              CV Français
            </a>
          </Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white" asChild>
            <a href="/assets/cv/new CV Cloud-PRoject Cedric Nguendap EN.pdf" target="_blank">
              <Download className="w-4 h-4 mr-2" />
              CV English
            </a>
          </Button>
        </motion.div>

        {/* Analysis Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {Object.entries(cvAnalysisTemplate).map(([key, section], index) => {
            const StatusIcon = statusIcons[section.status]
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {section.section}
                      </CardTitle>
                      <div className={`p-2 rounded-full ${statusColors[section.status]}`}>
                        <StatusIcon className="w-5 h-5" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Portfolio: {section.portfolioEquivalent}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className={`p-3 rounded-lg mb-4 ${
                      section.status === 'aligned' ? 'bg-green-50 border border-green-200' :
                      section.status === 'missing' ? 'bg-red-50 border border-red-200' :
                      'bg-yellow-50 border border-yellow-200'
                    }`}>
                      <p className="text-sm text-gray-700">{section.notes}</p>
                    </div>
                    
                    <div className="text-xs text-gray-500">
                      Status: <span className="font-medium capitalize">{section.status.replace('_', ' ')}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Key Checkpoints */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Points Clés à Vérifier
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(cvCheckpoints).map(([key, checkpoint], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-all">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                    checkpoint.importance === 'critical' ? 'bg-red-100' :
                    checkpoint.importance === 'high' ? 'bg-yellow-100' :
                    'bg-blue-100'
                  }`}>
                    {key === 'title' && <Target className="w-6 h-6 text-red-600" />}
                    {key === 'certifications' && <Award className="w-6 h-6 text-yellow-600" />}
                    {key === 'projects' && <Briefcase className="w-6 h-6 text-red-600" />}
                    {key === 'experience' && <GraduationCap className="w-6 h-6 text-blue-600" />}
                    {key === 'skills' && <Code className="w-6 h-6 text-yellow-600" />}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 capitalize">{key}</h4>
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${
                    checkpoint.importance === 'critical' ? 'bg-red-200 text-red-800' :
                    checkpoint.importance === 'high' ? 'bg-yellow-200 text-yellow-800' :
                    'bg-blue-200 text-blue-800'
                  }`}>
                    {checkpoint.importance}
                  </div>
                  <p className="text-xs text-gray-600">{checkpoint.reason}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Métriques de Succès à Inclure</h3>
            <p className="text-blue-100">
              Ces chiffres doivent apparaître dans votre CV pour maximiser l'impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(successMetrics).map(([key, metric], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <TrendingUp className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                <p className="font-semibold text-lg mb-1">{metric}</p>
                <p className="text-xs text-blue-200 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <FileText className="mr-3 h-6 w-6 text-blue-600" />
                Structure Recommandée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {cvRecommendations.structure.map((item, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Target className="mr-3 h-6 w-6 text-green-600" />
                Mots-Clés Essentiels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {cvRecommendations.keywords.map((keyword) => (
                  <span key={keyword} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md font-medium">
                    {keyword}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}