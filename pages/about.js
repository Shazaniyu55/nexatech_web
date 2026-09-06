import Head from 'next/head';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope, FaBullseye, FaEye, FaHandshake } from 'react-icons/fa';

// Edit this array to add or change team members.
const team = [
  { name: 'Shazali Gbadamosi', role: 'Founder & CEO', initials: 'SG' },

];

const values = [
  {
    icon: <FaBullseye size={30} className="text-nexagreen" />,
    title: 'Our Mission',
    text: 'To develop world-class, solution-based products and services that drive growth, technological improvement, and business expansion.',
  },
  {
    icon: <FaEye size={30} className="text-nexagreen" />,
    title: 'Our Vision',
    text: 'To be a leading force in technology across Africa, connecting people, technologies, and possibilities.',
  },
  {
    icon: <FaHandshake size={30} className="text-nexagreen" />,
    title: 'Our Values',
    text: 'Excellence, integrity, and the timely delivery of solutions that meet the ever-increasing demands of our clients.',
  },
];

function About() {
  return (
    <div className="pt-32 md:pt-40 pb-16 px-4 md:px-12 min-h-screen">
      <Head>
        <title>About Us | Nexatech</title>
        <meta name="description" content="Learn about Nexatech and meet the team behind our work." />
      </Head>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl text-nexagreen font-monteserat">About Nexatech</h1>
        <p className="mt-6 text-lg md:text-2xl font-popins">
          We are optimistic about developing world-class, solution-based products and providing
          services to meet the ever-increasing demand resulting in growth, technological
          improvement, and business expansion across various spheres of human advancement.
        </p>
      </motion.div>

      {/* Mission / Vision / Values */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-nexawhite border border-gray-200 rounded-xl shadow-lg p-8 text-center flex flex-col items-center"
          >
            <div className="mb-4">{v.icon}</div>
            <h3 className="text-xl font-monteserat text-nexablack mb-3">{v.title}</h3>
            <p className="font-popins text-gray-600">{v.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Meet the team */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-nexagreen font-monteserat">Meet the Team</h2>
          <p className="mt-4 text-lg font-popins max-w-2xl mx-auto">
            The people behind Nexatech, working to turn possibilities into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-nexawhite border border-gray-200 rounded-xl shadow-lg p-6 text-center flex flex-col items-center hover:shadow-xl transition-shadow"
            >
              {/* Initials avatar (swap for an <Image> when you have photos) */}
              <div className="w-24 h-24 rounded-full bg-nexagreen flex items-center justify-center mb-4">
                <span className="text-2xl font-monteserat text-white">{member.initials}</span>
              </div>
              <h3 className="text-lg font-monteserat text-nexablack">{member.name}</h3>
              <p className="font-popins text-gray-500 text-sm mb-4">{member.role}</p>
              <div className="flex gap-4">
                <a href="#" className="text-nexagreen hover:text-nexablack transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="text-nexagreen hover:text-nexablack transition-colors">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-nexagreen hover:text-nexablack transition-colors">
                  <FaEnvelope size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;