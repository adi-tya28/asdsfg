import React, { useState } from 'react';
import { Mail, MapPin, Phone, Download, ExternalLink, X, Calendar, Award, User, Briefcase, GraduationCap, Linkedin, ArrowLeft, Moon, Sun } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  mediaLink: string;
}

const projects: Project[] = [
  {
    id: 'f1-front-wing',
    title: 'Formula Car Front Wing',
    description: 'Modeled a Formula car front wing using NACA 4412 airfoil coordinates in SolidWorks. Improved hydrodynamic performance through CFD simulations in SolidWorks Flow Simulation to optimize aerodynamic flow by 10%. Performed FEM analysis in HyperMesh and MSC Nastran, validated results in HyperView to ensure structural integrity.',
    features: [
      'NACA 4412 airfoil coordinate modeling',
      '10% aerodynamic flow optimization',
      'CFD simulations in SolidWorks Flow Simulation',
      'FEM analysis in HyperMesh and MSC Nastran',
      'Results validation in HyperView'
    ],
    technologies: ['SolidWorks', 'HyperMesh', 'MSC Nastran', 'HyperView', 'SolidWorks Flow Simulation'],
    image: 'https://images.pexels.com/photos/12789/pexels-photo-12789.jpeg?auto=compress&cs=tinysrgb&w=800',
    mediaLink: 'https://drive.google.com/drive/folders/1r9BX0BrHmVfgXq586S4Bu-Zou3IZ5sKM?usp=sharing'
  },
  {
    id: 'underwater-rov',
    title: 'Underwater ROV',
    description: 'Created an optimized chassis and thrusters for an underwater ROV using SolidWorks. Evaluated hydrodynamic performance and flow velocity distribution through CFD analysis in SolidWorks Flow Simulation.',
    features: [
      'Optimized chassis design',
      'Thruster system integration',
      'Hydrodynamic performance evaluation',
      'Flow velocity distribution analysis',
      'CFD analysis implementation'
    ],
    technologies: ['SolidWorks', 'SolidWorks Flow Simulation'],
    image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800',
    mediaLink: 'https://drive.google.com/drive/folders/1hdLJkPbK4tLxrlT7u-jLM_iZvQNaMc72?usp=sharing'
  },
  {
    id: 'water-clock',
    title: 'Water Clock Model with Drip Irrigation',
    description: 'Constructed and 3D-printed 7 custom parts in SolidWorks for a low-cost water clock integrated with Arduino-based irrigation. Programmed sensor-driven pump actuation logic; tested across 3 flow regimes (gravity, constant, fluctuating). Ran 10+ tests; achieved pump response time under 4s and reduced manual timing errors by ~20% during prototype trial.',
    features: [
      '7 custom 3D-printed parts',
      'Arduino-based irrigation integration',
      'Sensor-driven pump actuation logic',
      'Testing across 3 flow regimes',
      'Pump response time under 4s',
      '20% reduction in manual timing errors'
    ],
    technologies: ['Python', 'SolidWorks', '3D-Printing', 'Arduino Uno'],
    image: 'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=800',
    mediaLink: 'https://drive.google.com/drive/folders/1y7pDYT4HQx1o7W1qrtdCGenU-UqsN5Hw?usp=sharing'
  },
  {
    id: 'defense-rover',
    title: 'Defense Rover',
    description: 'Re-designed patented defense rover\'s chassis & firing system; reduced weight 12%, improved firing stability 5%. Placed 3rd nationally at Technovation 2025, Anna University.',
    features: [
      'Chassis redesign',
      'Firing system optimization',
      '12% weight reduction',
      '5% firing stability improvement',
      '3rd place national ranking'
    ],
    technologies: ['SolidWorks', 'Mechanical Design', 'System Optimization'],
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
    mediaLink: 'https://drive.google.com/drive/folders/1T4qHbNlx3a67biCu74hnBqruFHV2BZa_?usp=sharing'
  },
  {
    id: 'composite-bulkhead',
    title: 'Design and Analysis of Composite Fuselage Bulkhead for Unmanned Aerial Vehicles',
    description: 'Developed a UAV model using NACA airfoil coordinates to generate the skin profile. Completed detailed surface and part modeling in SolidWorks, then exported the design to HyperMesh for mesh extraction and finite element analysis. Work is currently in progress, focusing on structural validation and optimization.',
    features: [
      'NACA airfoil coordinate integration',
      'Complete surface and part modeling in SolidWorks',
      'HyperMesh integration for mesh extraction',
      'Finite element analysis implementation',
      'Structural validation and optimization'
    ],
    technologies: ['SolidWorks', 'HyperMesh', 'FEA', 'Composite Materials', 'NACA Airfoils'],
    image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800',
    mediaLink: 'https://drive.google.com/drive/folders/1IIvYwZeU4pUtM_8Suw-ojwAx3IN28qN8?usp=sharing'
  },
  {
    id: 'ic-chip-rectification',
    title: 'IC Chip Rectification',
    description: 'Conceptualized and Designed a fully autonomous, vision-guided robotic system for precision removal of defective components from IC chips. The setup integrates multi-arm robotics, dynamic clamping, conveyor-based handling, and Raspberry Pi–based control with real-time image processing. By combining desoldering, plucking, and verification in one compact platform, the project demonstrates a scalable solution for error-free, high-throughput IC repair and diagnostics.',
    features: [
      'Multi-arm robotics integration',
      'Dynamic clamping system',
      'Conveyor-based handling mechanism',
      'Raspberry Pi-based control system',
      'Real-time image processing',
      'Desoldering and plucking capabilities',
      'Automated verification system'
    ],
    technologies: ['Robotics', 'Computer Vision', 'Raspberry Pi', 'Image Processing', 'Automation'],
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
    mediaLink: 'https://drive.google.com/drive/folders/1Z-9bEVdkxfuZLwldEvU9iDmf7MABqUDI?usp=sharing'
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleViewMedia = (mediaLink: string) => {
    window.open(mediaLink, '_blank');
  };

  const handleOpenResume = () => {
    window.open('https://drive.google.com/file/d/1UateU0BaL_3roNMHyhfTprurLD8a4-vR/view?usp=sharing', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:aditya.thakur2023@vitstudent.ac.in';
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/aditya-thakur-007627249/', '_blank');
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const themeClasses = darkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900';

  if (currentPage === 'projects') {
    return (
      <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
        {/* Projects Header */}
        <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg sticky top-0 z-40 transition-all duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setCurrentPage('home')}
                  className={`flex items-center space-x-2 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} transition-colors`}
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Back to Home</span>
                </button>
              </div>
              <h1 className="text-2xl font-bold">My Projects</h1>
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>

        {/* Projects Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
                Explore my portfolio of engineering projects showcasing expertise in mechanical design, 
                robotics, and advanced manufacturing solutions.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:scale-105`}
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3`}>
                      {project.description.substring(0, 120)}...
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index}
                          className={`px-3 py-1 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} text-sm rounded-full font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto`}>
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                </div>
              </div>
              <div className="p-8">
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 text-lg leading-relaxed`}>
                  {selectedProject.description}
                </p>
                
                <div className="mb-6">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className={`px-4 py-2 ${darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900 text-blue-200' : 'bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800'} rounded-full font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <button 
                    onClick={() => handleViewMedia(selectedProject.mediaLink)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>View Media</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${themeClasses}`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg sticky top-0 z-40 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Aditya Thakur</h1>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Mechanical Engineer</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-8">
                <a href="#about" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors font-medium`}>About</a>
                <button 
                  onClick={() => setCurrentPage('projects')}
                  className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors font-medium`}
                >
                  Projects
                </button>
                <a href="#experience" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors font-medium`}>Experience</a>
                <a href="#contact" className={`${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors font-medium`}>Contact</a>
              </nav>
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <User className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Aditya Thakur</h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-3xl mx-auto leading-relaxed`}>
              B.Tech in Mechanical Engineering (Specialization in Electric Vehicles) from VIT Chennai. 
              Experienced in SolidWorks, robotics, and advanced engineering solutions with a CGPA of 8.74.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={handleOpenResume}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Open Resume</span>
              </button>
              <button 
                onClick={handleEmail}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </button>
              <button 
                onClick={handleLinkedIn}
                className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Engineering Excellence</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                As a dedicated Mechanical Engineering student at VIT Chennai with specialization in Electric Vehicles, 
                I bring expertise in SolidWorks, 3DEXPERIENCE CATIA, and advanced analysis tools including HyperMesh, 
                MSC Nastran, and Ansys.
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}>
                Currently serving as Mechanical Lead for Team Namo Nirvana - Official Robotics Team at VIT Chennai, 
                with experience in DRDO internship and multiple national-level robotics competitions.
              </p>
            </div>
            <div className={`${darkMode ? 'bg-gradient-to-br from-gray-700 to-gray-600' : 'bg-gradient-to-br from-blue-100 to-purple-100'} p-8 rounded-2xl transition-all duration-300`}>
              <h3 className="text-2xl font-bold mb-6">Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Software</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    SolidWorks, 3DEXPERIENCE CATIA, HyperMesh, HyperView, MSC Nastran, Ansys, AutoCAD
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Analysis</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    FEM - Stress Strain, Displacement, Frequency, Modal, Buckling | CFD - Thermal, Aerodynamic
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Programming</h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Python, MATLAB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}>
              Explore my portfolio of engineering projects showcasing expertise in mechanical design and robotics.
            </p>
            <button 
              onClick={() => setCurrentPage('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium transform hover:scale-105"
            >
              View All Projects
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div 
                key={project.id}
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3`}>
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} text-sm rounded-full font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education & Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6 pb-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-gray-500 text-sm">2023 - Present</span>
                  </div>
                  <h4 className="text-xl font-bold">B.Tech in Mechanical Engineering</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Specialization in Electric Vehicles</p>
                  <p className="text-gray-500">Vellore Institute of Technology, Chennai</p>
                  <p className="text-blue-600 font-semibold">CGPA: 8.74</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-purple-600" />
                Key Achievements
              </h3>
              <div className="space-y-6">
                <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-50 to-purple-50'} p-6 rounded-lg transition-all duration-300`}>
                  <h4 className="text-lg font-bold mb-2">Merit Scholarship Awardee</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Secured 2nd rank (AY 2023–24) and 10th rank (AY 2024–25) in program at VIT Chennai</p>
                </div>
                <div className={`${darkMode ? 'bg-gradient-to-r from-purple-900 to-blue-900' : 'bg-gradient-to-r from-purple-50 to-blue-50'} p-6 rounded-lg transition-all duration-300`}>
                  <h4 className="text-lg font-bold mb-2">DRDO Internship</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Student Intern at Aeronautical Development Establishment - DRDO, Bengaluru</p>
                </div>
                <div className={`${darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-50 to-purple-50'} p-6 rounded-lg transition-all duration-300`}>
                  <h4 className="text-lg font-bold mb-2">Patent Holder</h4>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Apparatus for Air Quality Management - Utility Patent Published</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to collaborate on your next engineering project? Let's discuss how we can bring your ideas to life.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Mail className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-blue-100 mb-4">aditya.thakur2023@vitstudent.ac.in</p>
              <button 
                onClick={handleEmail}
                className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Send Email
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Linkedin className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-blue-100 mb-4">Connect professionally</p>
              <button 
                onClick={handleLinkedIn}
                className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Connect
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <ExternalLink className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-bold mb-2">Resume</h3>
              <p className="text-blue-100 mb-4">View my complete profile</p>
              <button 
                onClick={handleOpenResume}
                className="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Open Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-black' : 'bg-gray-900'} text-white py-12 transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Aditya Thakur</h3>
            <p className="text-gray-400 mb-6">Mechanical Engineer</p>
            <div className="flex justify-center space-x-6 mb-8">
              <button 
                onClick={handleEmail}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </button>
              <button 
                onClick={handleLinkedIn}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </button>
              <button 
                onClick={handleOpenResume}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-6 h-6" />
              </button>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2024 Aditya Thakur. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
