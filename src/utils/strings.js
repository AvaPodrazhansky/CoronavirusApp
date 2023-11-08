const STRINGS = {
    // Terms and Conditions Screen
    termsTitle: "COVID-19 Self-Diagnosis\nTerms and Conditions",
    termsTitleArray: [
        "Purpose Statement",
        "Conditions Statement",
        "Privacy Statement",
        'By selecting "I accept", you indicate that you have reviewed and agree to our conditions statement and privacy ' +
            "statement.",
    ],
    termsArray: [
        "The main purpose of the Anti-Coronavirus (COVID-19) Assistant is to help people, who are currently located in " +
            "the United States, in making informed decisions regarding the important process of seeking appropriate medical " +
            "care. However, this self-evaluation is neither intended to substitute the advice of medical professionals nor " +
            "to provide a formal diagnosis on or treatment of COVID-19. ",
        "To the fullest extent provided by law, we hereby disclaim all warranties of any kind (whether expressed " +
            "or implied, statutory, or otherwise) including to but not limited to any warranties of merchantability, " +
            "non-infringement, and fitness for a particular purpose. As such, your use of this self-evaluation is solely at " +
            "your own risk.",
        "Except for the location you provide to us, we will not collect any other personal information such as your " +
            "name, phone number, address, and other information that you provide by using this self-evaluation feature on " +
            "or through our App. For the only information of your email address, we will not use or disclose it unless such " +
            "information is published, displayed, transmitted by yourself or any other third parties, or for purpose of " +
            "complying with any court order, law, or legal process, including to respond to any government or regulatory " +
            "request. If you do not agree with our above statements, your choice is not to use our App. By accessing or " +
            "using this APP, you agree to these statements. The statements may change from time to time. Your continued use " +
            "of this App after we make changes is deemed to be acceptance of those changes, so please check the statements " +
            "periodically for updates.",
        "",
    ],
    acceptConditions: "I accept.",

    // Home Screen
    retryLabel: "Retry",
    loadDataErrorMessage: "Unable to load data",
    cumulativeCasesHeader: "Cumulative Cases in United States",
    confirmedLabel: "Confirmed: ",
    recoveredLabel: "Recovered: ",
    deadLabel: "Deaths: ",
    confirmed: "Confirmed",
    recovered: "Recovered",
    dead: "Deaths",
    confirmedType: "CONFIRMED_TYPE",
    deathsType: "DEATHS_TYPE",
    recoveredType: "RECOVERED_TYPE",
    // Value state populations are divided by when sorting
    // (to make unbiased, change to 1). The purpose of this
    // is so that there is visible colors on the toolbars on the
    // statelist
    toolbarShiftValue: 1,
    percentage: "PERCENTAGE",

    // Survey Questions
    questionOne: "N/A. What is your current location?", // Question 1 omitted as per Dr. Han's instructions
    questionTwo: "1. Which of the following symptoms do you have?",
    questionThree:
        "2. Were you potentially exposed to someone who is suspected or confirmed to have the " +
        "coronavirus (COVID-19)?",
    questionFour:
        "N/A. During the past two weeks, how many times have you taken public transportation " +
        "(airplanes, buses, subways, trains, taxis, cruises, etc.) with confirmed COVID-19 case(s) on board in which " +
        "you are not wearing a face mask?", // Question 4 omitted as per Dr. Han's instructions
    questionFive:
        "N/A. During the past two weeks, have you been to the following places or made contact " +
        "with the people or wild animals listed below?", // Question 5 omitted as per Dr. Han's instructions
    questionSix: "3. What is your age?",
    questionSeven: "4. What is your sex?",
    questionEight:
        "5. Do you have existing conditions or diseases listed below?",

    // Survey Button Answers (Question 2)
    questionTwoAnswerArray: [
        "Elevated Body Temperature",
        "Extreme Fatigue",
        "Chills or Tremors",
        "Sore Throat",
        "Cough",
        "Shortness of Breath",
        "Diarrhea",
        "Pink Eye",
        "Chest Pain",
        "Persistent Headache",
        "Decreased Sweating or Urination",
        "None of the Above",
    ],

    // Survey Button Answers (Question 3)
    questionThreeButtonNo: "No",
    questionThreeButtonYes: "Yes",

    // Survey Button Answers (Question 5)
    questionFiveAnswerArray: [
        "Wild animals (Bats, Marmots, Civets, Camels, or Rats)",
        "Close contact with people from Hubei China, South Korea, Italy, " +
            "Iran or Japan without wearing a face mask. (Close contact includes but is not limited to talking, eating, " +
            "studying, or taking public transportation together.)",
        "Other people who are experiencing the symptoms listed on the " +
            "first question",
        "Close contact with suspected or confirmed COVID-19 case(s)",
        "Presence of confirmed COVID-19 case(s) in your community",
    ],

    // Survey Button Answers (Question 7)
    questionSevenButtonFemale: "Female",
    questionSevenButtonMale: "Male",

    // Survey Button Answers (Question 8)
    questionEightAnswerArray: [
        "High Blood Pressure",
        "Coronary Heart Disease or Heart Failure",
        "Diabetes",
        "Chronic Kidney Disease",
        "Currently on Hormone Medication or Immunosuppressive Drugs",
        "Cancer",
        "Liver Cirrhosis",
        "Chronic Lung Disease (Pulmonary Fibrosis, Chronic Obstructive " +
            "Pulmonary Disease (C.O.P.D.), or Respiratory Failure)",
        "Cerebrovascular Disease",
    ],

    // Survey Buttons
    submitButtonText: "Submit",
    restartButtonText: "Retake Survey",

    // Diagnosis Results Screen
    // Results Banner
    covidConfirmedBanner: "It is likely that you have COVID-19.",
    notInfectedBanner: "You do not seem to have COVID-19.",

    // Results Summary
    covidConfirmed:
        "It is recommended that you visit your doctor as soon as possible to verify " +
        "the presence of COVID-19. If your doctor instructs you to go to the emergency room, please wear mask to reduce " +
        "the general rate of COVID-19 infection.",
    notInfected:
        "You do not seem to have the typical expected symptoms of severe COVID-19 " +
        "infection. However, individuals with mild or no symptoms are able to have and spread the coronavirus.",

    // Ways to Protect Yourself (Result Summary)
    needEmergencyCare:
        "If you believe that you are having an emergency, please contact your " +
        "closest medical facility. (You can view a list of nearby national health centers in the Clinics tab).",
    emergencyCardHeader: "In Case of Emergency",

    // Ways to Protect Yourself from COVID-19
    protectionMethodsTitle: "How to protect yourself",
    protectionMethods: [
        "Remain at home if you can unless you need to go to a medical facility.",
        "Do not have close contact with other people.",
        "Wash your hands in a thorough manner for at least 30 seconds.",
        "Avoid placing your hands on your face.",
        "Cover your nose and mouth when you cough and sneeze.",
        "Do not use a tissue more than once. Properly dispose of tissues after using them.",
        "Wear a medical mask if you are tending to someone who is sick.",
        "Regularly clean common surfaces by using sanitation products.",
    ],

    // National Health Center Screen
    nhcResultLength: 7,
    milesAbbreviation: "Mi",
    openNow: "Open Now",
    closed: "Closed",
    nhcLoadingErrorMessage:
        "There was an error loading the closest national health centers",
    callLabel: "Call",
    websiteLabel: "Website",
    directionsLabel: "Directions",
    locationPermissionDenied:
        "Unable to find closest National Health Centers without location permission",
    userLocationError: "Unable to access your location",
    allowLocationLabel: "Allow Location",
    tryAgainLabel: "Try Again",

    // News URLs
    defaultCovidUrl:
        "https://media.npr.org/assets/img/2020/03/11/c_virus_outbreak_sq-428f510423dae3e93" +
        "0089eb9efa735f4c6b8d9f3-s800-c85.jpg",
    cdcUrl: "https://twitter.com/CDCgov",
    whoUrl: "https://twitter.com/WHO",

    // State Information
    statePopulations: {
        alabama: 4903185,
        alaska: 731545,
        arizona: 7278717,
        arkansas: 3017804,
        california: 39512223,
        colorado: 5758736,
        connecticut: 3565287,
        delaware: 973764,
        districtOfColumbia: 705749,
        florida: 21477737,
        georgia: 10617423,
        hawaii: 1415872,
        idaho: 1787065,
        illinois: 12671821,
        indiana: 6732219,
        iowa: 3155070,
        kansas: 2913314,
        kentucky: 4467673,
        louisiana: 4648794,
        maine: 1344212,
        maryland: 6045680,
        massachusetts: 6892503,
        michigan: 9986857,
        minnesota: 5639632,
        mississippi: 2976149,
        missouri: 6137428,
        montana: 1068778,
        nebraska: 1934408,
        nevada: 3080156,
        newHampshire: 1359711,
        newJersey: 8882190,
        newMexico: 2096829,
        newYork: 19453561,
        northCarolina: 10488084,
        northDakota: 762062,
        ohio: 11689100,
        oklahoma: 3956971,
        oregon: 4217737,
        pennsylvania: 12801989,
        rhodeIsland: 1059361,
        southCarolina: 5148714,
        southDakota: 884659,
        tennessee: 6829174,
        texas: 28995881,
        utah: 3205958,
        vermont: 623989,
        virginia: 8535519,
        washington: 7614893,
        westVirginia: 1792147,
        wisconsin: 5822434,
        wyoming: 578759,
    },

    stateAbbreviations: {
        alabama: "AL",
        alaska: "AK",
        "American Samoa": "AS",
        arizona: "AZ",
        arkansas: "AR",
        california: "CA",
        colorado: "CO",
        connecticut: "CT",
        delaware: "DE",
        districtOfColumbia: "DC",
        federatedStatesOfMicronesia: "FM",
        florida: "FL",
        georgia: "GA",
        guam: "GU",
        hawaii: "HI",
        idaho: "ID",
        illinois: "IL",
        indiana: "IN",
        iowa: "IA",
        kansas: "KS",
        kentucky: "KY",
        louisiana: "LA",
        maine: "ME",
        marshallIslands: "MH",
        maryland: "MD",
        massachusetts: "MA",
        michigan: "MI",
        minnesota: "MN",
        mississippi: "MS",
        missouri: "MO",
        montana: "MT",
        nebraska: "NE",
        nevada: "NV",
        newHampshire: "NH",
        newJersey: "NJ",
        newMexico: "NM",
        newYork: "NY",
        northCarolina: "NC",
        northDakota: "ND",
        northernMarianaIslands: "MP",
        ohio: "OH",
        oklahoma: "OK",
        oregon: "OR",
        palau: "PW",
        pennsylvania: "PA",
        puertoRico: "PR",
        rhodeIsland: "RI",
        southCarolina: "SC",
        southDakota: "SD",
        tennessee: "TN",
        texas: "TX",
        utah: "UT",
        vermont: "VT",
        virginIslands: "VI",
        virginia: "VA",
        washington: "WA",
        westVirginia: "WV",
        wisconsin: "WI",
        wyoming: "WY",
    },

    // TODO: NEW STRINGS
    /** Basic Strings **/
    status: {
        loading: "loading",
        resolved: "resolved",
        rejected: "rejected",
    },

    /** Home Screen **/
    home: "Home",

    /** Diagnosis Screen **/
    diagnosis: "Diagnosis",

    /** Clinics Screen **/
    clinics: "Clinics",

    // User Location Slice
    userLocation: {
        name: "UserLocation",
        granted: "granted",
        rejected:
            "The location access for finding the nearest clinics was denied.",
        dialogTitleError: "Location Error",
    },

    /** News Screen **/
    news: "News",
    newsUnavailable: "There are currently no news articles on COVID-19.",

    /** Chat Bot Screen **/
    chatBot: "Chat Bot",
    chatBotUnavailable: "The chat bot is currently unavailable.",
};

export default STRINGS;
