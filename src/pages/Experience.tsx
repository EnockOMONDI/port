import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Creative and Tech Officer',
      company: 'Novustell Travel',
      period: '2021–Present',
      description: 'Leading the creative and technical direction of the company, managing brand identity, developing web solutions, and implementing digital marketing strategies. Increased online presence by 200% through strategic digital campaigns.',
      responsibilities: [
        'Developed and maintained company website using Django and React',
        'Created and executed digital marketing campaigns',
        'Managed brand identity and visual communications',
        'Led technical implementation of booking systems',
      ],
    },
    {
      title: 'Creative Lead',
      company: 'Kipekee Designs',
      period: '2024–Present',
      description: 'Spearheading creative projects and managing client relationships. Responsible for delivering high-quality design solutions across various platforms and media.',
      responsibilities: [
        'Led brand identity projects for major clients',
        'Managed team of designers and developers',
        'Developed creative strategies and presentations',
        'Oversaw quality control of all deliverables',
      ],
    },
    {
      title: 'Founder',
      company: 'Juice Wave Radio',
      period: '2019–2021',
      description: 'Founded and managed an online radio platform, creating engaging content and building a community of listeners. Developed the technical infrastructure and managed all aspects of the business.',
      responsibilities: [
        'Developed and maintained streaming platform',
        'Created and managed content strategy',
        'Built and engaged community of listeners',
        'Managed technical operations and infrastructure',
      ],
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900">Professional Experience</h1>
            <p className="mt-4 text-xl text-gray-600">
              A journey through my professional career and achievements
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} md:w-1/2 ${
                    index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'
                  }`}
                >
                  <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                    <div className="absolute top-8 -mt-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow">
                      <Briefcase className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>

                    <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                      {experience.period}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.title}</h3>
                    <h4 className="text-lg text-blue-600 mb-4">{experience.company}</h4>
                    
                    <p className="text-gray-600 mb-4">{experience.description}</p>

                    <div className="space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <p key={respIndex} className="text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {responsibility}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;