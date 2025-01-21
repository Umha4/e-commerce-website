const AboutUs = {
    name: 'aboutus',
    title: 'About Us',
    type: 'document',
    fields: [
      {
        name: 'smallTitle',
        title: 'Small Title',
        type: 'string',
        description: 'Small heading like ABOUT COMPANY',
      },
      {
        name: 'mainTitle',
        title: 'Main Title',
        type: 'string',
        description: 'Main heading like ABOUT US',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Detailed description about the company',
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
        description: 'Text for the button (e.g., Get Quote Now)',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Image for the About Us section',
      },
    ],
  };
  
  export default AboutUs;
  