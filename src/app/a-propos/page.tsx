'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
                À Propos de <span className="text-blue-600 dark:text-blue-400">Clinique Orchidée Nacer</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Un centre d'excellence en hémodialyse et soins néphrologiques
              </p>
            </motion.div>
          </div>

          <div className="relative rounded-2xl overflow-hidden mb-16">
            <Image 
              src="/images/about-hero.jpg" 
              alt="Clinique Orchidée Nacer" 
              width={1200} 
              height={600}
              className="w-full h-auto object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Notre <span className="text-blue-600 dark:text-blue-400">Histoire</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Fondée en 2015, la Clinique HÉMODIALYSE Orchidée Nacer a été créée avec une vision claire : fournir des soins d'hémodialyse de la plus haute qualité en Algérie. Notre fondateur, le Dr. <b>LAMRIBEN Salim</b>, néphrologue de renom, a constaté un besoin croissant de services d'hémodialyse de qualité dans le pays.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Depuis notre création, nous avons constamment évolué pour intégrer les dernières avancées médicales et technologies dans le domaine de la néphrologie et de l'hémodialyse. Notre engagement envers l'excellence et les soins centrés sur le patient nous a permis de devenir l'un des centres d'hémodialyse les plus respectés d'Algérie.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Aujourd'hui, nous sommes fiers de servir non seulement la population locale, mais aussi des patients internationaux qui choisissent notre clinique pour la qualité de nos soins et notre approche personnalisée.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image 
                  src="/images/about-history.jpg" 
                  alt="Notre histoire" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notre Mission et Vision */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Notre <span className="text-blue-600 dark:text-blue-400">Mission et Vision</span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Notre Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Notre mission est de fournir des soins d'hémodialyse et néphrologiques de la plus haute qualité, accessibles à tous les patients, dans un environnement confortable et rassurant. Nous nous engageons à :
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-4 space-y-2">
                <li>Offrir des traitements d'hémodialyse avec les technologies les plus avancées</li>
                <li>Fournir des soins personnalisés adaptés aux besoins spécifiques de chaque patient</li>
                <li>Maintenir les plus hauts standards de sécurité et d'hygiène</li>
                <li>Améliorer continuellement la qualité de vie de nos patients</li>
                <li>Former et développer notre équipe médicale pour garantir l'excellence des soins</li>
              </ul>
            </motion.div>
            
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8"
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Notre Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Notre vision est de devenir le centre d'hémodialyse de référence en Afrique du Nord, reconnu pour :
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-4 space-y-2">
                <li>L'excellence de nos soins médicaux et de notre service aux patients</li>
                <li>Notre approche innovante dans le traitement des maladies rénales</li>
                <li>Notre contribution à la recherche et à l'éducation dans le domaine de la néphrologie</li>
                <li>Notre capacité à attirer des patients internationaux grâce à la qualité de nos services</li>
                <li>Notre impact positif sur la santé rénale de la population algérienne</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Nos <span className="text-blue-600 dark:text-blue-400">Valeurs</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Ces principes fondamentaux guident chacune de nos actions et décisions
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Valeur 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Compassion</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous traitons chaque patient avec empathie et bienveillance, en reconnaissant leurs besoins émotionnels autant que physiques.
              </p>
            </motion.div>
            
            {/* Valeur 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Excellence</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous nous engageons à maintenir les plus hauts standards de qualité dans tous les aspects de nos soins et services.
              </p>
            </motion.div>
            
            {/* Valeur 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Travail d'équipe</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous collaborons efficacement entre professionnels de santé pour offrir une approche coordonnée et holistique des soins.
              </p>
            </motion.div>
            
            {/* Valeur 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous adoptons les dernières avancées médicales et technologies pour améliorer constamment nos traitements et services.
              </p>
            </motion.div>
            
            {/* Valeur 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Engagement</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous nous engageons pleinement dans la prise en charge de nos patients sur le long terme, en établissant des relations de confiance durables.
              </p>
            </motion.div>
            
            {/* Valeur 6 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center"
            >
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Intégrité</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Nous agissons avec honnêteté, transparence et éthique dans toutes nos interactions avec les patients et partenaires.
              </p>
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
              <h2 className="text-3xl font-bold mb-6">Vous souhaitez en savoir plus?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Contactez-nous dès aujourd'hui pour prendre rendez-vous ou pour obtenir plus d'informations sur nos services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="rounded-full bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 font-medium transition-colors duration-300"
                >
                  Nous contacter
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
