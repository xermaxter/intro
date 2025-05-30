/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Alphin Shybu",
  title: "Hi all, I'm Alphin Shybu",
  subTitle: emoji(
    "A passionate Data Scientist 🚀 who loves analyzing data, building predictive models, and creating insightful visualizations."
  ),
  resumeLink:
    "", // Add your resume link here or leave empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/xermaxter", // <-- Your GitHub username here
  linkedin: "https://www.linkedin.com/in/alphinshybu/",
  gmail: "alphinshybu@example.com",
  instagram: "https://www.instagram.com/alphinshybu",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate Data Scientist who works with data to find insights and build predictive models",
  skills: [
    emoji("⚡ Analyze data to find insights"),
    emoji("⚡ Build predictive models using Machine Learning"),
    emoji("⚡ Create data visualizations and reports"),
    emoji("⚡ Work extensively with Excel for data cleaning and analysis")
  ],

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Pandas",
      fontAwesomeClassname: "logos-pandas"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "logos-tableau"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "logos-microsoft-excel"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: false,
  schools: []
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Python",
      progressPercentage: "85%"
    },
    {
      Stack: "SQL",
      progressPercentage: "80%"
    },
    {
      Stack: "Excel",
      progressPercentage: "75%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Tableau",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Data Science Intern",
      company: "Codectechnologies",
      companylogo: require("./assets/images/codectechnologies.png"),
      date: "May 1, 2024 – May 31, 2024",
      desc: "Completed a data science internship working on real-world datasets to extract insights and build predictive models.",
      descBullets: [
        "Analyzed datasets to identify trends and anomalies.",
        "Built machine learning models to predict outcomes.",
        "Prepared reports and dashboards to communicate findings."
      ],
      certificateLink: "https://drive.google.com/file/d/your-codectech-certificate-link/view?usp=sharing"
    },
    {
      role: "Data Science Intern",
      company: "CodeAlpha",
      companylogo: require("./assets/images/CodeAlpha.png"),
      date: "June 1, 2024 – June 30, 2024",
      desc: "Internship focusing on advanced data analytics and visualization using Python and Tableau.",
      descBullets: [
        "Worked with large datasets to clean and preprocess data.",
        "Developed dashboards for business stakeholders.",
        "Enhanced predictive model accuracy by feature engineering."
      ],
      certificateLink: "https://drive.google.com/file/d/your-codealpha-certificate-link/view?usp=sharing"
    }
  ]
};

// Open Source Section

const openSource = {
  showGithubProfile: true,
  display: true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Projects showcasing my data science and analytics skills",
  projects: [
    // Add your projects here
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certificates and milestones achieved during my learning and internships.",
  achievementsCards: [
    // Add your achievements here
  ],
  display: true
};

// Blogs Section

const blogSection = {
  display: false
};

// Talks Sections

const talkSection = {
  display: false
};

// Podcast Section

const podcastSection = {
  display: false
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false
};

// Contact Info

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to reach out for project discussions or just a friendly hello.",
  number: "+91-0000000000",
  email_address: "alphinshybu@example.com"
};

// Twitter Section

const twitterDetails = {
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
