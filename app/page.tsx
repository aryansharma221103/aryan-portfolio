'use client'

import { useState, useEffect } from 'react'
import { Github, Linkedin, ExternalLink, Mail, Award, Code, Database, Globe, Shield, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const projects = [
    {
      title: "Smart Automated Classroom System",
      description: "Created a digital twin classroom with Unity, integrating ML-based human detection and device control via custom API.",
      technologies: ["Unity", "Machine Learning", "API"],
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Secret Service Management System",
      description: "Built a secure mission assignment system with login, mission selection, and automated email notifications.",
      technologies: ["Java", "SQLite"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Hospital Navigation System",
      description: "AI-based indoor hospital navigator using map input and shortest path algorithms for department routing.",
      technologies: ["Python", "Jupyter Notebook", "AI"],
      icon: <Globe className="w-6 h-6" />
    }
  ]

  const certifications = [
    {
      title: "GitHub Foundations",
      issuer: "GitHub & Microsoft",
      description: "Basic proficiency in Git, GitHub repositories, collaboration, and version control workflows.",
      icon: <Github className="w-5 h-5" />
    },
    {
      title: "Alteryx Designer Core",
      issuer: "Alteryx",
      description: "Validated core data transformation, parsing, and workflow design using Alteryx Designer.",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "FCA Cybersecurity",
      issuer: "Fortinet",
      description: "Certified skills in firewall setup, VPNs, threat prevention, and FortiGate configuration.",
      icon: <Shield className="w-5 h-5" />
    }
  ]

  const skills = {
    "Languages": ["Python", "C", "C++", "Java", "C#", "JavaScript"],
    "Frontend": ["HTML", "CSS", "JavaScript"],
    "Backend & DB": ["MySQL", "SQLite"],
    "Frameworks & Tools": ["Unity", "Git", "REST APIs"],
    "Other": ["Data Structures & Algorithms", "OOP", "Problem Solving"]
  }

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-[#F5E8D8]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C] via-[#1C1C1C] to-[#2A2A2A] opacity-50"></div>
        <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6F61] via-[#DAA520] to-[#FF4500] rounded-full p-1 animate-pulse">
                <div className="bg-[#1C1C1C] rounded-full p-1">
                  <img 
                    src="/images/aryan-profile.jpg" 
                    alt="Aryan Sharma" 
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl"
                  />
                </div>
              </div>
              <img 
                src="/images/aryan-profile.jpg" 
                alt="Aryan Sharma" 
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-2xl relative z-10"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF6F61] rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#DAA520] rounded-full opacity-40 animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F5E8D8] via-[#DAA520] to-[#FF6F61] bg-clip-text text-transparent">
            Aryan Sharma
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#F5E8D8]/80 font-light">
            Full-Stack Developer | Cybersecurity Enthusiast
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#FF6F61] text-[#FF6F61] hover:bg-[#FF6F61] hover:text-[#1C1C1C] transition-all duration-300 shadow-lg hover:shadow-[#FF4500]/20"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-[#1C1C1C] transition-all duration-300 shadow-lg hover:shadow-[#DAA520]/20"
              asChild
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#F5E8D8] text-[#F5E8D8] hover:bg-[#F5E8D8] hover:text-[#1C1C1C] transition-all duration-300 shadow-lg hover:shadow-[#F5E8D8]/20"
              asChild
            >
              <a href="mailto:aryansh.221103@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#FF6F61]">
          <GraduationCap className="w-8 h-8 inline-block mr-3" />
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-[#2A2A2A] border-[#3A3A3A] shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#FF6F61]/30">
            <CardHeader>
              <CardTitle className="text-[#F5E8D8] text-xl">SRM Institute of Science and Technology</CardTitle>
              <CardDescription className="text-[#DAA520] font-medium">Bachelor of Engineering (Honours) in Computer Science</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#F5E8D8]/70">Sept 2022 – Sept 2026</p>
              <p className="text-[#F5E8D8]/70 mt-1">Chennai</p>
            </CardContent>
          </Card>
          <Card className="bg-[#2A2A2A] border-[#3A3A3A] shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#DAA520]/30">
            <CardHeader>
              <CardTitle className="text-[#F5E8D8] text-xl">Fr. Agnel School</CardTitle>
              <CardDescription className="text-[#DAA520] font-medium">Senior Secondary Education (CBSE)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#F5E8D8]/70">Apr 2021 – Apr 2022</p>
              <p className="text-[#F5E8D8]/70 mt-1">Noida, India</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#FF6F61]">
          <Code className="w-8 h-8 inline-block mr-3" />
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-[#2A2A2A] border-[#3A3A3A] shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#FF6F61]/30 group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#FF6F61] group-hover:text-[#FF4500] transition-colors duration-300">
                    {project.icon}
                  </div>
                  <CardTitle className="text-[#F5E8D8] text-lg">{project.title}</CardTitle>
                </div>
                <CardDescription className="text-[#F5E8D8]/70 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-[#FF6F61]/10 text-[#FF6F61] border-[#FF6F61]/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#DAA520]">
          <Database className="w-8 h-8 inline-block mr-3" />
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Card key={index} className="bg-[#2A2A2A] border-[#3A3A3A] shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#DAA520]/30">
              <CardHeader>
                <CardTitle className="text-[#DAA520] text-lg">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="border-[#F5E8D8]/30 text-[#F5E8D8] hover:bg-[#F5E8D8]/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#FF6F61]">
          <Award className="w-8 h-8 inline-block mr-3" />
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-[#2A2A2A] border-[#3A3A3A] shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-[#FF6F61]/30 group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#FF6F61] group-hover:text-[#FF4500] transition-colors duration-300">
                    {cert.icon}
                  </div>
                  <div>
                    <CardTitle className="text-[#F5E8D8] text-lg">{cert.title}</CardTitle>
                    <p className="text-[#DAA520] text-sm font-medium">{cert.issuer}</p>
                  </div>
                </div>
                <CardDescription className="text-[#F5E8D8]/70 leading-relaxed">
                  {cert.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-[#3A3A3A] bg-[#2A2A2A]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#F5E8D8]/60 mb-4">
            © 2024 Aryan Sharma. Built with React & Tailwind CSS.
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#F5E8D8]/60 hover:text-[#FF6F61] transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#F5E8D8]/60 hover:text-[#DAA520] transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:aryansh.221103@gmail.com"
              className="text-[#F5E8D8]/60 hover:text-[#FF4500] transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
