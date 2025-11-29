'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Cloud, 
  Code, 
  Database, 
  Smartphone, 
  Award, 
  Users, 
  Rocket, 
  Mail, 
  Phone, 
  Linkedin, 
  Github,
  ExternalLink,
  GraduationCap,
  Target,
  Satellite,
  Building
} from 'lucide-react'

export default function Home() {
  const skills = [
    { name: 'Google Cloud Platform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'NestJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Scrum/Agile', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    { name: 'UML', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/UML_logo.svg' }
  ]

  const tools = [
    { name: 'Jira Software', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
    { name: 'Odoo', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Odoo_logo.svg' },
    { name: 'Magento', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg' },
    { name: 'Trello', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
    { name: 'Slack', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
  ]

  const projects = [
    {
      name: 'PaieCashPlay',
      description: 'Plateforme fintech de gestion des paiements',
      tech: ['NestJS', 'Angular', 'MongoDB'],
      image: '/assets/project1.jpg'
    },
    {
      name: 'SDK Games Africa',
      description: 'SDK pour développeurs de jeux africains',
      tech: ['TypeScript', 'Node.js', 'Docker'],
      image: '/assets/project2.jpg'
    },
    {
      name: 'AGRO-PME',
      description: 'Solution digitale pour PME agricoles',
      tech: ['Angular', 'Java EE', 'MySQL'],
      image: '/assets/project3.jpg'
    }
  ]



  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-purple-100 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold gradient-text"
            >
              Cédric Nguendap
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              <motion.a 
                href="#profil" 
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105"
                whileHover={{ y: -2 }}
              >
                Profil
              </motion.a>
              <motion.a 
                href="#competences" 
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105"
                whileHover={{ y: -2 }}
              >
                Compétences
              </motion.a>
              <motion.a 
                href="#projets" 
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105"
                whileHover={{ y: -2 }}
              >
                Projets
              </motion.a>
              <motion.a 
                href="#certifications" 
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105"
                whileHover={{ y: -2 }}
              >
                Certifications
              </motion.a>
              <motion.a 
                href="#vision" 
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105"
                whileHover={{ y: -2 }}
              >
                Vision
              </motion.a>
              <motion.a 
                href="#contact" 
                className="text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium hover:scale-105"
                whileHover={{ y: -2 }}
              >
                Contact
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 hero-bg opacity-10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 floating" style={{animationDelay: '4s'}}></div>
        
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <motion.div 
              className="mb-12"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 pulse-glow shadow-2xl"></div>
                <img 
                  src="/assets/photo-cedric/cedric-2.jpg" 
                  alt="Cédric Nguendap"
                  className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-xl backdrop-blur-sm"
                  style={{
                    filter: 'blur(0px) contrast(1.1) saturate(1.2)',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.1) 100%)'
                  }}
                />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Nguendap Bedjama <span className="gradient-text">Cédric</span>
            </motion.h1>
            
            <motion.h2 
              className="text-3xl md:text-4xl text-gray-600 mb-8 font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Architecte Cloud & Développeur Full-Stack
            </motion.h2>
            
            <motion.p 
              className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              « Construire le futur technologique du Cameroun et de l'Afrique »
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-xl" asChild>
                  <a href="#projets">Découvrir mes projets</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold shadow-xl" asChild>
                  <a href="#contact">Me contacter</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Profil Section */}
      <section id="profil" className="py-20 px-6 bg-gradient-to-r from-white via-purple-50 to-blue-50 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500"></div>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <motion.h2 
              className="text-5xl font-bold text-center mb-16 gradient-text"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Mon Profil
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-purple-200 to-blue-200 rounded-2xl transform rotate-3"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Architecte Cloud & Développeur Full-Stack, passionné par l'innovation et la digitalisation. 
                      Avec plus de 4 ans d'expérience en conception d'architectures cloud, développement logiciel 
                      et gestion de projets, j'apporte des solutions modernes, scalables et adaptées aux besoins des entreprises.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Mon objectif est d'accompagner mes clients vers une transformation numérique réussie 
                      tout en préparant l'avenir technologique du Cameroun.
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <motion.img 
                    src="/assets/photo-cedric/cedric-3.jpg" 
                    alt="Cédric Nguendap - Photo professionnelle"
                    className="w-full h-80 object-cover rounded-2xl shadow-xl"
                    style={{
                      filter: 'blur(0px) contrast(1.1) saturate(1.1) drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))'
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>
                </div>
              </motion.div>
              
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="mb-8">
                  <motion.img 
                    src="/assets/photo-cedric/photo-cedric-1.jpeg" 
                    alt="Cédric Nguendap - Portrait"
                    className="w-full h-64 object-cover rounded-2xl shadow-xl mb-6"
                    style={{
                      filter: 'blur(0px) contrast(1.1) saturate(1.1) drop-shadow(0 10px 20px rgba(0,0,0,0.2))',
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))'
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.div whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Button variant="outline" className="w-full justify-start bg-gradient-to-r from-blue-50 to-blue-100 border-blue-300 hover:from-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300 p-6 text-lg" asChild>
                    <a href="https://linkedin.com" target="_blank">
                      <Linkedin className="mr-3 h-6 w-6" />
                      LinkedIn
                    </a>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Button variant="outline" className="w-full justify-start bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300 hover:from-gray-800 hover:to-gray-900 hover:text-white transition-all duration-300 p-6 text-lg" asChild>
                    <a href="https://github.com" target="_blank">
                      <Github className="mr-3 h-6 w-6" />
                      GitHub
                    </a>
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05, x: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Button variant="outline" className="w-full justify-start bg-gradient-to-r from-orange-50 to-orange-100 border-orange-300 hover:from-orange-500 hover:to-orange-600 hover:text-white transition-all duration-300 p-6 text-lg" asChild>
                    <a href="https://codechef.com" target="_blank">
                      <Code className="mr-3 h-6 w-6" />
                      CodeChef
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="competences" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 floating"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 floating" style={{animationDelay: '3s'}}></div>
        
        <div className="container mx-auto relative z-10">
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
              Technologies & Compétences
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 10,
                    z: 50
                  }}
                  className="perspective-1000"
                >
                  <Card className="text-center card-hover bg-gradient-to-br from-white to-gray-50 border-2 border-transparent hover:border-purple-200 shadow-lg">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="h-16 w-16 mx-auto mb-4"
                      >
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-full h-full object-contain drop-shadow-lg"
                        />
                      </motion.div>
                      <p className="font-semibold text-gray-800 text-lg">{skill.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Outils Section */}
            <motion.h3 
              className="text-3xl font-bold text-center mb-12 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Outils & Plateformes
            </motion.h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: (index * 0.1) + 0.8, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 10,
                    z: 50
                  }}
                  className="perspective-1000"
                >
                  <Card className="text-center card-hover bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-transparent hover:border-blue-200 shadow-lg">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                        className="h-16 w-16 mx-auto mb-4"
                      >
                        <img 
                          src={tool.logo} 
                          alt={tool.name}
                          className="w-full h-full object-contain drop-shadow-lg"
                        />
                      </motion.div>
                      <p className="font-semibold text-gray-800 text-lg">{tool.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        
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
              Projets Réalisés
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 50, rotateX: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.2, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    scale: 1.02
                  }}
                  className="group cursor-pointer"
                >
                  <Card className="overflow-hidden card-hover bg-white shadow-xl border-0 group-hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-56 bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="text-white text-6xl font-bold opacity-20"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {index + 1}
                        </motion.div>
                      </div>
                      <motion.div 
                        className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink className="h-6 w-6 text-white" />
                      </motion.div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                        {project.name}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span 
                            key={tech} 
                            className="px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 text-sm rounded-full font-medium border border-purple-200"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.2) + (techIndex * 0.1) + 0.5 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Certifications</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="text-center card-hover bg-gradient-to-br from-white to-blue-50 shadow-xl">
                  <CardContent className="p-8">
                    <img 
                      src="/assets/certifs/Professional-Cloud-Architect.png" 
                      alt="Google Professional Cloud Architect"
                      className="w-24 h-24 mx-auto mb-4 object-contain drop-shadow-lg"
                    />
                    <h3 className="font-bold text-xl mb-2 text-gray-800">Google Professional Cloud Architect</h3>
                    <p className="text-gray-600 text-lg">2025</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card className="text-center card-hover bg-gradient-to-br from-white to-orange-50 shadow-xl">
                  <CardContent className="p-8">
                    <img 
                      src="/assets/certifs/notion-essentiel-cloud-practitionner.png" 
                      alt="AWS Cloud Practitioner"
                      className="w-24 h-24 mx-auto mb-4 object-contain drop-shadow-lg"
                    />
                    <h3 className="font-bold text-xl mb-2 text-gray-800">AWS Cloud Practitioner</h3>
                    <p className="text-gray-600 text-lg">2024</p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Card className="text-center card-hover bg-gradient-to-br from-white to-green-50 shadow-xl">
                  <CardContent className="p-8">
                    <img 
                      src="/assets/certifs/fondement-gestion-projet.png" 
                      alt="Fondements Gestion de Projet"
                      className="w-24 h-24 mx-auto mb-4 object-contain drop-shadow-lg"
                    />
                    <h3 className="font-bold text-xl mb-2 text-gray-800">Fondements Gestion de Projet</h3>
                    <p className="text-gray-600 text-lg">2024</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

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
              Formation & Mentorat
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
                      Université des Montagnes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3 text-lg font-medium">Enseignant assistant</p>
                    <p className="text-gray-600">Génie logiciel, UML, architectures cloud hybrides</p>
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
                      ISTIC Bangangté
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3 text-lg font-medium">Enseignant assistant</p>
                    <p className="text-gray-600">Java, Android, bases de données distribuées</p>
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
                      Mentorat Yaba-In
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3 text-lg font-medium">Formateur & Mentor</p>
                    <p className="text-gray-600">Technologies web & cloud, gestion de projet agile</p>
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
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-green-200 to-blue-200 rounded-2xl transform rotate-2"></div>
                <img 
                  src="/assets/photo-formation/formation-1.jpg" 
                  alt="Séance de formation"
                  className="relative w-full h-80 object-cover rounded-2xl shadow-xl"
                  style={{
                    filter: 'blur(0px) contrast(1.1) saturate(1.1) drop-shadow(0 10px 20px rgba(0,0,0,0.2))'
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
                  className="relative w-full h-80 object-cover rounded-2xl shadow-xl"
                  style={{
                    filter: 'blur(0px) contrast(1.1) saturate(1.1) drop-shadow(0 10px 20px rgba(0,0,0,0.2))'
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
      <section id="vision" className="py-20 px-6 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 floating" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h2 
              className="text-6xl font-bold mb-16 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Vision & Mission
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="relative mb-6"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300">
                    <Building className="h-12 w-12 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-purple-200">Data Center Cameroun</h3>
                <p className="text-lg text-purple-100 leading-relaxed">Construire un data center pour l'autonomie numérique nationale</p>
              </motion.div>
              
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="relative mb-6"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300">
                    <Satellite className="h-12 w-12 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-blue-200">Satellite Camerounais</h3>
                <p className="text-lg text-blue-100 leading-relaxed">Lancer un satellite pour ancrer le pays dans l'industrie aérospatiale</p>
              </motion.div>
              
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="relative mb-6"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-indigo-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-pink-500/50 transition-all duration-300">
                    <Target className="h-12 w-12 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-pink-200">Ville Technologique</h3>
                <p className="text-lg text-pink-100 leading-relaxed">Développer une ville intelligente inspirée de Samsung City</p>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-2xl text-white max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Faire du Cameroun un leader africain en innovation et digitalisation, 
              tout en formant une génération capable de relever les défis numériques du continent.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-12 text-gray-800">Contact</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center space-x-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                    <span className="text-lg">cedric.nguendap@email.com</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center space-x-4">
                    <Phone className="h-6 w-6 text-green-600" />
                    <span className="text-lg">+237 6XX XXX XXX</span>
                  </div>
                </CardContent>
              </Card>
              <Button size="lg" className="w-full max-w-md">
                Prendre rendez-vous
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2025 Nguendap Bedjama Cédric. Tous droits réservés.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}