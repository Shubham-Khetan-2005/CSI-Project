import React, { useState, useEffect } from 'react';
import { Send, FileText, Clock, CheckCircle, User, Phone, MessageSquare, Target, AlertCircle, Heart, ChevronUp, ChevronDown } from 'lucide-react';
// import div from './div';

interface FormData {
  name: string;
  phone: string;
  grievanceType: 'community' | 'personal' | '';
  impact: string;
  solution: string;
  details: string;
}

const GrievancePage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    grievanceType: '',
    impact: '',
    solution: '',
    details: ''
  });
  const [activeField, setActiveField] = useState<string>('');
  const [mascotMessage, setMascotMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('submit');
  const [isMascotExpanded, setIsMascotExpanded] = useState(false);

  const recentGrievances = [
    {
      id: 'GRV-2024-001',
      subject: 'Water Quality Concerns in Village Pond',
      category: 'Water Contamination',
      status: 'Under Investigation',
      priority: 'High',
      submittedDate: '2024-03-10',
      lastUpdated: '2024-03-12',
      statusColor: 'yellow',
    },
    {
      id: 'GRV-2024-002',
      subject: 'Dust Pollution from Mining Operations',
      category: 'Air Quality',
      status: 'Resolved',
      priority: 'Medium',
      submittedDate: '2024-03-08',
      lastUpdated: '2024-03-11',
      statusColor: 'green',
    },
    {
      id: 'GRV-2024-003',
      subject: 'Inadequate Safety Measures at Site',
      category: 'Health & Safety',
      status: 'In Progress',
      priority: 'High',
      submittedDate: '2024-03-05',
      lastUpdated: '2024-03-10',
      statusColor: 'blue',
    },
  ];

  const fieldMessages = {
    name: "Hello! I'm Priya, your friendly support assistant. Please share your name so I can address you personally. Your name helps us create a more personal connection and shows that you're a real person with real concerns that matter to us.",
    phone: "Your phone number is important for us to reach out to you with updates about your grievance. We promise to use it only for official communication regarding your concern. This helps us provide you with timely updates and clarifications if needed.",
    grievanceType: "Understanding whether this issue affects you personally or your entire community helps us categorize and prioritize your concern appropriately. Community issues often require broader solutions, while personal issues might need more targeted assistance.",
    impact: "Please take your time to describe how this issue has affected you or your community. The more details you provide, the better we can understand the severity and scope of the problem. Your experience matters, and every detail helps us serve you better.",
    solution: "What kind of resolution would make things better for you? Your suggestions are valuable because you understand the situation best. Whether it's immediate action, long-term changes, or specific measures, your input guides our response strategy.",
    details: "Is there anything else you'd like us to know? Sometimes the smallest details can make the biggest difference in how we address your concern. Feel free to share any additional context, timeline, or specific observations."
  };

  const defaultMessage = "Hi! I'm Priya, your caring support companion. Click on any field above for helpful guidance. Your voice matters! 💙";

  useEffect(() => {
    if (activeField && fieldMessages[activeField as keyof typeof fieldMessages]) {
      setMascotMessage(fieldMessages[activeField as keyof typeof fieldMessages]);
      setIsMascotExpanded(true);
    } else {
      setMascotMessage(defaultMessage);
      setIsMascotExpanded(false);
    }
  }, [activeField]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setMascotMessage("Thank you so much for sharing your concerns with us! Your grievance has been successfully submitted and you'll receive a confirmation email shortly. We're committed to addressing your concern with the care and attention it deserves. You matter to us! 💙");
      setIsMascotExpanded(true);
      // Reset form
      setFormData({
        name: '',
        phone: '',
        grievanceType: '',
        impact: '',
        solution: '',
        details: ''
      });
    }, 2000);
  };

  const tabs = [
    { id: 'submit', label: 'Submit Grievance', icon: Send },
    { id: 'track', label: 'Track Status', icon: FileText },
  ];

  const getStatusColor = (color: string) => {
    const colors = {
      yellow: 'bg-[#DC965A]/20 text-[#DC965A] border-[#DC965A]/30',
      green: 'bg-[#01baef]/20 text-[#01baef] border-[#01baef]/30',
      blue: 'bg-[#01baef]/20 text-[#01baef] border-[#01baef]/30',
      red: 'bg-[#841C26]/20 text-[#841C26] border-[#841C26]/30',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-black py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#f8f8ff] mb-6">
            <div>Grievance Support Center</div>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <div>
              We're here to listen and help. Share your concerns with our caring support team, 
              and we'll work together to find solutions that matter to you and your community.
            </div>
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center border border-gray-800">
            <Heart className="h-8 w-8 text-[#01baef] mx-auto mb-3" />
            <div className="text-2xl font-bold text-[#f8f8ff]">24/7</div>
            <div className="text-gray-300">
              <div>Support Available</div>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center border border-gray-800">
            <Clock className="h-8 w-8 text-[#01baef] mx-auto mb-3" />
            <div className="text-2xl font-bold text-[#f8f8ff]">48</div>
            <div className="text-gray-300">
              <div>Hours Response Time</div>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center border border-gray-800">
            <CheckCircle className="h-8 w-8 text-[#01baef] mx-auto mb-3" />
            <div className="text-2xl font-bold text-[#f8f8ff]">95%</div>
            <div className="text-gray-300">
              <div>Resolution Rate</div>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-center border border-gray-800">
            <User className="h-8 w-8 text-[#DC965A] mx-auto mb-3" />
            <div className="text-2xl font-bold text-[#f8f8ff]">1,247</div>
            <div className="text-gray-300">
              <div>People Helped</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 p-2 rounded-lg shadow-lg flex space-x-2 border border-gray-800">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-[#01baef] text-black'
                      : 'text-gray-300 hover:text-[#01baef] hover:bg-gray-800'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit Form Tab */}
        {activeTab === 'submit' && (
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-[#f8f8ff] mb-8 text-center">
                <div>Share Your Concern With Us</div>
              </h2>

              <div className="space-y-8">
                {/* Name Field */}
                <div>
                  <label className="flex items-center text-lg font-semibold text-[#f8f8ff] mb-3">
                    <User className="h-5 w-5 mr-2 text-[#01baef]" />
                    <div>Your Name</div>
                    <span className="text-[#841C26] ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField('')}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-[#f8f8ff] rounded-lg focus:ring-2 focus:ring-[#01baef] focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="flex items-center text-lg font-semibold text-[#f8f8ff] mb-3">
                    <Phone className="h-5 w-5 mr-2 text-[#01baef]" />
                    <div>Phone Number</div>
                    <span className="text-[#841C26] ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    onFocus={() => setActiveField('phone')}
                    onBlur={() => setActiveField('')}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-[#f8f8ff] rounded-lg focus:ring-2 focus:ring-[#01baef] focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                {/* Grievance Type */}
                <div>
                  <label className="flex items-center text-lg font-semibold text-[#f8f8ff] mb-3">
                    <Target className="h-5 w-5 mr-2 text-[#01baef]" />
                    <div>Type of Concern</div>
                    <span className="text-[#841C26] ml-1">*</span>
                  </label>
                  <div 
                    className="grid md:grid-cols-2 gap-4"
                    onFocus={() => setActiveField('grievanceType')}
                    onBlur={() => setActiveField('')}
                  >
                    <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      formData.grievanceType === 'personal' 
                        ? 'border-[#01baef] bg-[#01baef]/10' 
                        : 'border-gray-700 bg-gray-800 hover:border-[#01baef]/50'
                    }`}>
                      <input
                        type="radio"
                        name="grievanceType"
                        value="personal"
                        checked={formData.grievanceType === 'personal'}
                        onChange={(e) => handleInputChange('grievanceType', e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                        formData.grievanceType === 'personal' 
                          ? 'border-[#01baef] bg-[#01baef]' 
                          : 'border-gray-500'
                      }`}>
                        {formData.grievanceType === 'personal' && (
                          <div className="w-2 h-2 bg-black rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-[#f8f8ff]">
                          <div>Personal Issue</div>
                        </div>
                        <div className="text-sm text-gray-400">
                          <div>Affects you individually</div>
                        </div>
                      </div>
                    </label>
                    <label className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      formData.grievanceType === 'community' 
                        ? 'border-[#01baef] bg-[#01baef]/10' 
                        : 'border-gray-700 bg-gray-800 hover:border-[#01baef]/50'
                    }`}>
                      <input
                        type="radio"
                        name="grievanceType"
                        value="community"
                        checked={formData.grievanceType === 'community'}
                        onChange={(e) => handleInputChange('grievanceType', e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                        formData.grievanceType === 'community' 
                          ? 'border-[#01baef] bg-[#01baef]' 
                          : 'border-gray-500'
                      }`}>
                        {formData.grievanceType === 'community' && (
                          <div className="w-2 h-2 bg-black rounded-full mx-auto mt-0.5"></div>
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-[#f8f8ff]">
                          <div>Community Issue</div>
                        </div>
                        <div className="text-sm text-gray-400">
                          <div>Affects your community</div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Impact Description */}
                <div>
                  <label className="flex items-center text-lg font-semibold text-[#f8f8ff] mb-3">
                    <AlertCircle className="h-5 w-5 mr-2 text-[#01baef]" />
                    <div>How has this affected you?</div>
                    <span className="text-[#841C26] ml-1">*</span>
                  </label>
                  <textarea
                    value={formData.impact}
                    onChange={(e) => handleInputChange('impact', e.target.value)}
                    onFocus={() => setActiveField('impact')}
                    onBlur={() => setActiveField('')}
                    placeholder="Please describe how this issue has impacted you or your community..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-[#f8f8ff] rounded-lg focus:ring-2 focus:ring-[#01baef] focus:border-transparent transition-all duration-200 resize-none"
                    required
                  />
                </div>

                {/* Solution Sought */}
                <div>
                  <label className="flex items-center text-lg font-semibold text-[#f8f8ff] mb-3">
                    <Target className="h-5 w-5 mr-2 text-[#01baef]" />
                    <div>What solution would help?</div>
                    <span className="text-[#841C26] ml-1">*</span>
                  </label>
                  <textarea
                    value={formData.solution}
                    onChange={(e) => handleInputChange('solution', e.target.value)}
                    onFocus={() => setActiveField('solution')}
                    onBlur={() => setActiveField('')}
                    placeholder="What kind of resolution or outcome would you like to see?"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-[#f8f8ff] rounded-lg focus:ring-2 focus:ring-[#01baef] focus:border-transparent transition-all duration-200 resize-none"
                    required
                  />
                </div>

                {/* Additional Details */}
                <div>
                  <label className="flex items-center text-lg font-semibold text-[#f8f8ff] mb-3">
                    <MessageSquare className="h-5 w-5 mr-2 text-[#01baef]" />
                    <div>Additional Details</div>
                    <span className="text-gray-400 text-sm ml-2">(Optional)</span>
                  </label>
                  <textarea
                    value={formData.details}
                    onChange={(e) => handleInputChange('details', e.target.value)}
                    onFocus={() => setActiveField('details')}
                    onBlur={() => setActiveField('')}
                    placeholder="Any additional information you'd like to share..."
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-[#f8f8ff] rounded-lg focus:ring-2 focus:ring-[#01baef] focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.phone || !formData.grievanceType || !formData.impact || !formData.solution}
                    className="bg-[#01baef] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#01baef]/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                        <div>Submitting...</div>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        <div>Submit Grievance</div>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Track Status Tab */}
        {activeTab === 'track' && (
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-900 rounded-xl shadow-lg p-8 mb-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-[#f8f8ff] mb-6">
                <div>Track Grievance Status</div>
              </h2>
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Enter Grievance ID (e.g., GRV-2024-001)"
                  className="flex-1 px-4 py-3 border border-gray-700 bg-gray-800 text-[#f8f8ff] rounded-lg focus:ring-2 focus:ring-[#01baef] focus:border-transparent"
                />
                <button className="bg-[#01baef] text-black px-6 py-3 rounded-lg hover:bg-[#01baef]/90 transition-colors duration-200">
                  <div>Track Status</div>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#f8f8ff]">
                <div>Recent Grievances</div>
              </h3>
              {recentGrievances.map((grievance, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-mono text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
                          {grievance.id}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(grievance.statusColor)}`}>
                          <div>{grievance.status}</div>
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          grievance.priority === 'High' 
                            ? 'bg-[#841C26]/20 text-[#841C26]'
                            : 'bg-[#DC965A]/20 text-[#DC965A]'
                        }`}>
                          <div>{grievance.priority} Priority</div>
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-[#f8f8ff] mb-2">
                        <div>{grievance.subject}</div>
                      </h4>
                      <div className="text-sm text-gray-300 space-y-1">
                        <div>
                          <div>Category: {grievance.category}</div>
                        </div>
                        <div>
                          <div>Submitted: {grievance.submittedDate}</div>
                        </div>
                        <div>
                          <div>Last Updated: {grievance.lastUpdated}</div>
                        </div>
                      </div>
                    </div>
                    <button className="text-[#01baef] hover:text-[#01baef]/80 font-medium">
                      <div>View Details</div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="fixed bottom-6 left-6 z-50 flex items-end space-x-2">
      {/* Chintu Sprite */}
      <div className="w-20 h-20">
        <img 
          src="/boy.png" // Make sure this path is correct!
          // alt="Chintu the guide"
          // className="w-full h-full object-contain pixelated"
        />
      </div>

      {/* Speech Bubble */}
      {mascotMessage && (
        <div className="bg-white border border-gray-300 text-black rounded-xl shadow-lg p-3 max-w-xs text-sm leading-tight relative">
          <div className="absolute -left-2 bottom-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white"></div>
          {mascotMessage}
        </div>
      )}
    </div>
    </div>
  );
};

export default GrievancePage;