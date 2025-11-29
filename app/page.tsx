'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Cloud, 
  Code, 
  Database, 
  Server, 
  Shield, 
  Users, 
  Rocket, 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  ExternalLink,
  GraduationCap,
  Target,
  Layers,
  Network,
  Lock,
  Zap,
  Globe,
  Settings,
  X
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import { translations } from '@/lib/translations'
import CertificationsShowcase from '@/components/CertificationsShowcase'
import { useState } from 'react'

export default function Home() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const pathname = usePathname()
  const locale = pathname.startsWith('/fr') ? 'fr' : 'en'
  const t = translations[locale as keyof typeof translations] || translations.en
  const skills = [
    { name: 'Google Cloud Platform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'OpenStack', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/OpenStack%C2%AE_Logo_2016.svg' },
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'NestJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
    { name: 'ExpressJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Jira Software', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' }
  ]

  const tools = [
    { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
    { name: 'Moodle', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Moodle-logo.svg' },
    { name: 'Odoo', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Odoo_logo.svg' },
    { name: 'Trello', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
    { name: 'Google Workspace', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Workspace_Logo.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' }
  ]

  const projects = [
    {
      name: 'PaieCash-QR',
      description: 'Solution de gestion de supermarché avec QR-code',
      tech: ['ExpressJS', 'Sequelize', 'Angular 16', 'NgRx'],
      image: '/assets/project1.jpg',
      link: 'https://paiecash.com/'
    },
    {
      name: 'PaieCashPlay Auth',
      description: 'Solution WebSSO pour authentification centralisée',
      tech: ['NextJS', 'Google Cloud Storage', 'WebSSO'],
      image: '/assets/project2.jpg',
      link: 'https://auth.paiecashplay.com'
    },
    {
      name: 'Architecture Cloud AWS',
      description: 'Infrastructure AWS avec Load Balancing et Lambda pour SmartestLotto',
      tech: ['AWS Lambda', 'Elastic Beanstalk', 'Load Balancer', 'AWS'],
      image: '/assets/autres/architecture-aws-smartestlotto.png',
      link: 'https://smartestlotto.io'
    }
  ]



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-blue-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Cloud className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-gray-800">{t.hero.title}</h1>
              <span className="text-sm text-blue-600 font-medium">Cloud Architect</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <div className="flex items-center space-x-4 mr-6">
                <a href="/en" className={`text-sm font-medium ${locale === 'en' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>EN</a>
                <span className="text-gray-300">|</span>
                <a href="/fr" className={`text-sm font-medium ${locale === 'fr' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}>FR</a>
              </div>
              <motion.a 
                href="#about" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                whileHover={{ y: -1 }}
              >
                {t.nav.about}
              </motion.a>
              <motion.a 
                href="#expertise" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                whileHover={{ y: -1 }}
              >
                {t.nav.expertise}
              </motion.a>
              <motion.a 
                href="#solutions" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                whileHover={{ y: -1 }}
              >
                {t.nav.solutions}
              </motion.a>
              <motion.a 
                href="#certifications" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                whileHover={{ y: -1 }}
              >
                {t.nav.certifications}
              </motion.a>
              <motion.a 
                href="#contact" 
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                whileHover={{ y: -1 }}
              >
                {t.nav.contact}
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-500 ml-2">{t.hero.certified}</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t.hero.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Cloud Architect
                </div>
                <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Full-Stack Developer
                </div>
                <div className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  {locale === 'fr' ? 'Gestionnaire de Projet' : 'Project Manager'}
                </div>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" asChild>
                  <a href="#solutions">{t.hero.viewSolutions}</a>
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3" asChild>
                  <a href="#contact">{t.hero.getInTouch}</a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl transform rotate-3 opacity-20"></div>
                <img 
                  src="/assets/photo-cedric/cedric-2.jpg" 
                  alt="Cédric Nguendap - Cloud Architect"
                  className="relative w-full h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <Cloud className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-800">Google Cloud Professional</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2"
              >
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {t.about.description1}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {t.about.description2}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <Cloud className="h-8 w-8 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t.about.cloudArchitecture}</h4>
                      <p className="text-sm text-gray-600">{t.about.cloudArchitectureDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <Code className="h-8 w-8 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t.about.fullStackDev}</h4>
                      <p className="text-sm text-gray-600">{t.about.fullStackDevDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
                    <Shield className="h-8 w-8 text-yellow-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t.about.security}</h4>
                      <p className="text-sm text-gray-600">{t.about.securityDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                    <Users className="h-8 w-8 text-red-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{t.about.teamLeadership}</h4>
                      <p className="text-sm text-gray-600">{t.about.teamLeadershipDesc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <div className="relative">
                  <img 
                    src="/assets/photo-cedric/cedric-3.jpg" 
                    alt="Cédric Nguendap - Professional Photo"
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-800">{t.about.available}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start hover:bg-blue-50 border-blue-200" asChild>
                    <a href="https://www.linkedin.com/in/cedric-nguendap-bedjama-143544175/" target="_blank">
                      <Linkedin className="mr-3 h-5 w-5 text-blue-600" />
                      {t.about.connectLinkedIn}
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start hover:bg-gray-50 border-gray-200" asChild>
                    <a href="https://github.com/Cedric-Yaba-In" target="_blank">
                      <Github className="mr-3 h-5 w-5 text-gray-700" />
                      {t.about.viewGitHub}
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start hover:bg-green-50 border-green-200" asChild>
                    <a href="mailto:cednguendap@gmail.com">
                      <Mail className="mr-3 h-5 w-5 text-green-600" />
                      {t.about.sendEmail}
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.expertise.title}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.expertise.subtitle}
              </p>
            </div>
            
            {/* Cloud Platforms */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t.expertise.cloudPlatforms}</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-blue-50 to-blue-100">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" className="w-10 h-10" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Google Cloud Platform</h4>
                    <p className="text-gray-600 mb-4">Professional Cloud Architect</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">Compute Engine</span>
                      <span className="px-3 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">Kubernetes</span>
                      <span className="px-3 py-1 bg-blue-200 text-blue-800 text-xs rounded-full">Cloud Run</span>
                    </div>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-orange-50 to-orange-100">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-12 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Amazon Web Services</h4>
                    <p className="text-gray-600 mb-4">Cloud Practitioner Certified</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-orange-200 text-orange-800 text-xs rounded-full">EC2</span>
                      <span className="px-3 py-1 bg-orange-200 text-orange-800 text-xs rounded-full">Lambda</span>
                      <span className="px-3 py-1 bg-orange-200 text-orange-800 text-xs rounded-full">S3</span>
                    </div>
                  </Card>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-purple-50 to-purple-100">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/OpenStack%C2%AE_Logo_2016.svg" alt="OpenStack" className="w-12 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">OpenStack</h4>
                    <p className="text-gray-600 mb-4">Private Cloud Infrastructure</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">Nova</span>
                      <span className="px-3 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">Neutron</span>
                      <span className="px-3 py-1 bg-purple-200 text-purple-800 text-xs rounded-full">Cinder</span>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
            
            {/* Development Stack */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t.expertise.developmentStack}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                  { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
                  { name: 'NestJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
                  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                  { name: 'ExpressJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
                  { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
                  { name: 'Jira', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
                  { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                      <img src={tech.logo} alt={tech.name} className="w-10 h-10" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Architecture Patterns */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{t.expertise.architecturePatterns}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    icon: Network, 
                    title: t.expertise.microservices, 
                    desc: t.expertise.microservicesDesc,
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
                  },
                  { 
                    icon: Server, 
                    title: t.expertise.serverless, 
                    desc: t.expertise.serverlessDesc,
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
                  },
                  { 
                    icon: Lock, 
                    title: t.expertise.securityFirst, 
                    desc: t.expertise.securityFirstDesc,
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Oauth_logo.svg'
                  },
                  { 
                    icon: Zap, 
                    title: t.expertise.performance, 
                    desc: t.expertise.performanceDesc,
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
                  }
                ].map((pattern, index) => (
                  <motion.div
                    key={pattern.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="text-center p-6 border-0 shadow-md hover:shadow-lg transition-all">
                      <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-xl flex items-center justify-center">
                        <img src={pattern.logo} alt={pattern.title} className="w-8 h-8" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{pattern.title}</h4>
                      <p className="text-gray-600 text-sm">{pattern.desc}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.solutions.title}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.solutions.subtitle}
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: locale === 'fr' ? 'PaieCash-QR Supermarché' : 'PaieCash-QR Supermarket',
                  description: locale === 'fr' ? 'Solution complète de gestion de supermarché avec système QR-code pour produits, backend API REST et dashboard administrateur.' : 'Complete supermarket management solution with QR-code system for products, REST API backend and admin dashboard.',
                  icon: Globe,
                  tech: ['ExpressJS', 'Sequelize', 'Angular 16', 'NgRx'],
                  metrics: locale === 'fr' ? ['API REST', 'QR-Code', 'Dashboard Admin'] : ['REST API', 'QR-Code', 'Admin Dashboard'],
                  color: 'blue',
                  link: 'https://paiecash.com/'
                },
                {
                  title: 'PaieCashPlay Auth WebSSO',
                  description: locale === 'fr' ? 'Solution d\'authentification centralisée WebSSO pour l\'écosystème PaieCashPlay, développée avec NextJS et Google Cloud Storage.' : 'Centralized WebSSO authentication solution for the PaieCashPlay ecosystem, developed with NextJS and Google Cloud Storage.',
                  icon: Code,
                  tech: ['NextJS', 'Google Cloud Storage', 'WebSSO', 'Authentication'],
                  metrics: locale === 'fr' ? ['SSO Centralisé', 'Sécurisé', 'Multi-plateforme'] : ['Centralized SSO', 'Secure', 'Multi-platform'],
                  color: 'green',
                  link: 'https://auth.paiecashplay.com'
                },
                {
                  title: locale === 'fr' ? 'Architecture AWS SmartestLotto' : 'AWS SmartestLotto Architecture',
                  description: locale === 'fr' ? 'Infrastructure AWS complète avec Load Balancing, Lambda Functions et Elastic Beanstalk pour la plateforme de loterie SmartestLotto.' : 'Complete AWS infrastructure with Load Balancing, Lambda Functions and Elastic Beanstalk for the SmartestLotto lottery platform.',
                  icon: Database,
                  tech: ['AWS Lambda', 'Elastic Beanstalk', 'Load Balancer', 'CloudWatch'],
                  metrics: locale === 'fr' ? ['Auto-scaling', 'Haute disponibilité', 'Performance'] : ['Auto-scaling', 'High availability', 'Performance'],
                  color: 'yellow',
                  link: 'https://smartestlotto.io'
                }
              ].map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${
                      solution.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      solution.color === 'green' ? 'from-green-500 to-green-600' :
                      'from-yellow-500 to-yellow-600'
                    }`}></div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          solution.color === 'blue' ? 'bg-blue-100' :
                          solution.color === 'green' ? 'bg-green-100' :
                          'bg-yellow-100'
                        }`}>
                          <solution.icon className={`w-6 h-6 ${
                            solution.color === 'blue' ? 'text-blue-600' :
                            solution.color === 'green' ? 'text-green-600' :
                            'text-yellow-600'
                          }`} />
                        </div>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {solution.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">{locale === 'fr' ? 'Stack Technologique' : 'Technology Stack'}</h4>
                          <div className="flex flex-wrap gap-2">
                            {solution.tech.map((tech) => (
                              <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">{locale === 'fr' ? 'Métriques Clés' : 'Key Metrics'}</h4>
                          <div className="flex flex-wrap gap-2">
                            {solution.metrics.map((metric) => (
                              <span key={metric} className={`px-3 py-1 text-xs rounded-full font-medium ${
                                solution.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                                solution.color === 'green' ? 'bg-green-100 text-green-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {metric}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Bouton pour voir l'architecture AWS */}
                        {(solution.title.includes('AWS SmartestLotto') || solution.title.includes('Architecture AWS')) && (
                          <div className="pt-2">
                            <Button 
                              variant="outline" 
                              className="w-full mb-2" 
                              onClick={() => setIsImageModalOpen(true)}
                            >
                              <Database className="w-4 h-4 mr-2" />
                              {locale === 'fr' ? 'Voir l\'Architecture' : 'View Architecture'}
                            </Button>
                          </div>
                        )}
                        
                        {solution.link && (
                          <div className="pt-2">
                            <Button variant="outline" className="w-full" asChild>
                              <a href={solution.link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                {locale === 'fr' ? 'Voir le projet' : 'View Project'}
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Architecture Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.solutions.architectureTitle}</h3>
                <p className="text-gray-600">{t.solutions.architectureSubtitle}</p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { 
                    title: 'Google Cloud', 
                    desc: 'Professional Cloud Architect certified',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
                  },
                  { 
                    title: 'DevOps/CI-CD', 
                    desc: 'Jenkins, GitHub Actions, Docker',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg'
                  },
                  { 
                    title: 'Kubernetes', 
                    desc: 'Container orchestration et scaling',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
                  },
                  { 
                    title: 'Gestion Projet', 
                    desc: 'Agile, Scrum, Jira Software',
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <img src={feature.logo} alt={feature.title} className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section - Nouvelle version */}
      <CertificationsShowcase />

      {/* Formation Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-white via-green-50 to-blue-50 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
        
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-5xl font-bold text-center mb-16 gradient-text"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {t.education.title}
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Card className="card-hover bg-gradient-to-br from-white to-blue-50 shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <GraduationCap className="mr-3 h-8 w-8 text-blue-600" />
                      Yaba-In
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3 text-lg font-medium">CTO & Gestionnaire de projet</p>
                    <p className="text-gray-600">Architectures cloud GCP, formation 200+ développeurs</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Card className="card-hover bg-gradient-to-br from-white to-green-50 shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Users className="mr-3 h-8 w-8 text-green-600" />
                      GIC Promote LTD
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3 text-lg font-medium">Consultant transformation digitale</p>
                    <p className="text-gray-600">Google Workspace, optimisation workflows cloud</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Card className="card-hover bg-gradient-to-br from-white to-purple-50 shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Rocket className="mr-3 h-8 w-8 text-purple-600" />
                      Formation & Enseignement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3 text-lg font-medium">Université des Montagnes & ISTIC</p>
                    <p className="text-gray-600">Génie logiciel, UML, Java, Android, bases de données</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            {/* Photos de formation */}
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.8 }}
                className="relative overflow-hidden"
              >
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-green-200 to-blue-200 rounded-2xl transform rotate-2"></div>
                <img 
                  src="/assets/photo-formation/formation-1.jpg" 
                  alt="Séance de formation"
                  className="relative w-full h-96 object-cover rounded-2xl shadow-xl"
                  style={{
                    filter: 'blur(0px) contrast(1.1) saturate(1.1) drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                    transform: 'rotate(270deg)'
                  }}
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-gray-800 font-semibold">Séance de formation</p>
                  <p className="text-gray-600 text-sm">Cours pratique en développement</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-purple-200 to-pink-200 rounded-2xl transform -rotate-2"></div>
                <img 
                  src="/assets/photo-formation/formation-avec-etudiant.jpg" 
                  alt="Avec mes étudiants"
                  className="relative w-full h-96 object-cover rounded-2xl shadow-xl"
                  style={{
                    filter: 'blur(0px) contrast(1.1) saturate(1.1) drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                    objectPosition: 'center top'
                  }}
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-gray-800 font-semibold">Avec mes étudiants</p>
                  <p className="text-gray-600 text-sm">Moment de partage et d'apprentissage</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-400 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto relative z-10 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-16 text-white">
              {t.vision.title}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div 
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Server className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t.vision.cloudInfrastructure}</h3>
                <p className="text-blue-100 leading-relaxed">{t.vision.cloudInfrastructureDesc}</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-green-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t.vision.techEducation}</h3>
                <p className="text-green-100 leading-relaxed">{t.vision.techEducationDesc}</p>
              </motion.div>
              
              <motion.div 
                className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t.vision.innovationHub}</h3>
                <p className="text-purple-100 leading-relaxed">{t.vision.innovationHubDesc}</p>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {t.vision.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                {t.contact.subtitle}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{t.contact.getInTouch}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{t.contact.email}</p>
                      <p className="text-gray-600">cednguendap@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{t.contact.phone}</p>
                      <p className="text-gray-600">+237 698 29 53 68</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Globe className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{t.contact.location}</p>
                      <p className="text-gray-600">{t.contact.locationValue}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">{t.contact.scheduleConsultation}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 mb-6">
                      {t.contact.scheduleConsultationDesc}
                    </p>
                    
                    <div className="space-y-3">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                        <a href="https://calendly.com/cednguendap/new-meeting" target="_blank">
                          {t.contact.scheduleReview}
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50" asChild>
                        <a href={locale === 'fr' ? '/assets/cv/new CV Cloud-PRoject Cedric Nguendap FR.pdf' : '/assets/cv/new CV Cloud-PRoject Cedric Nguendap EN.pdf'} download>
                          {t.contact.downloadPortfolio}
                        </a>
                      </Button>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500 text-center mb-4">{t.contact.connectSocial}</p>
                      <div className="flex justify-center space-x-4">
                        <a href="https://www.linkedin.com/in/cedric-nguendap-bedjama-143544175/" target="_blank" className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-blue-200 transition-colors">
                          <Linkedin className="h-5 w-5 text-blue-600" />
                        </a>
                        <a href="https://github.com/Cedric-Yaba-In" target="_blank" className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <Github className="h-5 w-5 text-gray-700" />
                        </a>
                        <a href="mailto:cednguendap@gmail.com" className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center hover:bg-green-200 transition-colors">
                          <Mail className="h-5 w-5 text-green-600" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Cloud className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Cédric Nguendap</h3>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                {t.footer.description}
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/cedric-nguendap-bedjama-143544175/" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://github.com/Cedric-Yaba-In" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="mailto:cednguendap@gmail.com" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.footer.services}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.cloudArchitecture}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.fullStackDev}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.devOps}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.consulting}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t.footer.expertise}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.gcp}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.microservices}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.kubernetes}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.modernApps}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>

      {/* Modal pour l'image agrandie */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-6xl max-h-full">
            <button 
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src="/assets/autres/architecture-aws-smartestlotto.png" 
              alt="Architecture AWS SmartestLotto - Vue agrandie"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  )
}