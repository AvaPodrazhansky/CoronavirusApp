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
export const SOCIAL_DISTANCING = 'Avoid close contact with people who are sick and practice social ' +
    'distancing.';
export const NEED_EMERGENCY_CARE = 'If you believe that you are having an emergency, please contact your ' +
    'closest medical facility. (You can view a list of nearby national health centers in the Clinics tab).';
export const EMERGENCY_CARD_HEADER = 'In Case of Emergency';
export const FIND_NEAREST_NATIONAL_HEALTH_CENTERS = 'Find a Clinic Near Me';

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
