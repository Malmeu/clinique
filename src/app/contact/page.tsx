'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

export default function ContactPage() {
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
                Contactez <span className="text-blue-600 dark:text-blue-400">Nous</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Nous sommes là pour répondre à toutes vos questions et vous accompagner dans votre parcours de soins
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Envoyez-nous un <span className="text-blue-600 dark:text-blue-400">message</span>
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    required
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="appointment">Prendre rendez-vous</option>
                    <option value="information">Demande d'informations</option>
                    <option value="international">Services internationaux</option>
                    <option value="feedback">Commentaires ou suggestions</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition-colors duration-300"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Nos <span className="text-blue-600 dark:text-blue-400">coordonnées</span>
              </h2>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6">
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <FiMapPin className="mt-1 mr-3 text-blue-600 dark:text-blue-400 text-xl" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Adresse</h3>
                      <p className="text-gray-700 dark:text-gray-300">123 Rue Principale</p>
                      <p className="text-gray-700 dark:text-gray-300">Alger, Algérie</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <FiPhone className="mt-1 mr-3 text-blue-600 dark:text-blue-400 text-xl" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Téléphone</h3>
                      <p className="text-gray-700 dark:text-gray-300">+213 XX XX XX XX</p>
                      <p className="text-gray-700 dark:text-gray-300">+213 XX XX XX XX</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <FiMail className="mt-1 mr-3 text-blue-600 dark:text-blue-400 text-xl" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-700 dark:text-gray-300">contact@orchidee-nacer.dz</p>
                      <p className="text-gray-700 dark:text-gray-300">info@orchidee-nacer.dz</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <FiClock className="mt-1 mr-3 text-blue-600 dark:text-blue-400 text-xl" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Heures d'ouverture</h3>
                      <p className="text-gray-700 dark:text-gray-300">Lundi - Vendredi: 8h00 - 18h00</p>
                      <p className="text-gray-700 dark:text-gray-300">Samedi: 8h00 - 12h00</p>
                      <p className="text-gray-700 dark:text-gray-300">Dimanche: Fermé</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-600 text-white rounded-xl p-6">
                <h3 className="font-semibold text-xl mb-3">Service d'urgence</h3>
                <p className="mb-4">Pour les urgences médicales en dehors des heures d'ouverture, veuillez appeler notre ligne d'urgence :</p>
                <p className="text-xl font-bold">+213 XX XX XX XX</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Notre <span className="text-blue-600 dark:text-blue-400">emplacement</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Nous sommes idéalement situés au cœur d'Alger, facilement accessibles en transport en commun et en voiture
              </p>
            </motion.div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-md">
            <div className="relative h-96 w-full">
              <Image 
                src="/images/map.jpg" 
                alt="Carte de localisation" 
                fill
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                Questions <span className="text-blue-600 dark:text-blue-400">fréquentes</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Retrouvez les réponses aux questions les plus courantes concernant nos services
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Comment prendre rendez-vous ?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Vous pouvez prendre rendez-vous par téléphone, par email ou en remplissant le formulaire de contact sur cette page. Notre équipe administrative vous contactera dans les 24 heures pour confirmer votre rendez-vous.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Quels documents dois-je apporter lors de ma première visite ?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pour votre première visite, veuillez apporter votre carte d'identité, votre carte d'assurance maladie, vos ordonnances médicales récentes et tout dossier médical pertinent concernant votre condition rénale.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Comment se déroule une séance d'hémodialyse ?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Une séance d'hémodialyse standard dure environ 4 heures et se déroule dans un environnement confortable. Nos infirmiers spécialisés vous installeront et surveilleront vos constantes tout au long de la séance. Vous pourrez vous reposer, lire ou regarder la télévision pendant le traitement.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Proposez-vous des services pour les patients internationaux ?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Oui, nous accueillons des patients internationaux et proposons des services dédiés incluant l'assistance pour les formalités administratives, la coordination des soins, l'hébergement et le transport. Contactez notre service international pour plus d'informations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
