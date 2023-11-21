import anthemsPreview from '/public/anthemsPreview.png'
import chroniclesPreview from '/public/chroniclesPreview.png'
import hyperloomPreview from '/public/hyperloomPreview.png'


const ProjectArray = {
  'anthems' : 
  {title : 'Avian Anthems', size: '4', mod : '3rd', 
    tech: ['react', 'javascript', 'typescript', 'html5', 'css3', 'mocha', 'git'],
    previewImg: anthemsPreview,
    abstract: 'The world of birdsongs is a vast one, and this project aims to offer a glimpse into a robust trove of calls and songs that have been collected by our fellow audience members.'
  },
  'chronicles' : 
  {title : 'Mars Chronicles', size: '4', mod : '3rd', 
    tech : ['react', 'redux', 'javascript', 'html5', 'css3', 'mocha', 'git'],
    previewImg: chroniclesPreview,
    abstract: 'One of mankinds most incredible accomplishments to date is certainly our ventures into the exploration of space. This application enables users to browse Mars Rover images, as offered directly from NASA and updated on a nearly daily basis. '
  },
  'hyperloom' : 
  {title: 'Hyper Loom', size: '7', mod : '4th', 
    tech: ['react', 'redux', 'javascript', 'html5', 'css3', 'mocha', 'git'],
    abstract: 'This project is a unique offering indeed, as it enables users to explore vibrant imagined worlds that have been generated with ChatGPT, MidJourney, and our teams intention to offer fuel to the creative fires of those who interact with it.',
    previewImg: hyperloomPreview
  }
}

export default ProjectArray;