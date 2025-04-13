'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesPage() {
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
                Nos <span className="text-blue-600 dark:text-blue-400">Services</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Des soins spécialisés de qualité supérieure pour tous nos patients
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services principaux */}
      <section id="hemodialyse" className="py-16 bg-white dark:bg-gray-950">
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
                Hémodialyse <span className="text-blue-600 dark:text-blue-400">de haute qualité</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Notre clinique offre des services d'hémodialyse de pointe dans un environnement confortable et sécurisé. Nos équipements modernes et notre équipe médicale hautement qualifiée garantissent des traitements efficaces et personnalisés pour chaque patient.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nous utilisons les dernières technologies en matière d'hémodialyse pour assurer des traitements optimaux, tout en minimisant l'inconfort et en maximisant les résultats thérapeutiques.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Nos équipements comprennent :</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-8 space-y-2">
                <li>Machines d'hémodialyse de dernière génération</li>
                <li>Systèmes de filtration d'eau ultra-purs</li>
                <li>Fauteuils ergonomiques pour un confort optimal pendant les séances</li>
                <li>Moniteurs de surveillance continue des paramètres vitaux</li>
                <li>Environnement stérile et contrôlé</li>
              </ul>
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
                  src="/images/hemodialysis.jpg" 
                  alt="Service d'hu00e9modialyse" 
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

      {/* Consultation néphrologique */}
      <section id="consultation" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Consultation <span className="text-blue-600 dark:text-blue-400">néphrologique</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nos néphrologues expérimentés offrent des consultations spécialisées pour le diagnostic, le traitement et le suivi des maladies rénales. Chaque consultation est adaptée aux besoins spécifiques du patient, avec une attention particulière portée à l'historique médical et aux conditions actuelles.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Nos services de consultation incluent :</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-8 space-y-2">
                <li>Évaluation complète de la fonction rénale</li>
                <li>Diagnostic précoce des maladies rénales</li>
                <li>Plans de traitement personnalisés</li>
                <li>Gestion des maladies rénales chroniques</li>
                <li>Suivi régulier et ajustement des traitements</li>
                <li>Conseils en matière de nutrition et de mode de vie</li>
              </ul>
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
                  src="/images/consultation.jpeg" 
                  alt="Consultation néphrologique" 
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

      {/* Suivi médical personnalisé */}
      <section id="suivi" className="py-16 bg-white dark:bg-gray-950">
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
                Suivi médical <span className="text-blue-600 dark:text-blue-400">personnalisé</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nous croyons en une approche holistique des soins rénaux. Notre équipe multidisciplinaire travaille en étroite collaboration pour offrir un suivi médical complet et personnalisé à chaque patient, en tenant compte de tous les aspects de leur santé.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Notre suivi personnalisé comprend :</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-8 space-y-2">
                <li>Évaluations régulières de la fonction rénale</li>
                <li>Ajustement des traitements selon l'évolution de la maladie</li>
                <li>Coordination avec d'autres spécialistes médicaux si nécessaire</li>
                <li>Conseils nutritionnels adaptés aux besoins spécifiques</li>
                <li>Soutien psychologique pour les patients et leurs familles</li>
                <li>Education sur la gestion de la maladie au quotidien</li>
              </ul>
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
                  src="/images/medical-followup.jpeg" 
                  alt="Suivi médical personnalisé" 
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

      {/* Services internationaux */}
      <section id="international" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Services <span className="text-blue-600 dark:text-blue-400">internationaux</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                La Clinique Orchidée Nacer est fière d'accueillir des patients internationaux à la recherche de soins néphrologiques et d'hémodialyse de qualité. Nous comprenons les défis spécifiques auxquels sont confrontés les patients internationaux et nous nous efforçons de rendre leur expérience aussi fluide et confortable que possible.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Nos services internationaux incluent :</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-8 space-y-2">
                <li>Assistance pour les formalités administratives et les visas</li>
                <li>Coordination des rendez-vous et des traitements</li>
                <li>Services de traduction et d'interprétation</li>
                <li>Recommandations pour l'hébergement et le transport</li>
                <li>Transfert de dossiers médicaux et coordination avec les médecins du pays d'origine</li>
                <li>Programmes de traitement adaptés pour les patients en séjour temporaire</li>
              </ul>
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
                  src="/images/international-services.jpg" 
                  alt="Services internationaux" 
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

      {/* Tarifs et prise en charge */}
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
                Tarifs et <span className="text-blue-600 dark:text-blue-400">prise en charge</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Nous nous efforçons de rendre nos services accessibles à tous les patients. Nos tarifs sont transparents et nous travaillons avec diverses assurances et organismes de santé.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Options de paiement</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Assurance maladie nationale</li>
                  <li>Assurances privées</li>
                  <li>Conventions avec des organismes de santé</li>
                  <li>Paiement direct</li>
                  <li>Plans de paiement personnalisés</li>
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Pour les patients internationaux</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Devis personnalisés selon les besoins</li>
                  <li>Assistance pour les demandes de remboursement</li>
                  <li>Coordination avec les assurances internationales</li>
                  <li>Options de paiement flexibles</li>
                  <li>Transparence totale des coûts</li>
                </ul>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Pour obtenir des informations détaillées sur nos tarifs ou pour discuter des options de prise en charge, n'hésitez pas à nous contacter. Notre équipe administrative se fera un plaisir de vous aider et de répondre à toutes vos questions.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors duration-300"
              >
                Nous contacter pour les tarifs
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
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
              <h2 className="text-3xl font-bold mb-6">Besoin d'informations supplémentaires?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Notre équipe est à votre disposition pour répondre à toutes vos questions et vous aider à prendre rendez-vous.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="rounded-full bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 font-medium transition-colors duration-300"
                >
                  Prendre rendez-vous
                </Link>
                <Link 
                  href="/equipe" 
                  className="rounded-full bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-3 font-medium transition-colors duration-300"
                >
                  Rencontrer notre u00e9quipe
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
