import { useState,useEffect } from 'react'
import './App.css'
import { motion } from 'framer-motion';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

   // Efecto de carga para animaciones
   const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div 
      className="main min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Efecto de overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 bg-amber-50 bg-opacity-95 rounded-xl shadow-2xl p-6 md:p-8 max-w-md w-full border-4 border-amber-900 mx-4"
        style={{ fontFamily: "'Rye', cursive" }}
      >
        {/* Encabezado con foto y número 28 */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-6 md:mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="mx-auto mb-4 md:mb-6 relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-amber-800 shadow-lg"
          >
            {/* Aquí debes reemplazar con tu foto */}
            <div className="w-full h-full bg-amber-200 flex items-center justify-center text-4xl md:text-6xl font-bold text-amber-900">
              🎂
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="text-5xl md:text-6xl font-bold text-amber-900 mb-2"
          >
            28
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-amber-800 text-lg md:text-xl"
          >
            ¡Es mi cumpleaños!
          </motion.p>
        </motion.div>

        {/* Información de fecha y hora */}
        <motion.div 
          variants={itemVariants}
          className="mb-4 md:mb-6 p-4 bg-amber-100 rounded-lg border-2 border-amber-700"
        >
          <h2 className="text-xl md:text-2xl font-bold text-amber-900 mb-2 text-center">Fecha y Hora</h2>
          <p className="text-amber-800 text-center text-base md:text-lg">Sábado, 15 de Junio</p>
          <p className="text-amber-800 text-center text-base md:text-lg">4:00 PM</p>
        </motion.div>

        {/* Ubicación con botón a Google Maps */}
        <motion.div 
          variants={itemVariants}
          className="mb-4 md:mb-6 p-4 bg-amber-100 rounded-lg border-2 border-amber-700"
        >
          <h2 className="text-xl md:text-2xl font-bold text-amber-900 mb-2 text-center">Ubicación</h2>
          <p className="text-amber-800 text-center mb-3 md:mb-4 text-base md:text-lg">Salón El Corral</p>
          <div className="text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://goo.gl/maps/example"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 md:px-6 md:py-3 bg-amber-700 text-amber-50 font-bold rounded-lg shadow-md hover:bg-amber-800 transition-colors text-sm md:text-base"
            >
              Ver en Google Maps
            </motion.a>
          </div>
        </motion.div>

        {/* Mesa de regalos */}
        <motion.div 
          variants={itemVariants}
          className="p-4 bg-amber-100 rounded-lg border-2 border-amber-700"
        >
          <h2 className="text-xl md:text-2xl font-bold text-amber-900 mb-2 text-center">Mesa de Regalos</h2>
          <p className="text-amber-800 text-center mb-3 md:mb-4 text-base md:text-lg">Tu presencia es mi mejor regalo</p>
          <div className="text-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#mesa-de-regalos"
              className="inline-block px-5 py-2 md:px-6 md:py-3 bg-amber-700 text-amber-50 font-bold rounded-lg shadow-md hover:bg-amber-800 transition-colors text-sm md:text-base"
            >
              Ver opciones
            </motion.a>
          </div>
        </motion.div>

        {/* Decoraciones vaqueras */}
        <div className="absolute -top-6 -left-6 text-4xl md:text-6xl text-amber-900">🤠</div>
        <div className="absolute -bottom-6 -right-6 text-4xl md:text-6xl text-amber-900">🐄</div>
        <div className="absolute -top-6 -right-6 text-3xl md:text-5xl text-amber-900">🎵</div>
        <div className="absolute -bottom-6 -left-6 text-3xl md:text-5xl text-amber-900">🎁</div>
      </motion.div>

      {/* Texto de confirmación de asistencia (solo visible en desktop) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 mt-6 bg-amber-50 bg-opacity-95 rounded-xl p-4 max-w-md w-full border-4 border-amber-900 hidden md:block"
      >
        <p className="text-center text-amber-800 font-bold">¡Confirma tu asistencia antes del 10 de Junio!</p>
      </motion.div>

      {/* Fuente personalizada */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');
          body {
            font-family: 'Rye', cursive;
          }
        `}
      </style>
    </div>
  )
}

export default App
