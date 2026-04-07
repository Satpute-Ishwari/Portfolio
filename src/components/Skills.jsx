import React from 'react'
import ScrollAnimated from './ScrollAnimated'
import { Code2, Database, Brain, Wrench } from 'lucide-react'

const SkillBadge = ({ name, icon }) => (
  <div className="group cursor-default">
    <div className="glass-effect border border-neon-blue/30 rounded-lg px-5 py-3 hover:border-neon-blue/70 transition-all duration-300 hover-scale hover:shadow-glow">
      <div className="flex items-center gap-3">
        {icon && <span className="text-xl">{icon}</span>}
        <span className="font-medium text-gray-300 group-hover:text-neon-blue text-sm transition-colors duration-300">
          {name}
        </span>
      </div>
    </div>
  </div>
)

const SkillCategory = ({ category, icon: CategoryIcon, skills }) => (
  <ScrollAnimated>
    <div className="space-y-5">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-neon-blue/20 border border-neon-blue/40">
          <CategoryIcon className="w-6 h-6 text-neon-blue" />
        </div>
        <h3 className="text-2xl font-bold text-white">{category}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {skills.map((skill, idx) => (
          <SkillBadge 
            key={idx} 
            name={skill.name} 
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  </ScrollAnimated>
)

export default function Skills() {
  const skillsCategories = [
    {
      category: 'Frontend',
      icon: Code2,
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'JavaScript', icon: '📝' },
        { name: 'HTML/CSS', icon: '🌐' },
        { name: 'Responsive Design', icon: '📱' },
      ]
    },
    {
      category: 'Backend',
      icon: Database,
      skills: [

        { name: 'Java', icon: '☕' },
        { name : 'Spring Boot', icon: '🌱' },
        { name: 'Python', icon: '🐍' },
        { name: 'RESTful APIs', icon: '🔌' },
        { name: 'Microservices', icon: '🔄' },
      ]
    },
    {
      category: 'Databases & Storage',
      icon: Database,
      skills: [
        { name: 'MongoDB', icon: '🍃' },
        { name: 'MySQL', icon: '🔵' },
        { name: 'SQL', icon: '📊' },

      ]
    },
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'Scikit-learn', icon: '📈' },
        { name: 'Python ML', icon: '🤖' },
        { name: 'NLP', icon: '💬' },
        { name: 'Data Analysis', icon: '📉' },
        { name: 'Deep Learning', icon: '🔬' },
      ]
    },
    {
      category: 'Cybersecurity',
      icon: Wrench,
      skills: [
        { name: 'Threat Intelligence', icon: '🛡️' },
        { name: 'Secure Coding', icon: '🔐' },
        { name: 'Encryption', icon: '🔒' },
        { name: 'Network Security', icon: '🌍' },
      ]
    },
    {
      category: 'Tools & Platforms',
      icon: Wrench,
      skills: [
        { name: 'Git', icon: '📦' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'Linux', icon: '🐧' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Postman', icon: '📡' },
      ]
    }
  ]

  return (
    <section className="py-20 px-4 md:py-32 relative">
      <div className="max-w-6xl mx-auto">
        
        <ScrollAnimated>
                  <div className="mb-20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-1 w-12 bg-gradient-to-r from-neon-blue to-neon- rounded-full"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-6">
                      <span className="text-gradient">Skills & Technologies</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-neon-blue to-neon- rounded-full"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mt-4">
              A comprehensive overview of my technical expertise across various domains and technologies.
            </p>
                  </div>
                  
                </ScrollAnimated>
                

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-14">
          {skillsCategories.map((categoryData, idx) => (
            <SkillCategory
              key={idx}
              category={categoryData.category}
              icon={categoryData.icon}
              skills={categoryData.skills}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
