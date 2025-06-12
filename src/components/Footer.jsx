import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-[#f8f8ff] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">UCIL Portal</h3>
              <p className="text-gray-400">
                Committed to responsible mining practices that balance national interests with environmental and social justice.
              </p>
            </div>
            {/* <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setActiveSection('about')} className="hover:text-[#01baef]">About Us</button></li>
                <li><button onClick={() => setActiveSection('awareness')} className="hover:text-[#01baef]">Environmental Data</button></li>
                <li><button onClick={() => setActiveSection('engagement')} className="hover:text-[#01baef]">Community Programs</button></li>
                <li><button onClick={() => setActiveSection('grievances')} className="hover:text-[#01baef]">Report Issues</button></li>
              </ul>
            </div> */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#01baef]">Environmental Reports</a></li>
                <li><a href="#" className="hover:text-[#01baef]">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-[#01baef]">Community Benefits</a></li>
                <li><a href="#" className="hover:text-[#01baef]">Regulatory Compliance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-gray-400 space-y-2">
                <p>Uranium Corporation of India Ltd.</p>
                <p>P.O. Jaduguda Mines - 832102</p>
                <p>Dist. East Singhbhum, Jharkhand</p>
                <p>Phone: +91-657-2380501</p>
                <p>Email: info@ucil.gov.in</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Uranium Corporation of India Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer