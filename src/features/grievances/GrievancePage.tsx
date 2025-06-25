import React, { useState, useEffect,} from 'react';
import { Send, FileText, Clock, CheckCircle, User, Phone, MessageSquare, Target, AlertCircle, Heart, ChevronUp, ChevronDown } from 'lucide-react';

// Initialize Firebase
import {getFirestore, collection, addDoc, getDocs} from 'firebase/firestore';
import {firebaseConfig} from "./firebase.config.js";
import { initializeApp } from "firebase/app";
import BackButton from '../../common/Components/BackButton.jsx';
export const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

interface FormData {
  name: string;
  phone: string;
  grievanceType: 'community' | 'personal' | '';
  impact: string;
  solution: string;
  details: string;
}

const GrievancePage: React.FC = () => {
  //writingData into the database
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    grievanceType: '',
    impact: '',
    solution: '',
    details: ''
  });
  const writeData = async () => {
    console.log("Result",formData);
    const result = await addDoc(collection(firestore,'grievance'),formData);
    console.log(result);
  }


  const [activeField, setActiveField] = useState<string>('');
  const [mascotMessage, setMascotMessage] = useState('');
  const fieldMessages = {
      name: "Hello! I'm Chintu, your friendly support assistant. Please share your name as it will help us contact you",
      phone: "Please enter your phone number so that we can reach out to you. If you don't have your personal number, You can share the number of any close one.",
      grievanceType: "Is the issue regarding an inconvinience caused to you/your family or is it a large scale issue faced by many people?",
      impact: "Please take your time to describe how this issue has affected you or your community. The more details you provide, the better we can understand the severity and scope of the problem.",
      solution: "What kind of solution would make things better for you? Please elaborate on your expectations from our side.",
      details: "Is there anything else you'd like us to know? Sometimes the smallest details can make the biggest difference in how we address your concern. Feel free to share any additional context, timeline, or specific observations."
    };
  const defaultMessage = "Hi! I'm Chintu, your caring support companion. Click on any field above for helpful guidance. Your voice matters! 💙";
    
  useEffect(() => {
      if (activeField && fieldMessages[activeField as keyof typeof fieldMessages]) {
        setMascotMessage(fieldMessages[activeField as keyof typeof fieldMessages]);
        
      } else {
        setMascotMessage(defaultMessage);
      }
  }, [activeField]);


  const [activeTab, setActiveTab] = useState('submit');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const recentGrievances = [
    {
      details: "Due to blockage in draining system, even the clear water sources are being polluted",
      grievanceType: "community",
      impact: "No access to drinkable water",
      name: "Baburao Ganpatrao Apte",
      phone: "9999999999",
      solution: "Please manage the water distribution, plan it in a better way"
    },
  ];
  const [dataRecord, setDataRecord] = useState(recentGrievances);
  const loadData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "grievance"));
    const entry = recentGrievances;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      const json = JSON.parse(JSON.stringify(doc.data()));
      entry.push(json);
    });
    return entry;
  }
  useEffect(()=>{
    console.log("testingg");
    if(activeTab=='track'){
      loadData().then((entry)=>{
        setDataRecord(entry);
        console.log(dataRecord);
      });
    }
  }, [activeTab]);


  

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    // console.log(formData);
    e.preventDefault();
    setIsSubmitting(true);
    writeData();
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setMascotMessage("Thank you so much for sharing your concerns with us! Your grievance has been successfully submitted and you'll receive a confirmation email shortly. We're committed to addressing your concern with the care and attention it deserves. You matter to us! 💙");
      // setIsMascotExpanded(true);
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

  // return (<BackButton/>)
  return (
    <div className="min-h-screen bg-black py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <BackButton/>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#f8f8ff] mb-6">
            <div>Grievance Support Center</div>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to listen and help. Share your concerns with our caring support team, 
              and we'll work together to find solutions that matter to you and your community.
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
        <div>
        {activeTab === 'track' && (
          <div className="max-w-4xl mx-auto">
            {/* <div className="bg-gray-900 rounded-xl shadow-lg p-8 mb-8 border border-gray-800">
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
            </div> */}

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#f8f8ff]">
                <div>Recent Grievances</div>
              </h3>
              
              {dataRecord.map((grievance, index) => (
                <div key={index} className="bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 overflow-hidden">
                  {/* Header Section */}
                  <div className="p-6 border-b border-gray-800">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#01baef]/10 text-[#01baef] border border-[#01baef]/30">
                            <div>{grievance.grievanceType === 'personal' ? 'Personal Issue' : 'Community Issue'}</div>
                          </span>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Complainant Info */}
                          <div>
                            <h4 className="text-lg font-semibold text-[#f8f8ff] mb-2 flex items-center">
                              <User className="h-5 w-5 mr-2 text-[#01baef]" />
                              <div>Complainant Details</div>
                            </h4>
                            <div className="space-y-2 text-sm text-gray-300">
                              <div><strong>Name:</strong> <div>{grievance.name}</div></div>
                              <div><strong>Phone:</strong> {grievance.phone}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    {/* Issue Description */}
                    <div>
                      <h5 className="font-semibold text-[#f8f8ff] mb-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-2 text-[#DC965A]" />
                        <div>Issue Description</div>
                      </h5>
                      <p className="text-gray-300 bg-gray-800 p-3 rounded-lg">
                        {grievance.details}
                      </p>
                    </div>

                    {/* Impact */}
                    <div>
                      <h5 className="font-semibold text-[#f8f8ff] mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-[#841C26]" />
                        <div>Impact</div>
                      </h5>
                      <p className="text-gray-300 bg-gray-800 p-3 rounded-lg">
                        {grievance.impact}
                      </p>
                    </div>

                    {/* Requested Solution */}
                    <div>
                      <h5 className="font-semibold text-[#f8f8ff] mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-[#01baef]" />
                        <div>Requested Solution</div>
                      </h5>
                      <p className="text-gray-300 bg-gray-800 p-3 rounded-lg">
                        {grievance.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      </div>
      <div className="fixed bottom-6 left-6 z-25 flex items-end space-x-2">
        <div className="w-20 h-20">
        <img 
          src="./images/chintu.jpg" // Make sure this path is correct!
          alt="Chintu the guide"
          className="w-full h-full object-contain pixelated"
        />
      </div>

      {/* Speech Bubble */}
      {mascotMessage && activeTab=='submit' && (
        <div className="bg-white border border-gray-300 text-black rounded-xl shadow-lg p-3 sm:p-4 max-w-xs sm:max-w-sm  text-sm sm:text-base leading-tight relative">
          <div className="absolute -left-2 bottom-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white"></div>
          {mascotMessage}
        </div>
      )}
    </div>
    </div>
  );
};

export default GrievancePage;