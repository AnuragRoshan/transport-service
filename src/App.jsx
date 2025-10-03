import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Package,
  Truck,
  Shield,
  Users,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

const ShivShaktiWebsite = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Carousel images - using placeholder images for transport business
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1646515349368-59311e31d957?q=80&w=2211&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Reliable Transport Services",
      description: "Your trusted partner in logistics across Bihar",
    },
    {
      url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&h=600&fit=crop",
      title: "Fast & Secure Delivery",
      description: "Timely delivery of your precious cargo",
    },
    {
      url: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1200&h=600&fit=crop",
      title: "Statewide Network",
      description: "Connecting Patna and Darbhanga efficiently",
    },
  ];

  const features = [
    {
      icon: <Truck className="w-12 h-12 text-orange-600" />,
      title: "Door-to-Door Service",
      description:
        "Complete pickup and delivery solutions for your consignments",
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-600" />,
      title: "Safe & Secure",
      description: "Your goods are insured and handled with utmost care",
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-600" />,
      title: "On-Time Delivery",
      description: "Guaranteed timely delivery with real-time tracking",
    },
    {
      icon: <Users className="w-12 h-12 text-orange-600" />,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your service",
    },
  ];

  const partners = [
    "DTDC",
    "Delhivery",
    "Blue Dart",
    "Ecom Express",
    "XpressBees",
  ];

  const branches = [
    {
      name: "Patna Branch (Head Office)",
      address:
        "Shop No. 15, Ground Floor, Gandhi Maidan Complex, Near Golghar, Patna - 800001, Bihar",
      phone: "+91 98765 43210",
      email: "patna@shivshakticourier.com",
      timing: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7428847838594!2d85.13191731501365!3d25.61001798374641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059b493f0c0f0!2sGandhi%20Maidan%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890",
    },
    {
      name: "Darbhanga Branch",
      address:
        "Plot No. 42, Near Railway Station, Station Road, Darbhanga - 846004, Bihar",
      phone: "+91 98765 43211",
      email: "darbhanga@shivshakticourier.com",
      timing: "Mon-Sat: 9:00 AM - 8:00 PM, Sun: 10:00 AM - 6:00 PM",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.1234567890123!2d85.89765432109876!3d26.15234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed09add6a1b10b%3A0x6c0c0f0c0f0c0f0c!2sDarbhanga%20Railway%20Station!5e0!3m2!1sen!2sin!4v1234567890",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const Navbar = () => (
    <nav className="bg-slate-900 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-lg bg-opacity-95">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2 rounded-lg">
              <Package className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Shiv Shakti
              </h1>
              <p className="text-xs text-slate-400">Courier & Cargo</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => setCurrentPage("home")}
              className={`hover:text-orange-200 transition ${
                currentPage === "home" ? "text-orange-400 " : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className={`hover:text-orange-200 transition ${
                currentPage === "contact" ? "text-orange-400 " : ""
              }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <button
              onClick={() => {
                setCurrentPage("home");
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 hover:text-orange-200 ${
                currentPage === "home" ? "font-bold" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setCurrentPage("contact");
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 hover:text-orange-200 ${
                currentPage === "contact" ? "font-bold" : ""
              }`}
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  const Footer = () => (
    <footer className="bg-slate-900 text-white shadow-2xl ">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Package className="w-8 h-8 text-orange-600" />
              <div>
                <h3 className="text-white font-bold text-lg">Shiv Shakti</h3>
                <p className="text-xs">Courier & Cargo</p>
              </div>
            </div>
            <p className="text-sm">
              Your trusted logistics partner across Bihar, providing reliable
              and secure transport services.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => setCurrentPage("home")}
                  className="hover:text-orange-400"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="hover:text-orange-400"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Track Shipment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Our Branches</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Patna (Head Office)</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Darbhanga</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@shivshakticourier.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 9 AM - 8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Shiv Shakti Courier and Cargo. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            Serving Bihar with dedication and reliability
          </p>
        </div>
      </div>
    </footer>
  );

  const HomePage = () => (
    <div>
      {/* Hero Carousel */}
      <div className="relative h-96 md:h-[600px] overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  {image.title}
                </h2>
                <p className="text-xl md:text-2xl">{image.description}</p>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About Shiv Shakti Courier & Cargo
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Established as Bihar's most reliable third-party logistics
              partner, Shiv Shakti Courier and Cargo specializes in local
              transport of consignments from leading delivery services including
              DTDC, Delhivery, and more.
            </p>
            <p className="text-lg text-gray-600">
              With strategically located branches in Patna and Darbhanga, we
              ensure seamless connectivity across Bihar, delivering excellence
              in every shipment.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Trusted Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gray-100 px-8 py-4 rounded-lg font-bold text-xl text-gray-700 hover:bg-orange-100 transition"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white shadow-2xl ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Ship with Us?</h2>
          <p className="text-xl mb-8">
            Experience reliable, fast, and secure courier services across Bihar
          </p>
          <button
            onClick={() => setCurrentPage("contact")}
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-orange-100 transition"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );

  const ContactPage = () => (
    <div>
      {/* Contact Hero */}
      <div className="bg-slate-900 text-white shadow-2xl  py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">
            We're here to help with all your logistics needs
          </p>
        </div>
      </div>

      {/* Branch Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Branches
          </h2>

          <div className="space-y-12">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-2">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">
                      {branch.name}
                    </h3>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            Address
                          </h4>
                          <p className="text-gray-600">{branch.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Phone className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-800">Phone</h4>
                          <p className="text-gray-600">{branch.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Mail className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-800">Email</h4>
                          <p className="text-gray-600">{branch.email}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            Operating Hours
                          </h4>
                          <p className="text-gray-600">{branch.timing}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-80 md:h-auto">
                    <iframe
                      src={branch.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${branch.name} Location`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {currentPage === "home" ? <HomePage /> : <ContactPage />}
      </main>
      <Footer />
    </div>
  );
};

export default ShivShaktiWebsite;
