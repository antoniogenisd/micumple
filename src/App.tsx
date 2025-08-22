import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Animaciones de entrada
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const photoVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const numberVariants: Variants = {
    hidden: { scale: 0, y: 50 },
    visible: {
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.5
      }
    }
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    const fallback = img.nextElementSibling as HTMLElement
    if (fallback) {
      img.style.display = 'none'
      fallback.style.display = 'flex'
    }
  }

  return (
    <div className="wooden-background">
      {/* Overlay sutil para mejorar legibilidad */}
      <div className="overlay" />

      {/* Contenido principal */}
      <div className="main-content">
        
        {/* Header principal con foto y número */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="header-section"
        >
          {/* Foto del cumpleañero */}
          <motion.div
            variants={photoVariants}
            className="photo-container"
          >
            <div className="photo-frame">
              {/* Tu foto real */}
              <img 
                src="/images/yo.jpg" 
                alt="Foto del cumpleañero"
                className="photo-image"
                onError={handleImageError}
              />
              <div className="photo-fallback" style={{ display: 'none' }}>
                🤠
              </div>
            </div>
            
            {/* Decoración vaquera alrededor de la foto */}
            <div className="photo-decoration top-left">⭐</div>
            <div className="photo-decoration top-right">⭐</div>
            <div className="photo-decoration bottom-left">⭐</div>
            <div className="photo-decoration bottom-right">⭐</div>
          </motion.div>

          {/* Número 28 */}
          <motion.h1
            variants={numberVariants}
            className="birthday-number font-cowboy"
          >
            #28
          </motion.h1>

          {/* Título del cumpleaños */}
          <motion.p
            variants={itemVariants}
            className="birthday-title font-cowboy"
          >
            ¡Es mi cumpleaños!
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="birthday-subtitle font-cowboy"
          >
            Te invito a celebrar conmigo este día especial
          </motion.p>
        </motion.div>

        {/* Información del evento */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="info-section"
        >
          <div className="cards-grid">
            
            {/* Fecha y Hora */}
            <motion.div
              variants={itemVariants}
              className="info-card"
            >
              <h2 className="card-title font-cowboy">
                📅 Fecha y Hora
              </h2>
              <div className="space-y-3">
                <p className="card-content font-cowboy">
                  Viernes, 5 de Septiembre
                </p>
                <p className="card-content font-cowboy">
                  6:00 PM
                </p>
              </div>
            </motion.div>

            {/* Ubicación */}
            <motion.div
              variants={itemVariants}
              className="info-card"
            >
              <h2 className="card-title font-cowboy">
                🏠 Ubicación
              </h2>
              <p className="card-content font-cowboy mb-6">
                Salón Orcelliss (De rey Orihuela)
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://maps.app.goo.gl/PydWSJ1ahUyZMqhp7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-cowboy"
              >
                🗺️ Ver en Google Maps
              </motion.a>
            </motion.div>

            {/* Mesa de Regalos */}
            <motion.div
              variants={itemVariants}
              className="info-card"
            >
              <h2 className="card-title font-cowboy">
                🎁 Mesa de Regalos
              </h2>
              <p className="card-content font-cowboy mb-6">
                Tu presencia es mi mejor regalo, pero si quieres traer algo...
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.amazon.com.mx/registries/gl/guest-view/12CC37ZRV02PI?ref_=cm_sw_r_cp_ud_ggr-subnav-share_2G0Y4GFYE2TZ042YR2KN"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-cowboy"
              >
                Ver opciones de regalos
              </motion.a>
            </motion.div>

            {/* Bebidas */}
            <motion.div
              variants={itemVariants}
              className="info-card"
            >
              <h2 className="card-title font-cowboy">
                🍺 Bebidas
              </h2>
              <p className="card-content font-cowboy mb-6">
                Habrá bebidas alcohólicas disponibles, pero si quieres traer algo más, ¡está perfecto!
              </p>

            </motion.div>

            {/* Vestimenta Vaquera */}
            <motion.div
              variants={itemVariants}
              className="info-card"
            >
              <h2 className="card-title font-cowboy">
                🤠 Vestimenta Vaquera
              </h2>
              <p className="card-content font-cowboy mb-6">
                ¡Desempolven sus sombreros y sus botas! La temática de la fiesta es vestimenta vaquera.
              </p>

            </motion.div>
          </div>
        </motion.div>

        {/* Confirmación de asistencia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="confirmation-card"
        >
          <p className="confirmation-text font-cowboy mb-4">
            ¡Confirma tu asistencia antes del 1 de Septiembre!
          </p>
          <div className="text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/525592311815?text=¡Hola! Confirmo mi asistencia a tu cumpleaños #28 🎉🤠"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn font-cowboy"
            >
              <span className="mr-2 text-white">📱</span>
              Confirmar asistencia
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Decoraciones vaqueras flotantes */}
      <div className="fixed top-4 left-4 text-4xl lg:text-5xl text-amber-900 z-20 animate-bounce">🤠</div>
      <div className="fixed top-4 right-4 text-4xl lg:text-5xl text-amber-900 z-20 animate-bounce" style={{ animationDelay: '0.5s' }}>🐄</div>
      <div className="fixed bottom-4 left-4 text-4xl lg:text-5xl text-amber-900 z-20 animate-bounce" style={{ animationDelay: '1s' }}>🎵</div>
      <div className="fixed bottom-4 right-4 text-4xl lg:text-5xl text-amber-900 z-20 animate-bounce" style={{ animationDelay: '1.5s' }}>🎁</div>

      {/* Fuente personalizada */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');
        `}
      </style>
    </div>
  )
}

export default App
