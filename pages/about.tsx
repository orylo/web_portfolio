import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Navigation from '../components/Navigation';

interface Section {
  id: string;
  title: string;
  content: {
    question: string;
    answer: string[];
  }[];
  isOpen: boolean;
}

const About: NextPage = () => {
  const [sections, setSections] = useState<Section[]>([
    {
      id: "work-experience",
      title: "Work Experience",
      content: [
        {
          question: "What is your current role?",
          answer: [
            "Senior UX Designer @ Meta (2021 - Present)",
            "• Leading design initiatives for Meta's AR/VR products in the metaverse team",
            "• Collaborating with cross-functional teams to develop innovative user experiences",
            "• Mentoring junior designers and conducting design workshops",
            "",
            "Product Designer @ Google (2018 - 2021)",
            "• Designed user interfaces for Google Cloud Platform products",
            "• Led the redesign of key dashboard features, improving user engagement by 40%",
            "• Collaborated with engineers and product managers to implement design solutions"
          ]
        },
        {
          question: "What was your previous experience?",
          answer: [
            "UI/UX Designer @ Apple (2016 - 2018)",
            "• Contributed to the design of iOS native applications",
            "• Developed and maintained design systems for consistent user experience",
            "• Participated in user research and usability testing"
          ]
        }
      ],
      isOpen: false
    },
    {
      id: "education",
      title: "Education",
      content: [
        {
          question: "What is your educational background?",
          answer: [
            "Master of Design @ Royal College of Art (2014 - 2016)",
            "• Specialized in Digital Experience Design",
            "• Thesis: 'The Future of Human-Computer Interaction in Mixed Reality'"
          ]
        },
        {
          question: "What was your undergraduate study?",
          answer: [
            "Bachelor of Fine Arts @ Rhode Island School of Design (2010 - 2014)",
            "• Major in Graphic Design",
            "• Minor in Digital Media",
            "• Dean's List: 2012-2014"
          ]
        }
      ],
      isOpen: false
    },
    {
      id: "skills",
      title: "Skills & Expertise",
      content: [
        {
          question: "What are your core design skills?",
          answer: [
            "Design",
            "• User Experience (UX) Design",
            "• User Interface (UI) Design",
            "• Interaction Design",
            "• Visual Design",
            "• Prototyping"
          ]
        },
        {
          question: "What tools do you use?",
          answer: [
            "Tools",
            "• Figma, Sketch, Adobe Creative Suite",
            "• Protopie, Principle, Framer",
            "• HTML, CSS, JavaScript"
          ]
        },
        {
          question: "What are your soft skills?",
          answer: [
            "Soft Skills",
            "• Project Management",
            "• Team Leadership",
            "• Design Thinking",
            "• Problem Solving"
          ]
        }
      ],
      isOpen: false
    },
    {
      id: "awards",
      title: "Awards & Recognition",
      content: [
        {
          question: "What are your recent achievements?",
          answer: [
            "2023 - Red Dot Design Award",
            "• Best of the Best in Digital Design Category",
            "",
            "2022 - IF Design Award",
            "• Gold Award in UX/UI Design"
          ]
        },
        {
          question: "Any other recognition?",
          answer: [
            "2021 - Adobe Design Achievement Awards",
            "• Finalist in Experience Design"
          ]
        }
      ],
      isOpen: false
    }
  ]);

  const toggleSection = (id: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, isOpen: !section.isOpen } : section
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>About - Portfolio</title>
        <meta name="description" content="About me - Portfolio" />
      </Head>

      <div className="fixed inset-0 bg-gray-200" style={{ zIndex: -1 }}></div>

      <div className="relative" style={{ zIndex: 1 }}>
        <Navigation />

        <main className="flex-grow">
          <div className="max-w-[1728px] mx-auto px-4 md:px-16 pt-32 pb-8">
            <p className="text-[3rem] leading-normal mb-16 font-light">
              I am a passionate designer focused on creating meaningful digital experiences 
              that bridge the gap between human needs and technological possibilities. 
              With over 8 years of experience in UX/UI design, I've had the privilege 
              of working with some of the world's leading tech companies to shape the 
              future of digital interactions.
            </p>
          </div>

          <div className="space-y-0 bg-white">
            {sections.map((section) => (
              <div key={section.id} className="border-t border-black">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full hover:bg-gray-50 transition-colors"
                >
                  <div className="max-w-[1728px] mx-auto px-4 md:px-16 py-4 flex justify-between items-center">
                    <span className="text-[2rem] font-medium">{section.title}</span>
                    <span className="transform transition-transform text-[2rem]">
                      {section.isOpen ? '−' : '+'}
                    </span>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${
                    section.isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="max-w-[1728px] mx-auto px-4 md:px-16 py-12">
                    <div className="grid md:grid-cols-2 md:divide-x md:divide-black">
                      <div className="pr-8 h-full">
                        <div className="bg-gray-300 h-full"></div>
                      </div>
                      <div className="pl-8">
                        {section.content.map((item, index) => (
                          <div key={index} className="mb-16 last:mb-0">
                            <h3 className="text-lg font-medium mb-6">{item.question}</h3>
                            <div className="space-y-2 text-gray-600">
                              {item.answer.map((line, lineIndex) => (
                                <p key={lineIndex} className="whitespace-pre-line">
                                  {line}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="border-t border-black bg-white">
          <div className="max-w-[1728px] mx-auto px-4 md:px-16 py-20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xs uppercase mb-4">Tel.</h3>
                <p className="text-sm text-gray-600">
                  +82 (0)10 5098 0424
                </p>
              </div>
              <div>
                <h3 className="text-xs uppercase mb-4">Contact</h3>
                <p className="text-sm text-gray-600">
                  orylo0424@gmail.com
                </p>
              </div>
              <div>
                <h3 className="text-xs uppercase mb-4">Copyright</h3>
                <p className="text-sm text-gray-600">
                  orylo© 2024.<br />
                  All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About; 