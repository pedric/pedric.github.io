import Logo from 'images/logo/logo.png';
import LogoStacked from 'images/logo/logo_stacked.png';
import LogoVariants from 'images/logo/logo_variants.png';
import LogoSVG from'images/documents/logo.svg';
import LogoStackedSVG from'images/documents/logo_stacked.svg';
import LogoPNG from'images/documents/logo.png';
import LogoStackedPNG from'images/documents/logo_stacked.png';
import Cv from'images/documents/CV_fredrik_larsson.jpg';

const StyleguideData = [
  {
    section: 'welcome',
    blocks: [
      {
        title: '',
        preamble: 'This styleguide will contain assets and guidelines of how to work with visual communication.',
        paragraphs: [],
        media: []
      }
    ]
  },
  {
    section: 'logotype',
    blocks: [
      {
        title: '',
        preamble: 'The logotype have two variants; stacked and on one line. Use the one on a line as the primary variant and the stacked one when the width is limited and for profile/avatar image.',
        paragraphs: [],
        media: [
          {
            type:'image',
            item: Logo,
            alt: 'logo - Hello Fredrik',
            byline: 'Inline logo'
          },
          {
            type:'image',
            item: LogoStacked,
            alt: 'logo - Hello Fredrik',
            byline: 'Stacked logotype'
          }
        ]
      },
      {
        title: 'Variations',
        preamble: '',
        paragraphs: [
          'Mix the colors from the palette with the logo as you like.'
        ],
        media: [
          {
            type:'image',
            item: LogoVariants,
            alt: 'Colored variants of the logo',
            byline: 'Colored variants of the logo'
          }
        ]
      }
    ]
  },
  {
    section: 'color',
    blocks: [
      {
        title: '',
        preamble: 'The color palette have 5 vivid colors with 3 tones each. There are three gray scales; neutral, cold and warm.',
        paragraphs: [
          'Use the colors wildly and mix any kind of gradient with them. Do not be to careful.'
        ],
        media: [],
        palettes:[
          {
            name: 'Turquoise',
            color: '#fff',
            dark: '#1e3349',
            neutral: '#045569',
            light: '#3e888e'
          },
          {
            name: 'Pink',
            color: '#fff',
            dark: '#49192b',
            neutral: '#d72c6d',
            light: '#df4b8a'
          },
          {
            name: 'Orange',
            color: '#000',
            dark: '#e6311f',
            neutral: '#e8481d',
            light: '#ee7523'
          },
          {
            name: 'Yellow',
            color: '#000',
            dark: '#f49f17',
            neutral: '#fbd200',
            light: '#f1e73a'
          },
          {
            name: 'Green',
            color: '#fff',
            dark: '#183838',
            neutral: '#025d52',
            light: '#56a639'
          },
          {
            name: 'Blue',
            color: '#fff',
            dark: '#1c2c60',
            neutral: '#253c7f',
            light: '#2a4b9b'
          },
          {
            name: 'Gray',
            color: '#000',
            dark: '#646363',
            neutral: '#e3e3e3',
            light: '#f6f6f6'
          },
          {
            name: 'Cold gray',
            color: '#000',
            dark: '#4d5452',
            neutral: '#a3a4a5',
            light: '#b3b6b9'
          },
          {
            name: 'Warm gray',
            color: '#000',
            dark: '#444132',
            neutral: '#a4a185',
            light: '#cac8b5'
          }
        ]
      }
    ]
  },
  {
    section: 'typography',
    blocks: [
      {
        title: '',
        preamble: 'Helvetica for everything.',
        paragraphs: [
          'Small headings and "standard" size (default paragraphs on the web). Add a litttle extra line-height and everyone will be a happy reader.'
        ],
        media: []
      }
    ]
  },
  {
    section: 'Downloads',
    blocks: [
      {
        title: 'Logotype',
        preamble: '',
        paragraphs: [],
        media: [
          {
            type:'document',
            item: LogoSVG,
            alt: '',
            byline: 'Logo (svg)'
          },
          {
            type:'document',
            item: LogoStackedSVG,
            alt: '',
            byline: 'Logo stacked (svg)'
          },
          {
            type:'document',
            item: LogoPNG,
            alt: '',
            byline: 'Logo (png)'
          },
          {
            type:'document',
            item: LogoStackedPNG,
            alt: '',
            byline: 'Logo stacked (png)'
          }
        ]
      },
      {
        title: 'CV',
        preamble: '',
        paragraphs: [],
        media: [
          {
            type:'document',
            item: Cv,
            alt: '',
            byline: 'CV (jpg)'
          }
        ]
      }
    ]
  }
]

export default StyleguideData
