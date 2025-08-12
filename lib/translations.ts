export type Language = "en" | "hi" | "ta" | "bn" | "gu" | "mr"

export interface Translations {
  // Navigation & Common
  home: string
  dashboard: string
  jobs: string
  search: string
  login: string
  logout: string
  profile: string
  settings: string
  help: string

  // Landing Page
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  getStarted: string
  findJobsNow: string
  searchPlaceholder: string

  // Job Sectors
  exploreSectors: string
  finance: string
  healthcare: string
  edtech: string
  technology: string
  manufacturing: string
  retail: string

  // Features
  powerfulFeatures: string
  smartJobMatching: string
  smartJobMatchingDesc: string
  voiceEnabledSearch: string
  voiceEnabledSearchDesc: string
  personalizedRecommendations: string
  personalizedRecommendationsDesc: string

  // How It Works
  howItWorks: string
  searchJobs: string
  getRecommendations: string
  applyConnect: string

  // Stats
  activeJobListings: string
  occupationsIndexed: string
  searchResponseTime: string
  matchAccuracy: string

  // Authentication
  signInToApply: string
  continueWithPhone: string
  continueWithGoogle: string
  phoneNumber: string
  sendOTP: string
  enterOTP: string
  verifyOTP: string
  welcome: string
  successfullySignedIn: string

  // Dashboard
  recommendedForYou: string
  savedJobs: string
  myApplications: string
  accountSettings: string
  profileCompletion: string
  editProfile: string
  quickStats: string
  profileViews: string
  recentActivity: string

  // Job Details
  fullTime: string
  partTime: string
  contract: string
  remote: string
  viewDetails: string
  applyNow: string
  saveJob: string
  company: string
  location: string
  salary: string

  // Application Status
  underReview: string
  interviewScheduled: string
  notSelected: string
  accepted: string
  applied: string

  // Footer
  helpDocumentation: string
  adminPanel: string
  apiDocumentation: string
  contactSupport: string
  copyright: string
}

export const translations: Record<Language, Translations> = {
  en: {
    // Navigation & Common
    home: "Home",
    dashboard: "Dashboard",
    jobs: "Jobs",
    search: "Search",
    login: "Login",
    logout: "Logout",
    profile: "Profile",
    settings: "Settings",
    help: "Help",

    // Landing Page
    heroTitle: "IntelliNCO",
    heroSubtitle: "AI-Powered Job Search & Career Portal",
    heroDescription: "Find Your Perfect Career Match with NCO-2015 Classification",
    getStarted: "Get Started",
    findJobsNow: "Find Jobs Now",
    searchPlaceholder: "Search by job title...",

    // Job Sectors
    exploreSectors: "Explore Jobs by Sector",
    finance: "Finance",
    healthcare: "Healthcare",
    edtech: "EdTech",
    technology: "Technology",
    manufacturing: "Manufacturing",
    retail: "Retail",

    // Features
    powerfulFeatures: "Powerful AI Features",
    smartJobMatching: "Smart Job Matching",
    smartJobMatchingDesc: "AI-powered matching based on skills, experience, and career goals",
    voiceEnabledSearch: "Voice-Enabled Search",
    voiceEnabledSearchDesc: "Speak your requirements and find relevant job opportunities",
    personalizedRecommendations: "Personalized Recommendations",
    personalizedRecommendationsDesc: "Get job suggestions tailored to your profile and preferences",

    // How It Works
    howItWorks: "How It Works",
    searchJobs: "Search Jobs",
    getRecommendations: "Get Recommendations",
    applyConnect: "Apply & Connect",

    // Stats
    activeJobListings: "Active Job Listings",
    occupationsIndexed: "Occupations Indexed",
    searchResponseTime: "Search Response Time",
    matchAccuracy: "Match Accuracy",

    // Authentication
    signInToApply: "Sign in to apply for this job",
    continueWithPhone: "Continue with Phone Number",
    continueWithGoogle: "Continue with Google",
    phoneNumber: "Phone Number",
    sendOTP: "Send OTP",
    enterOTP: "Enter OTP",
    verifyOTP: "Verify OTP",
    welcome: "Welcome!",
    successfullySignedIn: "Successfully signed in!",

    // Dashboard
    recommendedForYou: "Recommended for You",
    savedJobs: "Saved Jobs",
    myApplications: "My Applications",
    accountSettings: "Account Settings",
    profileCompletion: "Profile Completion",
    editProfile: "Edit Profile",
    quickStats: "Quick Stats",
    profileViews: "Profile Views",
    recentActivity: "Recent Activity",

    // Job Details
    fullTime: "Full-time",
    partTime: "Part-time",
    contract: "Contract",
    remote: "Remote",
    viewDetails: "View Details",
    applyNow: "Apply Now",
    saveJob: "Save Job",
    company: "Company",
    location: "Location",
    salary: "Salary",

    // Application Status
    underReview: "Under Review",
    interviewScheduled: "Interview Scheduled",
    notSelected: "Not Selected",
    accepted: "Accepted",
    applied: "Applied",

    // Footer
    helpDocumentation: "Help & Documentation",
    adminPanel: "Admin Panel",
    apiDocumentation: "API Documentation",
    contactSupport: "Contact Support",
    copyright: "© 2024 Government of India. Ministry of Statistics and Programme Implementation.",
  },

  hi: {
    // Navigation & Common
    home: "होम",
    dashboard: "डैशबोर्ड",
    jobs: "नौकरियां",
    search: "खोजें",
    login: "लॉगिन",
    logout: "लॉगआउट",
    profile: "प्रोफाइल",
    settings: "सेटिंग्स",
    help: "सहायता",

    // Landing Page
    heroTitle: "इंटेलिNCO",
    heroSubtitle: "AI-संचालित नौकरी खोज और करियर पोर्टल",
    heroDescription: "NCO-2015 वर्गीकरण के साथ अपना सही करियर मैच खोजें",
    getStarted: "शुरू करें",
    findJobsNow: "अभी नौकरी खोजें",
    searchPlaceholder: "नौकरी के शीर्षक से खोजें...",

    // Job Sectors
    exploreSectors: "क्षेत्र के अनुसार नौकरियां खोजें",
    finance: "वित्त",
    healthcare: "स्वास्थ्य सेवा",
    edtech: "शिक्षा तकनीक",
    technology: "प्रौद्योगिकी",
    manufacturing: "विनिर्माण",
    retail: "खुदरा",

    // Features
    powerfulFeatures: "शक्तिशाली AI सुविधाएं",
    smartJobMatching: "स्मार्ट जॉब मैचिंग",
    smartJobMatchingDesc: "कौशल, अनुभव और करियर लक्ष्यों के आधार पर AI-संचालित मैचिंग",
    voiceEnabledSearch: "आवाज-सक्षम खोज",
    voiceEnabledSearchDesc: "अपनी आवश्यकताओं को बोलें और प्रासंगिक नौकरी के अवसर खोजें",
    personalizedRecommendations: "व्यक्तिगत सिफारिशें",
    personalizedRecommendationsDesc: "अपनी प्रोफाइल और प्राथमिकताओं के अनुरूप नौकरी सुझाव प्राप्त करें",

    // How It Works
    howItWorks: "यह कैसे काम करता है",
    searchJobs: "नौकरी खोजें",
    getRecommendations: "सिफारिशें प्राप्त करें",
    applyConnect: "आवेदन करें और जुड़ें",

    // Stats
    activeJobListings: "सक्रिय नौकरी सूचियां",
    occupationsIndexed: "व्यवसाय अनुक्रमित",
    searchResponseTime: "खोज प्रतिक्रिया समय",
    matchAccuracy: "मैच सटीकता",

    // Authentication
    signInToApply: "इस नौकरी के लिए आवेदन करने हेतु साइन इन करें",
    continueWithPhone: "फोन नंबर के साथ जारी रखें",
    continueWithGoogle: "Google के साथ जारी रखें",
    phoneNumber: "फोन नंबर",
    sendOTP: "OTP भेजें",
    enterOTP: "OTP दर्ज करें",
    verifyOTP: "OTP सत्यापित करें",
    welcome: "स्वागत है!",
    successfullySignedIn: "सफलतापूर्वक साइन इन हो गए!",

    // Dashboard
    recommendedForYou: "आपके लिए सुझाई गई",
    savedJobs: "सहेजी गई नौकरियां",
    myApplications: "मेरे आवेदन",
    accountSettings: "खाता सेटिंग्स",
    profileCompletion: "प्रोफाइल पूर्णता",
    editProfile: "प्रोफाइल संपादित करें",
    quickStats: "त्वरित आंकड़े",
    profileViews: "प्रोफाइल दृश्य",
    recentActivity: "हाल की गतिविधि",

    // Job Details
    fullTime: "पूर्णकालिक",
    partTime: "अंशकालिक",
    contract: "अनुबंध",
    remote: "दूरस्थ",
    viewDetails: "विवरण देखें",
    applyNow: "अभी आवेदन करें",
    saveJob: "नौकरी सहेजें",
    company: "कंपनी",
    location: "स्थान",
    salary: "वेतन",

    // Application Status
    underReview: "समीक्षाधीन",
    interviewScheduled: "साक्षात्कार निर्धारित",
    notSelected: "चयनित नहीं",
    accepted: "स्वीकृत",
    applied: "आवेदन किया",

    // Footer
    helpDocumentation: "सहायता और दस्तावेज़ीकरण",
    adminPanel: "व्यवस्थापक पैनल",
    apiDocumentation: "API दस्तावेज़ीकरण",
    contactSupport: "सहायता संपर्क",
    copyright: "© 2024 भारत सरकार। सांख्यिकी और कार्यक्रम कार्यान्वयन मंत्रालय।",
  },

  ta: {
    // Navigation & Common
    home: "முகப்பு",
    dashboard: "டாஷ்போர்டு",
    jobs: "வேலைகள்",
    search: "தேடல்",
    login: "உள்நுழைவு",
    logout: "வெளியேறு",
    profile: "சுயவிவரம்",
    settings: "அமைப்புகள்",
    help: "உதவி",

    // Landing Page
    heroTitle: "இன்டெலிNCO",
    heroSubtitle: "AI-இயங்கும் வேலை தேடல் மற்றும் தொழில் போர்ட்டல்",
    heroDescription: "NCO-2015 வகைப்பாட்டுடன் உங்கள் சரியான தொழில் பொருத்தத்தைக் கண்டறியுங்கள்",
    getStarted: "தொடங்குங்கள்",
    findJobsNow: "இப்போது வேலைகளைக் கண்டறியுங்கள்",
    searchPlaceholder: "வேலை தலைப்பால் தேடுங்கள்...",

    // Job Sectors
    exploreSectors: "துறை வாரியாக வேலைகளை ஆராயுங்கள்",
    finance: "நிதி",
    healthcare: "சுகாதாரம்",
    edtech: "கல்வி தொழில்நுட்பம்",
    technology: "தொழில்நுட்பம்",
    manufacturing: "உற்பத்தி",
    retail: "சில்லறை",

    // Features
    powerfulFeatures: "சக்திவாய்ந்த AI அம்சங்கள்",
    smartJobMatching: "ஸ்மார்ட் வேலை பொருத்தம்",
    smartJobMatchingDesc: "திறன்கள், அனுபவம் மற்றும் தொழில் இலக்குகளின் அடிப்படையில் AI-இயங்கும் பொருத்தம்",
    voiceEnabledSearch: "குரல்-இயக்கப்பட்ட தேடல்",
    voiceEnabledSearchDesc: "உங்கள் தேவைகளைப் பேசுங்கள் மற்றும் தொடர்புடைய வேலை வாய்ப்புகளைக் கண்டறியுங்கள்",
    personalizedRecommendations: "தனிப்பயனாக்கப்பட்ட பரிந்துரைகள்",
    personalizedRecommendationsDesc: "உங்கள் சுயவிவரம் மற்றும் விருப்பத்தேர்வுகளுக்கு ஏற்ப வேலை பரிந்துரைகளைப் பெறுங்கள்",

    // How It Works
    howItWorks: "இது எவ்வாறு செயல்படுகிறது",
    searchJobs: "வேலைகளைத் தேடுங்கள்",
    getRecommendations: "பரிந்துரைகளைப் பெறுங்கள்",
    applyConnect: "விண்ணப்பிக்கவும் மற்றும் இணைக்கவும்",

    // Stats
    activeJobListings: "செயலில் உள்ள வேலை பட்டியல்கள்",
    occupationsIndexed: "தொழில்கள் அட்டவணைப்படுத்தப்பட்டவை",
    searchResponseTime: "தேடல் பதில் நேரம்",
    matchAccuracy: "பொருத்த துல்லியம்",

    // Authentication
    signInToApply: "இந்த வேலைக்கு விண்ணப்பிக்க உள்நுழையுங்கள்",
    continueWithPhone: "தொலைபேசி எண்ணுடன் தொடரவும்",
    continueWithGoogle: "Google உடன் தொடரவும்",
    phoneNumber: "தொலைபேசி எண்",
    sendOTP: "OTP அனுப்பவும்",
    enterOTP: "OTP உள்ளிடவும்",
    verifyOTP: "OTP சரிபார்க்கவும்",
    welcome: "வரவேற்கிறோம்!",
    successfullySignedIn: "வெற்றிகரமாக உள்நுழைந்துள்ளீர்கள்!",

    // Dashboard
    recommendedForYou: "உங்களுக்கு பரிந்துரைக்கப்பட்டது",
    savedJobs: "சேமிக்கப்பட்ட வேலைகள்",
    myApplications: "எனது விண்ணப்பங்கள்",
    accountSettings: "கணக்கு அமைப்புகள்",
    profileCompletion: "சுயவிவர நிறைவு",
    editProfile: "சுயவிவரத்தைத் திருத்தவும்",
    quickStats: "விரைவு புள்ளிவிவரங்கள்",
    profileViews: "சுயவிவர பார்வைகள்",
    recentActivity: "சமீபத்திய செயல்பாடு",

    // Job Details
    fullTime: "முழுநேரம்",
    partTime: "பகுதிநேரம்",
    contract: "ஒப்பந்தம்",
    remote: "தொலைநிலை",
    viewDetails: "விவரங்களைப் பார்க்கவும்",
    applyNow: "இப்போது விண்ணப்பிக்கவும்",
    saveJob: "வேலையைச் சேமிக்கவும்",
    company: "நிறுவனம்",
    location: "இடம்",
    salary: "சம்பளம்",

    // Application Status
    underReview: "மதிப்பாய்வில்",
    interviewScheduled: "நேர்காணல் திட்டமிடப்பட்டது",
    notSelected: "தேர்ந்தெடுக்கப்படவில்லை",
    accepted: "ஏற்றுக்கொள்ளப்பட்டது",
    applied: "விண்ணப்பித்தது",

    // Footer
    helpDocumentation: "உதவி மற்றும் ஆவணங்கள்",
    adminPanel: "நிர்வாக பேனல்",
    apiDocumentation: "API ஆவணங்கள்",
    contactSupport: "ஆதரவைத் தொடர்பு கொள்ளவும்",
    copyright: "© 2024 இந்திய அரசு. புள்ளியியல் மற்றும் திட்ட செயல்படுத்தல் அமைச்சகம்.",
  },

  bn: {
    // Navigation & Common
    home: "হোম",
    dashboard: "ড্যাশবোর্ড",
    jobs: "চাকরি",
    search: "অনুসন্ধান",
    login: "লগইন",
    logout: "লগআউট",
    profile: "প্রোফাইল",
    settings: "সেটিংস",
    help: "সাহায্য",

    // Landing Page
    heroTitle: "ইন্টেলিNCO",
    heroSubtitle: "AI-চালিত চাকরি অনুসন্ধান এবং ক্যারিয়ার পোর্টাল",
    heroDescription: "NCO-2015 শ্রেণীবিভাগের সাথে আপনার নিখুঁত ক্যারিয়ার ম্যাচ খুঁজুন",
    getStarted: "শুরু করুন",
    findJobsNow: "এখনই চাকরি খুঁজুন",
    searchPlaceholder: "চাকরির শিরোনাম দিয়ে অনুসন্ধান করুন...",

    // Job Sectors
    exploreSectors: "সেক্টর অনুযায়ী চাকরি অন্বেষণ করুন",
    finance: "অর্থ",
    healthcare: "স্বাস্থ্যসেবা",
    edtech: "শিক্ষা প্রযুক্তি",
    technology: "প্রযুক্তি",
    manufacturing: "উৎপাদন",
    retail: "খুচরা",

    // Features
    powerfulFeatures: "শক্তিশালী AI বৈশিষ্ট্য",
    smartJobMatching: "স্মার্ট জব ম্যাচিং",
    smartJobMatchingDesc: "দক্ষতা, অভিজ্ঞতা এবং ক্যারিয়ার লক্ষ্যের উপর ভিত্তি করে AI-চালিত ম্যাচিং",
    voiceEnabledSearch: "ভয়েস-সক্ষম অনুসন্ধান",
    voiceEnabledSearchDesc: "আপনার প্রয়োজনীয়তা বলুন এবং প্রাসঙ্গিক চাকরির সুযোগ খুঁজুন",
    personalizedRecommendations: "ব্যক্তিগতকৃত সুপারিশ",
    personalizedRecommendationsDesc: "আপনার প্রোফাইল এবং পছন্দ অনুযায়ী চাকরির সুপারিশ পান",

    // How It Works
    howItWorks: "এটি কিভাবে কাজ করে",
    searchJobs: "চাকরি অনুসন্ধান করুন",
    getRecommendations: "সুপারিশ পান",
    applyConnect: "আবেদন করুন এবং সংযোগ করুন",

    // Stats
    activeJobListings: "সক্রিয় চাকরির তালিকা",
    occupationsIndexed: "পেশা সূচীবদ্ধ",
    searchResponseTime: "অনুসন্ধান প্রতিক্রিয়ার সময়",
    matchAccuracy: "ম্যাচ নির্ভুলতা",

    // Authentication
    signInToApply: "এই চাকরির জন্য আবেদন করতে সাইন ইন করুন",
    continueWithPhone: "ফোন নম্বর দিয়ে চালিয়ে যান",
    continueWithGoogle: "Google দিয়ে চালিয়ে যান",
    phoneNumber: "ফোন নম্বর",
    sendOTP: "OTP পাঠান",
    enterOTP: "OTP প্রবেশ করান",
    verifyOTP: "OTP যাচাই করুন",
    welcome: "স্বাগতম!",
    successfullySignedIn: "সফলভাবে সাইন ইন হয়েছে!",

    // Dashboard
    recommendedForYou: "আপনার জন্য সুপারিশকৃত",
    savedJobs: "সংরক্ষিত চাকরি",
    myApplications: "আমার আবেদন",
    accountSettings: "অ্যাকাউন্ট সেটিংস",
    profileCompletion: "প্রোফাইল সম্পূর্ণতা",
    editProfile: "প্রোফাইল সম্পাদনা করুন",
    quickStats: "দ্রুত পরিসংখ্যান",
    profileViews: "প্রোফাইল দেখা",
    recentActivity: "সাম্প্রতিক কার্যকলাপ",

    // Job Details
    fullTime: "পূর্ণকালীন",
    partTime: "খণ্ডকালীন",
    contract: "চুক্তি",
    remote: "দূরবর্তী",
    viewDetails: "বিস্তারিত দেখুন",
    applyNow: "এখনই আবেদন করুন",
    saveJob: "চাকরি সংরক্ষণ করুন",
    company: "কোম্পানি",
    location: "অবস্থান",
    salary: "বেতন",

    // Application Status
    underReview: "পর্যালোচনাধীন",
    interviewScheduled: "সাক্ষাৎকার নির্ধারিত",
    notSelected: "নির্বাচিত নয়",
    accepted: "গৃহীত",
    applied: "আবেদন করা হয়েছে",

    // Footer
    helpDocumentation: "সাহায্য এবং ডকুমেন্টেশন",
    adminPanel: "অ্যাডমিন প্যানেল",
    apiDocumentation: "API ডকুমেন্টেশন",
    contactSupport: "সহায়তার সাথে যোগাযোগ করুন",
    copyright: "© ২০২৪ ভারত সরকার। পরিসংখ্যান ও কর্মসূচি বাস্তবায়ন মন্ত্রণালয়।",
  },

  gu: {
    // Navigation & Common
    home: "હોમ",
    dashboard: "ડેશબોર્ડ",
    jobs: "નોકરીઓ",
    search: "શોધ",
    login: "લોગિન",
    logout: "લોગઆઉટ",
    profile: "પ્રોફાઇલ",
    settings: "સેટિંગ્સ",
    help: "મદદ",

    // Landing Page
    heroTitle: "ઇન્ટેલિNCO",
    heroSubtitle: "AI-સંચાલિત નોકરી શોધ અને કારકિર્દી પોર્ટલ",
    heroDescription: "NCO-2015 વર્ગીકરણ સાથે તમારી સંપૂર્ણ કારકિર્દી મેચ શોધો",
    getStarted: "શરૂ કરો",
    findJobsNow: "હવે નોકરીઓ શોધો",
    searchPlaceholder: "નોકરીના શીર્ષક દ્વારા શોધો...",

    // Job Sectors
    exploreSectors: "ક્ષેત્ર પ્રમાણે નોકરીઓ અન્વેષણ કરો",
    finance: "ફાઇનાન્સ",
    healthcare: "આરોગ્યસેવા",
    edtech: "શિક્ષણ ટેકનોલોજી",
    technology: "ટેકનોલોજી",
    manufacturing: "ઉત્પાદન",
    retail: "રિટેલ",

    // Features
    powerfulFeatures: "શક્તિશાળી AI લક્ષણો",
    smartJobMatching: "સ્માર્ટ જોબ મેચિંગ",
    smartJobMatchingDesc: "કૌશલ્યો, અનુભવ અને કારકિર્દી લક્ષ્યોના આધારે AI-સંચાલિત મેચિંગ",
    voiceEnabledSearch: "અવાજ-સક્ષમ શોધ",
    voiceEnabledSearchDesc: "તમારી આવશ્યકતાઓ બોલો અને સંબંધિત નોકરીની તકો શોધો",
    personalizedRecommendations: "વ્યક્તિગત ભલામણો",
    personalizedRecommendationsDesc: "તમારી પ્રોફાઇલ અને પસંદગીઓ અનુસાર નોકરીની સૂચનાઓ મેળવો",

    // How It Works
    howItWorks: "તે કેવી રીતે કામ કરે છે",
    searchJobs: "નોકરીઓ શોધો",
    getRecommendations: "ભલામણો મેળવો",
    applyConnect: "અરજી કરો અને જોડાઓ",

    // Stats
    activeJobListings: "સક્રિય નોકરી યાદીઓ",
    occupationsIndexed: "વ્યવસાયો અનુક્રમિત",
    searchResponseTime: "શોધ પ્રતિસાદ સમય",
    matchAccuracy: "મેચ ચોકસાઈ",

    // Authentication
    signInToApply: "આ નોકરી માટે અરજી કરવા માટે સાઇન ઇન કરો",
    continueWithPhone: "ફોન નંબર સાથે ચાલુ રાખો",
    continueWithGoogle: "Google સાથે ચાલુ રાખો",
    phoneNumber: "ફોન નંબર",
    sendOTP: "OTP મોકલો",
    enterOTP: "OTP દાખલ કરો",
    verifyOTP: "OTP ચકાસો",
    welcome: "સ્વાગત છે!",
    successfullySignedIn: "સફળતાપૂર્વક સાઇન ઇન થયા!",

    // Dashboard
    recommendedForYou: "તમારા માટે ભલામણ કરેલ",
    savedJobs: "સાચવેલી નોકરીઓ",
    myApplications: "મારી અરજીઓ",
    accountSettings: "એકાઉન્ટ સેટિંગ્સ",
    profileCompletion: "પ્રોફાઇલ પૂર્ણતા",
    editProfile: "પ્રોફાઇલ સંપાદિત કરો",
    quickStats: "ઝડપી આંકડા",
    profileViews: "પ્રોફાઇલ દૃશ્યો",
    recentActivity: "તાજેતરની પ્રવૃત્તિ",

    // Job Details
    fullTime: "પૂર્ણ-સમય",
    partTime: "અંશ-સમય",
    contract: "કરાર",
    remote: "દૂરસ્થ",
    viewDetails: "વિગતો જુઓ",
    applyNow: "હવે અરજી કરો",
    saveJob: "નોકરી સાચવો",
    company: "કંપની",
    location: "સ્થાન",
    salary: "પગાર",

    // Application Status
    underReview: "સમીક્ષા હેઠળ",
    interviewScheduled: "ઇન્ટરવ્યુ નિર્ધારિત",
    notSelected: "પસંદ નથી",
    accepted: "સ્વીકૃત",
    applied: "અરજી કરી",

    // Footer
    helpDocumentation: "મદદ અને દસ્તાવેજીકરણ",
    adminPanel: "એડમિન પેનલ",
    apiDocumentation: "API દસ્તાવેજીકરણ",
    contactSupport: "સહાયતાનો સંપર્ક કરો",
    copyright: "© 2024 ભારત સરકાર. આંકડાશાસ્ત્ર અને કાર્યક્રમ અમલીકરણ મંત્રાલય.",
  },

  mr: {
    // Navigation & Common
    home: "होम",
    dashboard: "डॅशबोर्ड",
    jobs: "नोकऱ्या",
    search: "शोध",
    login: "लॉगिन",
    logout: "लॉगआउट",
    profile: "प्रोफाइल",
    settings: "सेटिंग्ज",
    help: "मदत",

    // Landing Page
    heroTitle: "इंटेलिNCO",
    heroSubtitle: "AI-चालित नोकरी शोध आणि करिअर पोर्टल",
    heroDescription: "NCO-2015 वर्गीकरणासह तुमचा परिपूर्ण करिअर मॅच शोधा",
    getStarted: "सुरुवात करा",
    findJobsNow: "आता नोकऱ्या शोधा",
    searchPlaceholder: "नोकरीच्या शीर्षकाने शोधा...",

    // Job Sectors
    exploreSectors: "क्षेत्रानुसार नोकऱ्या एक्सप्लोर करा",
    finance: "वित्त",
    healthcare: "आरोग्यसेवा",
    edtech: "शिक्षण तंत्रज्ञान",
    technology: "तंत्रज्ञान",
    manufacturing: "उत्पादन",
    retail: "किरकोळ",

    // Features
    powerfulFeatures: "शक्तिशाली AI वैशिष्ट्ये",
    smartJobMatching: "स्मार्ट जॉब मॅचिंग",
    smartJobMatchingDesc: "कौशल्ये, अनुभव आणि करिअर उद्दिष्टांवर आधारित AI-चालित मॅचिंग",
    voiceEnabledSearch: "आवाज-सक्षम शोध",
    voiceEnabledSearchDesc: "तुमच्या गरजा बोला आणि संबंधित नोकरीच्या संधी शोधा",
    personalizedRecommendations: "वैयक्तिकृत शिफारसी",
    personalizedRecommendationsDesc: "तुमच्या प्रोफाइल आणि प्राधान्यांनुसार नोकरीच्या सूचना मिळवा",

    // How It Works
    howItWorks: "हे कसे कार्य करते",
    searchJobs: "नोकऱ्या शोधा",
    getRecommendations: "शिफारसी मिळवा",
    applyConnect: "अर्ज करा आणि जोडा",

    // Stats
    activeJobListings: "सक्रिय नोकरी यादी",
    occupationsIndexed: "व्यवसाय अनुक्रमित",
    searchResponseTime: "शोध प्रतिसाद वेळ",
    matchAccuracy: "मॅच अचूकता",

    // Authentication
    signInToApply: "या नोकरीसाठी अर्ज करण्यासाठी साइन इन करा",
    continueWithPhone: "फोन नंबरसह सुरू ठेवा",
    continueWithGoogle: "Google सह सुरू ठेवा",
    phoneNumber: "फोन नंबर",
    sendOTP: "OTP पाठवा",
    enterOTP: "OTP प्रविष्ट करा",
    verifyOTP: "OTP सत्यापित करा",
    welcome: "स्वागत आहे!",
    successfullySignedIn: "यशस्वीरित्या साइन इन झाले!",

    // Dashboard
    recommendedForYou: "तुमच्यासाठी शिफारस केलेले",
    savedJobs: "जतन केलेल्या नोकऱ्या",
    myApplications: "माझे अर्ज",
    accountSettings: "खाते सेटिंग्ज",
    profileCompletion: "प्रोफाइल पूर्णता",
    editProfile: "प्रोफाइल संपादित करा",
    quickStats: "द्रुत आकडेवारी",
    profileViews: "प्रोफाइल दृश्ये",
    recentActivity: "अलीकडील क्रियाकलाप",

    // Job Details
    fullTime: "पूर्णवेळ",
    partTime: "अर्धवेळ",
    contract: "करार",
    remote: "दूरस्थ",
    viewDetails: "तपशील पहा",
    applyNow: "आता अर्ज करा",
    saveJob: "नोकरी जतन करा",
    company: "कंपनी",
    location: "स्थान",
    salary: "पगार",

    // Application Status
    underReview: "पुनरावलोकनाधीन",
    interviewScheduled: "मुलाखत नियोजित",
    notSelected: "निवडले नाही",
    accepted: "स्वीकारले",
    applied: "अर्ज केला",

    // Footer
    helpDocumentation: "मदत आणि दस्तऐवजीकरण",
    adminPanel: "प्रशासक पॅनेल",
    apiDocumentation: "API दस्तऐवजीकरण",
    contactSupport: "समर्थनाशी संपर्क साधा",
    copyright: "© 2024 भारत सरकार. सांख्यिकी आणि कार्यक्रम अंमलबजावणी मंत्रालय.",
  },
}

export const languageNames: Record<Language, string> = {
  en: "English",
  hi: "हिन्दी",
  ta: "தமிழ்",
  bn: "বাংলা",
  gu: "ગુજરાતી",
  mr: "मराठी",
}
