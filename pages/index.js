import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NightMode from '../components/NightMode';

// Edit this list to add or change products.
const products = [
  { name: 'TruBooker Drivers', image: '/images/truD.png' },
  { name: 'DataEase', image: '/images/dataease.jpeg' },
  { name: 'Ruuvoo', image: '/images/ruuvoo.png' },
  { name: 'TruBooker Passenger', image: '/images/truP.png' },
{ name: 'Elite Resources', image: '/images/Elite.png' },
{ name: 'Hearts United', image: '/images/hearts.jpeg' },
{ name: 'Royale Cleaners', image: '/images/royale.jpeg' },
{ name: 'WMEEF', image: '/images/wmeef.png' },


];

function Home() {
  return (
    <div className="pt-32 md:pt-40 pb-16">
      <Head>
        <title>Nexatech | People, Technologies and Possibilities</title>
        <meta
          name="description"
          content="Nexatech — excellence and timely delivery of solutions, improvement and possibilities."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Theme toggle */}
      <div className="flex justify-end px-4 md:px-12 mb-6">
        <NightMode />
      </div>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center px-4 mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-monteserat text-nexagreen leading-tight">
          Nexatech
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-popins text-nexablack dark:text-nexawhite">
          Excellence and timely delivery of solutions, improvement and possibilities.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/Contact"
            className="bg-nexagreen hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-nexagreen"
          >
            Get on board
          </Link>
          <Link
            href="/Projects"
            className="border-2 border-nexagreen text-nexagreen hover:bg-nexagreen hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Explore our work
          </Link>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center px-4 mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-monteserat text-nexagreen mb-6">About Nexatech</h2>
        <p className="text-lg md:text-2xl font-popins text-nexablack dark:text-nexawhite">
          We are optimistic about developing world-class, solution-based products and providing
          services to meet the ever-increasing demand resulting in growth, technological improvement,
          and business expansion across various spheres of human advancement.
        </p>
      </motion.section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-monteserat text-nexagreen text-center mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-nexawhite border border-gray-200 rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              <div className="h-28 flex items-center justify-center mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={110}
                  height={110}
                  className="object-contain cursor-pointer transform hover:scale-90 transition-transform"
                />
              </div>
              <p className="font-popins font-bold text-nexablack">{product.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;