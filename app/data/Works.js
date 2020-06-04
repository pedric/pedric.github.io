// self image
import CameraThumb from 'images/self-image/thumbnail.jpg';
import Camera from 'images/self-image/1.jpg';
import Phone from 'images/self-image/2.jpg';
import Knife from 'images/self-image/3.jpg';
import SelfImage5 from 'images/self-image/5.jpg';
import SelfImage6 from 'images/self-image/6.jpg';
// tuk tuk
import Tuktuk from 'images/tuk-tuk/1.png';
import TuktukAnimation from 'images/tuk-tuk/animated.gif';
import TuktukThumb from 'images/tuk-tuk/thumbnail.gif';
import Font1 from 'images/font/1.png';
import Font2 from 'images/font/2.jpg';
import FontThumbnail from 'images/font/thumbnail.jpg';
// medskogen
import MedskogsBild1 from 'images/medskogen-ost/1.jpg';
import MedskogsBild2 from 'images/medskogen-ost/2.png';
import MedskogsBild3 from 'images/medskogen-ost/3.png';
import MedskogsBild4 from 'images/medskogen-ost/4.png';
import MedskogsThumbnail from 'images/medskogen-ost/thumbnail.jpg';
// organic patterns
import Organic1 from 'images/organic-patterns/1.jpg';
import Organic2 from 'images/organic-patterns/2.jpg';
import Organic3 from 'images/organic-patterns/3.jpg';
import Organic4 from 'images/organic-patterns/4.jpg';
import Organic5 from 'images/organic-patterns/5.jpg';
import Organic6 from 'images/organic-patterns/6.jpg';
import Organic7 from 'images/organic-patterns/7.jpg';
import Organic8 from 'images/organic-patterns/8.jpg';
import OrganicThumbnail from 'images/organic-patterns/thumbnail.jpg';
// bergstroms el
import Bel1 from 'images/bergstroms-el/1.png'
import Bel2 from 'images/bergstroms-el/2.png'
import Bel3 from 'images/bergstroms-el/3.png'
import Bel4 from 'images/bergstroms-el/4.png'
import Bel5 from 'images/bergstroms-el/5.png'
import BelThumbnail from 'images/bergstroms-el/thumbnail.png'
// city fishing
import CityFishing1 from 'images/city-fishing/1.png'
import CityFishing2 from 'images/city-fishing/2.png'
import CityFishing3 from 'images/city-fishing/3.png'
import CityFishingThumbnail from 'images/city-fishing/thumbnail.png'
// unframed portraits
import Unframed1 from 'images/unframed-portraits/1.jpg'
import Unframed2 from 'images/unframed-portraits/2.jpg'
import Unframed3 from 'images/unframed-portraits/3.jpg'
import Unframed4 from 'images/unframed-portraits/4.jpg'
import Unframed5 from 'images/unframed-portraits/5.jpg'
import UnframedThumbnail from 'images/unframed-portraits/thumbnail.jpg'


const Works = [
  {
    id:'1',
    author: 'Fredrik Larsson',
    title: 'Self Image',
    description: 'Beskrivning om jobbet',
    thumbnail: {
      type: 'image',
      media: CameraThumb
    },
    slug: 'self-image',
    categories: ['art', 'illustration'],
    bigVideo: [
      {}
    ],
    bigMedia: [
      {
        mediaType: 'image',
        image: Camera,
        alt: 'Camera split in half',
        byline: 'Camera split in half'
      }
    ],
    smallMedia: [
      {
        mediaType: 'image',
        image: Knife,
        alt: 'Knife split in half',
        byline: 'Knife split in half'
      },
      {
        mediaType: 'image',
        image: Phone,
        alt: 'Phone melted in the owen',
        byline: 'Phone melted in the owen'
      },
      {
        mediaType: 'image',
        image: SelfImage5,
        alt: '',
        byline: ''
      },
      {
        mediaType: 'image',
        image: SelfImage6,
        alt: '',
        byline: ''
      }
    ],
    heading: 'Artistic research of the self-image',
    quote: 'The deformation becomes different boundaries, clues or alternatives for the construction of the self-image.',
    preamble: 'An anthropological survey of an individual’s self-image.',
    paragraphs: [
      'I confirm and build my identity based on what I choose to surround myself with and what I choose to use. I communicate and consume to create and maintain and self image. An image that I present to the surroundings and that I myself reflect and frame myself in, with an equally self-defining distancing. The works attack surfaces or layers of self-image found in surroundings, objects, body, behavior and thought, surfaces that constitute a self. Images are built up when materials become subject to what the self is exposed to, or self are performing.',
      'They are planned, founded, shaped, painted, demolished, renovated, sanitized, restored, cleaned, fallen, developed, copied, placed, depicted, depicted, sold, packaged, realized, manipulated, reviewed, shared, commented on, questioned. In the process, layers and fragments emerge from the self where materials and handling are imaged or compressed together. The deformation becomes different boundaries, clues or alternatives for the construction of the self-image.',
      'The process tries to answer how close to the core we dare to keep our self-image towards the environment, but still before ourselves. What is authenticity and falsehood? Is our image unique, like a work of art, a self-portrait or is it a product? Does the image look as it does because we, ourselves, want it or because it is expected to look a certain way?'
    ],
    smallQuote: 'Is our image unique, like a work of art, a self-portrait, or is it a product?'
  },
  {
    id:'2',
    author: 'Fredrik Larsson',
    title: 'Människor i stad',
    description: 'A motion picture paraphrase.',
    thumbnail: {
      type: 'video',
      media: 'https://www.youtube.com/embed/d4zsggDHb90?rel=0&amp;autoplay=1&mute=1&controls=0&start=10&loop=1&vq=tiny'
    },
    slug: 'manniskor-i-stad',
    categories: ['art', 'video'],
    bigVideo: [
      {}
    ],
    bigMedia: [
      {
        mediaType: 'video',
        'video': 'https://www.youtube.com/embed/d4zsggDHb90',
        alt: 'Människor i stad',
        byline: 'I decided to present the paraphrase side by side with the original.'
      }
    ],
    smallMedia: [],
    heading: 'Artistic research of the self-image',
    quote: 'A look back at urban living from 1947',
    preamble: 'Try to look at your surroundings through a camera lens with a historical filter',
    paragraphs: [
      'A paraphrase of Arne Sucksdorffs classic portrait of urban living from 1947.',
    ],
    smallQuote: ''
  },
  {
    id:'3',
    author: 'Fredrik Larsson',
    title: 'Font',
    description: 'My hand writing as a font',
    thumbnail: {
      type: 'image',
      media: FontThumbnail
    },
    slug: 'font',
    categories: ['graphic-design', 'typography'],
    bigVideo: [
      {}
    ],
    bigMedia: [
      {
        mediaType: 'image',
        image: Font2,
        alt: 'The handwriting font in lower- and uppercase.',
        byline: 'The handwriting font in lower- and uppercase.'
      }
    ],
    smallMedia: [
      {
        mediaType: 'image',
        image: Font1,
        alt: 'Example of all the charachters in the font.',
        byline: 'Example of all the charachters in the font.'
      }
    ],
    heading: 'Hendwriting font',
    quote: 'I felt like I had a reason doing my handwriting as a font.',
    preamble: 'This font project saved me a lot of time by the scanner.',
    paragraphs: [
      'I wanted to try making my own font for a while. When a client who had my hand-writing style in the logo kept change it I felt like I had a reason doing my handwriting as a font.',
    ],
    smallQuote: '',
    'link': {
      'url': 'https://github.com/pedric/handwriting-font',
      'text': 'Download font'
    }
  },
  {
    id:'4',
    author: 'Fredrik Larsson',
    title: 'The mountain farmer from Medskogen',
    description: 'Logo design',
    thumbnail: {
      type: 'image',
      media: MedskogsThumbnail
    },
    slug: 'the-mountain-farmer-from-medskogen',
    categories: ['graphic-design', 'illustration', 'website'],
    bigVideo: [
      {}
    ],
    bigMedia: [
      {
        mediaType: 'image',
        image: MedskogsBild1,
        alt: 'Full logo montage',
        byline: 'Full logo montage'
      }
    ],
    smallMedia: [
      {
        mediaType: 'image',
        image: MedskogsBild2,
        alt: 'Illustrated detail from the logo',
        byline: 'Illustrated detail from the logo'
      },
      {
        mediaType: 'image',
        image: MedskogsBild3,
        alt: 'Illustrated detail from the logo',
        byline: 'Illustrated detail from the logo'
      },
      {
        mediaType: 'image',
        image: MedskogsBild4,
        alt: 'Illustrated detail from the logo',
        byline: 'Illustrated detail from the logo'
      }
    ],
    heading: 'Logo design for the mountain farmer from Medskogen',
    quote: ' After doing some drawings I realized that they could be used as a collage to put the logo together.',
    preamble: 'Drawing will give you a well trained eye which caches every detail and shape. I believe in working by hand, even if it is not to be used in the final product like in this case.',
    paragraphs: [
      'I started the process by drawing artefacts used for "old-school" cheese production, mostly to get started somewhere. After doing some drawings I realized that they could be used as a collage to put the logo together. Since I wanted everything to be handmade the text and images were hand drawn and scanned. After a lot of remakes I made a font to use for the future.',
    ],
    smallQuote: '',
    'link': {
      'url': 'http://fjallbonden.se/',
      'text': 'fjallbonden.se'
    }
  },
  {
    id:'5',
    author: 'Fredrik Larsson',
    title: 'Organic patterns',
    description: '...',
    thumbnail: {
      type: 'image',
      media: OrganicThumbnail
    },
    slug: 'organic-patterns',
    categories: ['art'],
    bigVideo: [
      {}
    ],
    bigMedia: [
      {
        mediaType: 'image',
        image: Organic1,
        alt: 'Organic pattern project under the Blackeberg bridge',
        byline: 'Organic pattern project under the Blackeberg bridge'
      }
    ],
    smallMedia: [
      {
        mediaType: 'image',
        image: Organic2,
        alt: 'Organic pattern',
        byline: ''
      },
      {
        mediaType: 'image',
        image: Organic3,
        alt: 'Organic pattern',
        byline: ''
      },
      {
        mediaType: 'image',
        image: Organic4,
        alt: 'Organic pattern',
        byline: ''
      },
      {
        mediaType: 'image',
        image: Organic5,
        alt: 'Organic pattern',
        byline: ''
      },
      {
        mediaType: 'image',
        image: Organic6,
        alt: 'Organic pattern',
        byline: ''
      },
      {
        mediaType: 'image',
        image: Organic7,
        alt: 'Organic pattern',
        byline: ''
      },
      {
        mediaType: 'image',
        image: Organic8,
        alt: 'Organic pattern',
        byline: 'Under the Blackeberg bridge'
      }
    ],
    heading: 'Organic patterns in urban spaces',
    quote: 'It tries to freeze the picture as it is in the middle of the conflict.',
    preamble: 'An art project taken from outside, then inside the studio and outside again.',
    paragraphs: [
      'It started out during a walk. The graffiti under a bridge on my way to the studio was removed, it smelled of toxic liquids and looked horrible.',
      'I did art from the reflections of what I have seen. It tries to freeze the picture as it is in the middle of the "conflict". As part of the reflection of where paint is supposed to be or not to be I worked with canvas aswell as on the streets.',
    ],
    smallQuote: 'It smelled of toxic liquids and looked horrible.'
  },
  {
    id:'6',
    author: 'Fredrik Larsson',
    title: 'St Remy Session',
    description: 'Small edit from a skatesession in St.Remy, France',
    thumbnail: {
      type: 'video',
      media: 'https://www.youtube.com/embed/-NWmcesIz7c?rel=0&amp;autoplay=1&mute=1&controls=0&start=10&loop=1&vq=tiny'
    },
    slug: 'st-remy-session',
    categories: ['video'],
    bigVideo: [
      {}
    ],
    bigMedia: [
      {
        mediaType: 'video',
        'video': 'https://www.youtube.com/embed/-NWmcesIz7c',
        alt: 'Video edit from St.Remy',
        byline: 'Video edit from St.Remy. Curb session with P-O'
      }
    ],
    smallMedia: [],
    heading: 'Curb session',
    quote: 'it caches the good feeling of hanging out with some friends more than different grinds on the curb',
    preamble: 'Small edit from a skatesession in St.Remy, France.',
    paragraphs: [
      'This is nothing special, just one of many edits from a skate session. The reason I like it is that it cached the good feeling of hanging out with some friends more than different grinds on the curb. The music in the clip is from the same day, also played by P-o (the guy on the video)',
    ],
    smallQuote: ''
  },
  {
    id:'7',
    author: 'Fredrik Larsson',
    title: 'Visit Sveg',
    description: 'Web production for a local tourism promoter',
    thumbnail: {
      type: 'video',
      media: 'https://www.youtube.com/embed/KvzZXC_vR6s?rel=0&amp;autoplay=1&mute=1&controls=0&start=10&loop=1&vq=tiny'
    },
    slug: 'visit-sveg',
    categories: ['video', 'ux-design', 'website'],
    bigVideo: [
      {}
    ],
    bigMedia: [
      {
        mediaType: 'video',
        'video': 'https://www.youtube.com/embed/KvzZXC_vR6s',
        alt: 'Mood video, included in the production.',
        byline: 'Byline text'
      }
    ],
    smallMedia: [],
    heading: 'visitsveg.com',
    quote: 'By creating this site we provided a platform to communicate through which replaced much printed information.',
    preamble: 'A platform for the tourism guides and promoters to speak through.',
    paragraphs: [
      'It began with a long collaboration to produce for print media. The project had a limited lifespan. By creating this site we provided a platform to communicate through which replaced much printed information. The content is held up to date cheaper than making prints. Visit Sveg at visitsveg.com :)',
    ],
    smallQuote: '',
    'link': {
      'url': 'http://www.visitsveg.com/',
      'text': 'Visit website'
    }
  },
  {
    id:'5',
    author: 'Fredrik Larsson',
    title: 'Tuk tuk ride',
    description: 'A travel inspired animation. Made in Galle, Sri-Lanka.',
    thumbnail: {
      type: 'image',
      media: TuktukThumb
    },
    slug: 'tuk-tuk-ride',
    categories: ['animation', 'illustration'],
    bigVideo: [
      {}
    ],
    bigMedia: [
      {
        mediaType: 'image',
        image: TuktukAnimation,
        alt: 'alt text',
        byline: 'Going for a ride'
      }
    ],
    smallMedia: [
      {
        mediaType: 'image',
        image: Tuktuk,
        alt: 'alt text two',
        byline: 'The original illustration'
      }
    ],
    heading: 'Tuk-tuk on a virtual cruise',
    quote: 'This, the first and so far only cruise, is going west on Wellawaya road, Galle, Sri-Lanka.',
    preamble: 'A tuk-tuk cruisin the streets of google maps.',
    paragraphs: [
      'The traveling tuk-tuk, made with the intention to be a global traveler. The illustration was put on some merged screendumps from street-view. This, the first and so far only cruise, is going west on Wellawaya road, Galle, Sri-Lanka.',
      'Send me a mail if you want to see it cruise somewhere special.'
    ],
    smallQuote: ''
  },
  {
    id:'8',
    author: 'Fredrik Larsson',
    title: 'Logo Bergströms el AB',
    description: 'Logo design for Bergströms el AB.',
    thumbnail: {
      type: 'image',
      media: BelThumbnail
    },
    slug: 'logo-bergstroms-el',
    categories: ['graphic-design'],
    bigVideo: [
      {}
    ],
    bigMedia: [
      {
        mediaType: 'image',
        image: Bel5,
        alt: 'Logo Bergströms el AB',
        byline: 'Logo for the company Bergströms el AB'
      }
    ],
    smallMedia: [
      {
        mediaType: 'image',
        image: Bel1,
        alt: 'Logo variant Bergströms el AB',
        byline: 'Logo variant Bergströms el AB'
      },
      {
        mediaType: 'image',
        image: Bel2,
        alt: 'Logo variant Bergströms el AB',
        byline: 'Logo variant Bergströms el AB'
      },
      {
        mediaType: 'image',
        image: Bel3,
        alt: 'Logo variant Bergströms el AB',
        byline: 'Logo variant Bergströms el AB'
      },
      {
        mediaType: 'image',
        image: Bel4,
        alt: 'Logo variant Bergströms el AB',
        byline: 'Logo variant Bergströms el AB'
      }
    ],
    heading: 'Logo design',
    quote: 'The sunset behind the mountain skyline.',
    preamble: 'Logo design for a one man electrician company.',
    paragraphs: [
      'The logo represents the sunset behind the mountain skyline of the village where the company is located.'
    ],
    smallQuote: ''
  },
  {
    id:'9',
    author: 'Fredrik Larsson',
    title: 'Logo Sveg City Fishing',
    description: 'Logo design for Sveg City Fishing.',
    thumbnail: {
      type: 'image',
      media: CityFishingThumbnail
    },
    slug: 'logo-city-fishing',
    categories: ['graphic-design'],
    bigVideo: [
      {}
    ],
    bigMedia: [
      {
        mediaType: 'image',
        image: CityFishing1,
        alt: 'Logo Sveg city fising',
        byline: 'Logo Sveg city fising'
      }
    ],
    smallMedia: [
      {
        mediaType: 'image',
        image: CityFishing2,
        alt: 'Icon Sveg city fising',
        byline: 'Icon Sveg city fising'
      },
      {
        mediaType: 'image',
        image: CityFishing3,
        alt: 'Logo variant Sveg city fising',
        byline: 'Logo variant Sveg city fising'
      }
    ],
    heading: 'Logo design',
    quote: 'One of many events or small projects.',
    preamble: 'Logo design for an urban fishing project.',
    paragraphs: [
      'One of many events or small projects aside Visit Sveg.'
    ],
    smallQuote: ''
  },
  {
    id:'10',
    author: 'Fredrik Larsson',
    title: 'Unframed Portraits',
    description: 'A conceptual painting project.',
    thumbnail: {
      type: 'image',
      media: UnframedThumbnail
    },
    slug: 'unframed-portraits',
    categories: ['art'],
    bigVideo: [
      {}
    ],
    bigMedia: [
      {
        mediaType: 'image',
        image: Unframed1,
        alt: 'Portrait of the swedish queen.',
        byline: 'Portrait of the swedish queen.'
      }
    ],
    smallMedia: [
      {
        mediaType: 'image',
        image: Unframed2,
        alt: 'Portrait of the swedish king.',
        byline: 'Portrait of the swedish king.'
      },
      {
        mediaType: 'image',
        image: Unframed3,
        alt: 'Swedish politics',
        byline: 'Swedish politics'
      },
      {
        mediaType: 'image',
        image: Unframed4,
        alt: 'Totally deconstructed portrait, I can not remember who hides behind this act.',
        byline: 'Totally deconstructed portrait, I can not remember who hides behind this act.'
      },
      {
        mediaType: 'image',
        image: Unframed5,
        alt: 'Totally deconstructed portrait, I can not remember who hides behind this act.',
        byline: 'Totally deconstructed portrait, I can not remember who hides behind this act.'
      }

    ],
    heading: 'Unframing',
    quote: 'The questions of where-, what- and by who paint can be applied.',
    preamble: 'Conceptual painting.',
    paragraphs: [
      'A lot of work around this time (2014ish) in the studio discussed the questions of where-, what- and by who paint can be applied.',
    ],
    smallQuote: ''
  }
]

export default Works
