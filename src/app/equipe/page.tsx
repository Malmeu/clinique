'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Nacer Boudiaf',
      role: 'Néphrologue en chef',
      image: '/images/doctor-1.jpg',
      bio: 'Spécialiste en néphrologie avec plus de 20 ans d\'expérience, le Dr. Boudiaf a fondé la Clinique Orchidée Nacer avec la vision d\'offrir des soins d\'hémodialyse de qualité supérieure en Algérie.',
    },
    {
      id: 2,
      name: 'Dr. Amina Khelif',
      role: 'Néphrologue',
      image: '/images/doctor-2.jpg',
      bio: 'Formée dans les meilleurs hôpitaux d\'Europe, le Dr. Khelif apporte son expertise en maladies rénales chroniques et en transplantation rénale.',
    },
    {
      id: 3,
      name: 'Dr. Karim Benali',
      role: 'Néphrologue',
      image: '/images/doctor-3.jpg',
      bio: 'Spécialiste des traitements d\'hémodialyse avancés, le Dr. Benali se consacre à améliorer la qualité de vie des patients souffrant d\'insuffisance rénale.',
    },
    {
      id: 4,
      name: 'Mme. Samia Hadj',
      role: 'Infirmière en chef',
      image: '/images/nurse-1.jpg',
      bio: 'Avec 15 ans d\'expérience en soins infirmiers spécialisés en néphrologie, Mme. Hadj supervise notre équipe d\'infirmiers et assure des soins de la plus haute qualité.',
    },
    {
      id: 5,
      name: 'M. Youcef Meziane',
      role: 'Technicien médical',
      image: '/images/tech-1.jpg',
      bio: 'Expert en équipements d\'hémodialyse, M. Meziane assure le bon fonctionnement et la maintenance de nos machines pour garantir des traitements sûrs et efficaces.',
    },
    {
      id: 6,
      name: 'Mme. Leila Mansouri',
      role: 'Nutritionniste',
      image: '/images/nutritionist.jpg',
      bio: 'Spécialisée en nutrition pour les patients atteints de maladies rénales, Mme. Mansouri élabore des plans alimentaires personnalisés pour optimiser la santé de nos patients.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Notre <span className="text-blue-600 dark:text-blue-400">Équipe</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Des professionnels dévoués et hautement qualifiés à votre service
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-64 w-full">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className="object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-700 dark:text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Notre <span className="text-blue-600 dark:text-blue-400">approche</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Une équipe multidisciplinaire travaillant en synergie pour offrir des soins complets
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Collaboration</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Notre équipe travaille en étroite collaboration pour assurer une approche holistique des soins. Les néphrologues, infirmiers, techniciens et nutritionnistes se réunissent régulièrement pour discuter des cas et optimiser les plans de traitement de chaque patient.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Formation continue</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Nous investissons dans la formation continue de notre équipe pour rester à la pointe des avancées médicales. Nos professionnels participent régulièrement à des conférences internationales et des programmes de développement professionnel.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Rejoindre notre équipe */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Rejoindre <span className="text-blue-600 dark:text-blue-400">notre équipe</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Nous sommes toujours à la recherche de professionnels talentueux et passionnés pour rejoindre notre équipe. Si vous êtes intéressé par une carrière dans un environnement médical de pointe, nous serions ravis d'échanger avec vous.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors duration-300"
              >
                Postuler
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Prêt à rencontrer notre équipe?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Prenez rendez-vous dès aujourd'hui pour une consultation avec l'un de nos spécialistes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="rounded-full bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 font-medium transition-colors duration-300"
                >
                  Prendre rendez-vous
                </Link>
                <Link 
                  href="/services" 
                  className="rounded-full bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3 font-medium transition-colors duration-300"
                >
                  Nos services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
