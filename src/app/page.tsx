'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-background.jpg" 
            alt="Clinique Hémodialyse" 
            fill 
            priority
            className="object-cover object-center brightness-[0.85]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-gray-900/70" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Clinique HÉMODIALYSE <span className="text-blue-300">Orchidée Nacer</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Des soins d'hémodialyse de qualité supérieure avec une approche centrée sur le patient
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium transition-colors duration-300"
              >
                Prendre rendez-vous
              </Link>
              <Link 
                href="/services" 
                className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-8 py-3 font-medium transition-colors duration-300"
              >
                Découvrir nos services
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path 
                d="M12 5V19M12 19L5 12M12 19L19 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* À propos Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image 
                  src="/images/about-clinic.jpg" 
                  alt="Notre clinique" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Une clinique d'excellence <span className="text-blue-600 dark:text-blue-400">à votre service</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                La Clinique HÉMODIALYSE Orchidée Nacer est un établissement médical spécialisé de premier plan en Algérie, offrant des services d'hémodialyse et de néphrologie de haute qualité. 
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Notre mission est de fournir des soins personnalisés et compassionnels à tous nos patients, en utilisant les technologies médicales les plus avancées et en suivant les normes internationales.
              </p>
              <Link 
                href="/a-propos" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                En savoir plus
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Nos <span className="text-blue-600 dark:text-blue-400">Services</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Découvrez notre gamme complète de services médicaux spécialisés conçus pour répondre aux besoins de nos patients nationaux et internationaux.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Hémodialyse</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                Traitement d'hémodialyse avec des équipements modernes et un personnel hautement qualifié pour assurer le meilleur confort et sécurité.
              </p>
              <Link 
                href="/services#hemodialyse" 
                className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center"
              >
                En savoir plus
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
            
            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Consultation néphrologique</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                Consultations spécialisées avec nos néphrologues expérimentés pour le diagnostic et le traitement des maladies rénales.
              </p>
              <Link 
                href="/services#consultation" 
                className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center"
              >
                En savoir plus
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
            
            {/* Service 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Services internationaux</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                Programmes spéciaux pour les patients internationaux, incluant l'assistance pour le voyage, l'hébergement et la traduction.
              </p>
              <Link 
                href="/services#international" 
                className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center"
              >
                En savoir plus
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors duration-300"
            >
              Tous nos services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Ce que disent <span className="text-blue-600 dark:text-blue-400">nos patients</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                Découvrez les témoignages de nos patients qui ont bénéficié de nos services médicaux spécialisés.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Témoignage 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image 
                    src="/images/testimonial-1.jpg" 
                    alt="Patient" 
                    width={56} 
                    height={56}
                    className="rounded-full" 
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Ahmed Benali</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Patient depuis 2 ans</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "L'équipe médicale de la Clinique Orchidée Nacer est exceptionnelle. Leur professionnalisme et leur attention aux détails m'ont aidé à améliorer considérablement ma qualité de vie."
              </p>
            </motion.div>
            
            {/* Témoignage 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image 
                    src="/images/testimonial-2.jpg" 
                    alt="Patient" 
                    width={56} 
                    height={56}
                    className="rounded-full" 
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Samia Khalid</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Patiente internationale</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "Je suis venue de l'étranger pour recevoir des soins à la Clinique Orchidée Nacer. Leur service international est impeccable, et l'équipe a rendu mon séjour aussi confortable que possible."
              </p>
            </motion.div>
            
            {/* Témoignage 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image 
                    src="/images/testimonial-3.jpg" 
                    alt="Patient" 
                    width={56} 
                    height={56}
                    className="rounded-full" 
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Karim Meziane</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Patient depuis 3 ans</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "Les médecins et infirmières sont non seulement compétents, mais aussi très attentionnés. Ils prennent le temps d'expliquer chaque procédure et de répondre à toutes mes questions."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Prêt à recevoir des soins d'excellence?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Contactez-nous dès aujourd'hui pour prendre rendez-vous ou pour obtenir plus d'informations sur nos services.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 font-medium transition-colors duration-300"
              >
                Nous contacter
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
