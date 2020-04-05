// Terms and Conditions Screen
export const TERMS_TITLE = 'COVID-19 Self-Diagnosis\nTerms and Conditions';
export const termsTitleArray = [
    'Purpose Statement',
    'Conditions Statement',
    'Privacy Statement',
    'By selecting "I accept", you indicate that you have reviewed and agree to our conditions statement and privacy ' +
    'statement.'
];
export const termsArray = [
    'The main purpose of the COVID-19 Self-Diagnosis is to help you make informed decisions regarding the important ' +
    'process of seeking appropriate medical care. As such, this self-evaluation is neither intended to substitute ' +
    'the advice of medical professionals nor to make a formal diagnosis on or treatment of COVID-19. Lastly, the ' +
    'COVID-19 Self-Diagnosis is primarily intended for people who are currently located in the United States.',
    'To the fullest extent provided by law, we hereby disclaim all warranties of any kind (whether expressed or ' +
    'implied, statutory, or otherwise) including to but not limited to any warranties of merchantability, ' +
    'non-infringement, and fitness for particular purpose. As such, your use of this self-evaluation is solely at ' +
    'your own risk.',
    'We will not collect the data that you input within the self-evaluation and any personal information such as ' +
    'your name, phone number, and address. The COVID-19 Self-Diagnosis is solely for your benefit.',
    ''
];
export const ACCEPT_CONDITIONS = 'I accept.';

// Home Screen
export const CUMULATIVE_CASES_HEADER = 'Cumulative Cases in United States';
export const CONFIRMED_LABEL = 'Confirmed: ';
export const RECOVERED_LABEL = 'Recovered: ';
export const DEAD_LABEL = 'Deaths: ';
export const CONFIRMED = 'Confirmed';
export const RECOVERED = 'Recovered';
export const DEAD = 'Deaths';
export const CONFIRMED_TYPE = 'CONFIRMED_TYPE';
export const DEATHS_TYPE = 'DEATHS_TYPE';
export const RECOVERED_TYPE = 'RECOVERED_TYPE';
// Value state populations are divided by when sorting
// (to make unbiased, change to 1). The purpose of this
// is so that there is visible colors on the toolbars on the
// statelist
export const toolbarShiftValue = 1;
export const PERCENTAGE = 'PERCENTAGE';

// Survey Questions
export const QUESTION_ONE = 'N/A. What is your current location?'; // Question 1 omitted as per Dr. Han's instructions
export const QUESTION_TWO = '1. Which of the following symptoms do you have?';
export const QUESTION_THREE = '2. Were you potentially exposed to someone who is suspected or confirmed to have the ' +
    'coronavirus (COVID-19)?';
export const QUESTION_FOUR = 'N/A. During the past two weeks, how many times have you taken public transportation ' +
    '(airplanes, buses, subways, trains, taxis, cruises, etc.) with confirmed COVID-19 case(s) on board in which ' +
    'you are not wearing a face mask?'; // Question 4 omitted as per Dr. Han's instructions
export const QUESTION_FIVE = 'N/A. During the past two weeks, have you been to the following places or made contact ' +
    'with the people or wild animals listed below?'; // Question 5 omitted as per Dr. Han's instructions
export const QUESTION_SIX = '3. What is your age?';
export const QUESTION_SEVEN = '4. What is your sex?';
export const QUESTION_EIGHT = '5. Do you have existing conditions or diseases listed below?';

// Survey Button Answers (Question 2)
export const QUESTION_TWO_BUTTON_ANSWER_ONE = 'Elevated Body Temperature';
export const QUESTION_TWO_BUTTON_ANSWER_TWO = 'Extreme Fatigue';
export const QUESTION_TWO_BUTTON_ANSWER_THREE = 'Chills or Tremors';
export const QUESTION_TWO_BUTTON_ANSWER_FOUR = 'Sore Throat';
export const QUESTION_TWO_BUTTON_ANSWER_FIVE = 'Cough';
export const QUESTION_TWO_BUTTON_ANSWER_SIX = 'Shortness of Breath';
export const QUESTION_TWO_BUTTON_ANSWER_SEVEN = 'Diarrhea';
export const QUESTION_TWO_BUTTON_ANSWER_EIGHT = 'Pink Eye';
export const QUESTION_TWO_BUTTON_ANSWER_NINE = 'Chest Pain';
export const QUESTION_TWO_BUTTON_ANSWER_TEN = 'Persistent Headache';
export const QUESTION_TWO_BUTTON_ANSWER_ELEVEN = 'Decreased Sweating or Urination';
export const QUESTION_TWO_BUTTON_ANSWER_TWELVE = 'None of the Above';

export const questionTwoAnswerArray = [
    QUESTION_TWO_BUTTON_ANSWER_ONE,
    QUESTION_TWO_BUTTON_ANSWER_TWO,
    QUESTION_TWO_BUTTON_ANSWER_THREE,
    QUESTION_TWO_BUTTON_ANSWER_FOUR,
    QUESTION_TWO_BUTTON_ANSWER_FIVE,
    QUESTION_TWO_BUTTON_ANSWER_SIX,
    QUESTION_TWO_BUTTON_ANSWER_SEVEN,
    QUESTION_TWO_BUTTON_ANSWER_EIGHT,
    QUESTION_TWO_BUTTON_ANSWER_NINE,
    QUESTION_TWO_BUTTON_ANSWER_TEN,
    QUESTION_TWO_BUTTON_ANSWER_ELEVEN,
    QUESTION_TWO_BUTTON_ANSWER_TWELVE
];

// Survey Button Answers (Question 3)
export const QUESTION_THREE_BUTTON_NO = 'No';
export const QUESTION_THREE_BUTTON_YES = 'Yes';

// Survey Button Answers (Question 5)
export const QUESTION_FIVE_BUTTON_ANSWER_ONE = 'Wild animals (Bats, Marmots, Civets, Camels, or Rats)';
export const QUESTION_FIVE_BUTTON_ANSWER_TWO = 'Close contact with people from Hubei China, South Korea, Italy, ' +
    'Iran or Japan without wearing a face mask. (Close contact includes but is not limited to talking, eating, ' +
    'studying, or taking public transportation together.)';
export const QUESTION_FIVE_BUTTON_ANSWER_THREE = 'Other people who are experiencing the symptoms listed on the ' +
    'first question';
export const QUESTION_FIVE_BUTTON_ANSWER_FOUR = 'Close contact with suspected or confirmed COVID-19 case(s)';
export const QUESTION_FIVE_BUTTON_ANSWER_FIVE = 'Presence of confirmed COVID-19 case(s) in your community';

export const questionFiveAnswerArray = [
    QUESTION_FIVE_BUTTON_ANSWER_ONE,
    QUESTION_FIVE_BUTTON_ANSWER_TWO,
    QUESTION_FIVE_BUTTON_ANSWER_THREE,
    QUESTION_FIVE_BUTTON_ANSWER_FOUR,
    QUESTION_FIVE_BUTTON_ANSWER_FIVE
];

// Survey Button Answers (Question 7)
export const QUESTION_SEVEN_BUTTON_FEMALE = 'Female';
export const QUESTION_SEVEN_BUTTON_MALE = 'Male';

// Survey Button Answers (Question 8)
export const QUESTION_EIGHT_BUTTON_ANSWER_ONE = 'High Blood Pressure';
export const QUESTION_EIGHT_BUTTON_ANSWER_TWO = 'Coronary Heart Disease or Heart Failure';
export const QUESTION_EIGHT_BUTTON_ANSWER_THREE = 'Diabetes';
export const QUESTION_EIGHT_BUTTON_ANSWER_FOUR = 'Chronic Kidney Disease';
export const QUESTION_EIGHT_BUTTON_ANSWER_FIVE = 'Currently on Hormone Medication or Immunosuppressive Drugs';
export const QUESTION_EIGHT_BUTTON_ANSWER_SIX = 'Cancer';
export const QUESTION_EIGHT_BUTTON_ANSWER_SEVEN = 'Liver Cirrhosis';
export const QUESTION_EIGHT_BUTTON_ANSWER_EIGHT = 'Chronic Lung Disease (Pulmonary Fibrosis, Chronic Obstructive ' +
    'Pulmonary Disease (C.O.P.D.), or Respiratory Failure)';
export const QUESTION_EIGHT_BUTTON_ANSWER_NINE = 'Cerebrovascular Disease';

export const questionEightAnswerArray = [
    QUESTION_EIGHT_BUTTON_ANSWER_ONE,
    QUESTION_EIGHT_BUTTON_ANSWER_TWO,
    QUESTION_EIGHT_BUTTON_ANSWER_THREE,
    QUESTION_EIGHT_BUTTON_ANSWER_FOUR,
    QUESTION_EIGHT_BUTTON_ANSWER_FIVE,
    QUESTION_EIGHT_BUTTON_ANSWER_SIX,
    QUESTION_EIGHT_BUTTON_ANSWER_SEVEN,
    QUESTION_EIGHT_BUTTON_ANSWER_EIGHT,
    QUESTION_EIGHT_BUTTON_ANSWER_NINE
];

// Survey Buttons
export const SUBMIT_BUTTON_TEXT = 'Submit';
export const RESTART_BUTTON_TEXT = 'Retake Survey';

// Diagnosis Results Screen
// Results Banner
export const COVID_CONFIRMED_BANNER = 'It is likely that you have COVID-19.';
export const NOT_INFECTED_BANNER = 'You do not seem to have COVID-19.';

// Results Summary
export const COVID_CONFIRMED = 'It is recommended that you visit your doctor as soon as possible to verify ' +
    'the presence of COVID-19. If your doctor instructs you to go to the emergency room, please wear mask to reduce ' +
    'the general rate of COVID-19 infection.';
export const NOT_INFECTED = 'You do not seem to have the typical expected symptoms of severe COVID-19 ' +
    'infection. However, individuals with mild or no symptoms are able to have and spread the coronavirus.';

// Ways to Protect Yourself (Result Summary)
export const NEED_EMERGENCY_CARE = 'If you believe that you are having an emergency, please contact your ' +
    'closest medical facility. (You can view a list of nearby national health centers in the Clinics tab).';
export const EMERGENCY_CARD_HEADER = 'In Case of Emergency';

// Ways to Protect Yourself from COVID-19
export const PROTECTION_METHODS_TITLE = 'How to protect yourself';
export const protectionMethods = [
    'Remain at home if you can unless you need to go to a medical facility.',
    'Do not have close contact with other people.',
    'Wash your hands in a thorough manner for at least 30 seconds.',
    'Avoid placing your hands on your face.',
    'Cover your nose and mouth when you cough and sneeze.',
    'Do not use a tissue more than once. Properly dispose of tissues after using them.',
    'Wear a medical mask if you are tending to someone who is sick.',
    'Regularly clean common surfaces by using sanitation products.',
];

export const PROTECTION_METHOD_ONE = protectionMethods[0];
export const PROTECTION_METHOD_TWO = protectionMethods[1];
export const PROTECTION_METHOD_THREE = protectionMethods[2];
export const PROTECTION_METHOD_FOUR = protectionMethods[3];
export const PROTECTION_METHOD_FIVE = protectionMethods[4];
export const PROTECTION_METHOD_SIX = protectionMethods[5];
export const PROTECTION_METHOD_SEVEN = protectionMethods[6];
export const PROTECTION_METHOD_EIGHT = protectionMethods[7];

// National Health Center Screen
export const NHC_RESULT_LENGTH = 7;
export const MILES_ABBREVIATION = 'Mi';
export const OPEN_NOW = 'Open Now';
export const CLOSED = 'Closed';

// News URLs
export const DEFAULT_COVID_URL = 'https://media.npr.org/assets/img/2020/03/11/c_virus_outbreak_sq-428f510423dae3e93' +
    '0089eb9efa735f4c6b8d9f3-s800-c85.jpg';
export const CDC_URL = 'https://twitter.com/CDCgov';
export const WHO_URL = 'https://twitter.com/WHO';

//State Information
export const statePopulations = {
    'Alabama': 4903185,
    'Alaska': 731545,
    'Arizona': 7278717,
    'Arkansas': 3017804,
    'California': 39512223,
    'Colorado': 5758736,
    'Connecticut': 3565287,
    'Delaware': 973764,
    'District of Columbia': 705749,
    'Florida': 21477737,
    'Georgia': 10617423,
    'Hawaii': 1415872,
    'Idaho': 1787065,
    'Illinois': 12671821,
    'Indiana': 6732219,
    'Iowa': 3155070,
    'Kansas': 2913314,
    'Kentucky': 4467673,
    'Louisiana': 4648794,
    'Maine': 1344212,
    'Maryland': 6045680,
    'Massachusetts': 6892503,
    'Michigan': 9986857,
    'Minnesota': 5639632,
    'Mississippi': 2976149,
    'Missouri': 6137428,
    'Montana': 1068778,
    'Nebraska': 1934408,
    'Nevada': 3080156,
    'New Hampshire': 1359711,
    'New Jersey': 8882190,
    'New Mexico': 2096829,
    'New York': 19453561,
    'North Carolina': 10488084,
    'North Dakota': 762062,
    'Ohio': 11689100,
    'Oklahoma': 3956971,
    'Oregon': 4217737,
    'Pennsylvania': 12801989,
    'Rhode Island': 1059361,
    'South Carolina': 5148714,
    'South Dakota': 884659,
    'Tennessee': 6829174,
    'Texas': 28995881,
    'Utah': 3205958,
    'Vermont': 623989,
    'Virginia': 8535519,
    'Washington': 7614893,
    'West Virginia': 1792147,
    'Wisconsin': 5822434,
    'Wyoming': 578759,
};

export const stateAbbreviations = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'American Samoa': 'AS',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'District of Columbia': 'DC',
    'Federated States of Micronesia': 'FM',
    'District Of Columbia': 'DC',
    'Federated States Of Micronesia': 'FM',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Guam': 'GU',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Marshall Islands': 'MH',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Northern Mariana Islands': 'MP',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Palau': 'PW',
    'Pennsylvania': 'PA',
    'Puerto Rico': 'PR',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virgin Islands': 'VI',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY',
};

export const stateAbbreviationsFullNames = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
};
