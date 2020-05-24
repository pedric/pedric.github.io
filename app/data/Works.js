import Camera from 'images/self-image/1.jpg';
import Phone from 'images/self-image/2.jpg';
import Knife from 'images/self-image/3.jpg';

const Works = [
  {
    'id':'1',
    'author': 'Fredrik Larsson',
    'title': 'Self Image',
    'description': 'Beskrivning om jobbet',
    'thumbnail': Camera,
    'slug': 'self-image',
    'categories': ['art', 'illustration'],
    'mediaType': 'image',
    'bigVideo': [
      {}
    ],
    'bigImage': [
      {
        'image': Camera,
        'alt': 'alt text',
        'byline': 'Byline text'
      }
    ],
    'smallImages': [
      {
        'image': Knife,
        'alt': 'alt text knife',
        'byline': 'Byline text'
      },
      {
        'image': Phone,
        'alt': 'alt text two',
        'byline': 'Byline text'
      }
    ],
    'smallVideos': [
      {}
    ],
    'heading': 'Artistic research of the self-image',
    'quote': 'The deformation becomes different boundaries, clues or alternatives for the construction of the self-image.',
    'preamble': 'An anthropological survey of an individual’s self-image.',
    'paragraphs': [
      'I confirm and build my identity based on what I choose to surround myself with and what I choose to use. I communicate and consume to create and maintain and self image. An image that I present to the surroundings and that I myself reflect and frame myself in, with an equally self-defining distancing. The works attack surfaces or layers of self-image found in surroundings, objects, body, behavior and thought, surfaces that constitute a self. Images are built up when materials become subject to what the self is exposed to, or self are performing.',
      'They are planned, founded, shaped, painted, demolished, renovated, sanitized, restored, cleaned, fallen, developed, copied, placed, depicted, depicted, sold, packaged, realized, manipulated, reviewed, shared, commented on, questioned. In the process, layers and fragments emerge from the self where materials and handling are imaged or compressed together. The deformation becomes different boundaries, clues or alternatives for the construction of the self-image.',
      'The process tries to answer how close to the core we dare to keep our self-image towards the environment, but still before ourselves. What is authenticity and falsehood? Is our image unique, like a work of art, a self-portrait or is it a product? Does the image look as it does because we, ourselves, want it or because it is expected to look a certain way?'
    ],
    'smallQuote': 'Is our image unique, like a work of art, a self-portrait or is it a product?'
  }
]

export default Works
