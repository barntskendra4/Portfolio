type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Kendra Barnts Portfolio",
    fullName: "Kendra Barnts",
    email: "kendrabarnts1@gmail.com",
  },
  hero: {
    name: "Kendra Barnts",
    p: ["I am a junior full-stack developer"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `As a passionate and dedicated junior full stack developer, I thrive on creating innovative and efficient web applications. With a solid background in both front-end and back-end technologies, I excel at bridging the gap between aesthetic design and robust functionality.

      I’m a quick learner and always eager to dive into new challenges and technologies. Whether it’s adapting to the latest frameworks or troubleshooting complex issues, my ability to swiftly grasp and apply new concepts sets me apart.

      Beyond the technical realm, I’m a people person at heart. Collaboration and communication are key to my approach, ensuring that project goals are met while fostering a positive and productive team environment. My interpersonal skills allow me to connect with clients and colleagues alike, translating complex technical jargon into understandable insights and fostering effective teamwork.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others think",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  }
};