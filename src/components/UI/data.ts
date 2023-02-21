export interface portfolioDetail {
  id: string
  title: string
  img: string
  category: string
  keyword: string[]
  liveUrl: string
  githubUrl: string
}
export interface logoDataTypes {
  img: string
  name: string

}
export const logoData:logoDataTypes[] = [
  {
    img: 'react.svg',
    name: 'React JS'
  },
  {
    img: 'typescript.svg',
    name: 'TypeScript'
  },
  {
    img: 'javascript.svg',
    name: 'Javascript'
  },
  {
    img: 'nextjs.svg',
    name: 'Next JS'
  },
  {
    img: 'firebase.svg',
    name: 'Firebase'
  },
  {
    img: 'nodejs.svg',
    name: 'Node JS'
  },
  {
    img: 'github.svg',
    name: 'Github'
  }
]

export const portfolio:portfolioDetail[] = [
    {
      id: "01",
      title: "FreshTube Video Player",
      img: "/porto/freshtube.png",
      category: "Web",
      keyword: ["React", "Web", "react-query"],
      liveUrl: "https://freshtube-client.vercel.app/",
      githubUrl: 'https://github.com/triramdhani/freshtube-client'
    },
  
    {
      id: "02",
      title: "Meditation Landing Page",
      img: "/porto/meditaton.png",
      category: "Web",
      keyword: ["web", "Slicing", "HTML/Css"],
      liveUrl: "https://meditation-rho.vercel.app",
      githubUrl: 'https://github.com/triramdhani/meditation-landingPage'

    },
  
    {
      id: "03",
      title: "Odin Eatch a Scatch",
      img: "/porto/odin.png",
      category: "Web",
      keyword: ["HTML/CSS", "Web", "Javascript"],
      liveUrl: "https://triramdhani.github.io/Odin-Etch-A-Scatch/",
      githubUrl: "https://github.com/triramdhani/Odin-Etch-A-Scatch"
    },
  
    
  ];
  
  // export default portfolio;
