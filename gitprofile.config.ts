// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'mhj2208', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['mhj2208/portfolio'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'About & Ongoing',
      projects: [
        {
          title: 'About Me',
          description:
            '성균관대학교 인공지능융합학과 재학 중. 딥러닝, 데이터 분석, 영화 연출 등 다양한 분야에 관심이 있습니다'
        },
        {
          title: 'Ongoing Projects',
          description:
            'AI 생성 이미지 분류 연구 프로젝트 : 인공지능융합전공 학회 BRAIN에서 최신 논문을 바탕으로 Masking 기법에서의 조정을 통해 ai생성 이미지를 구별하는 방법을 연구중.'
        }
      ]
      // To hide the External Projects section, keep it empty.
    },
  },

  seo: {
    title: 'Portfolio of mhj2208',
    description: 'Personal portfolio and projects by mhj2208',
    imageURL: '',
  },
  social: {
    email: 'mhj2208@gmail.com',
  },

  skills: [
    'C (C language)',
    'Drums (Jazz & Heavy Metal)',
    'Film Direction',
    'Cinematography',
    'Acting',
  ],
  experiences: [
    {
      company: '강남대성수능연구소',
      position: '물리학 검토 조교',
      from: '2024',
      to: 'Present',
      companyLink: ' ',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'SKKU (Sungkyunkwan University)',
      degree: 'Artificial Intelligence - Sophomore',
      from: '2024',
      to: 'Present',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)

  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
