// The area pages on tuition.hafeezstudio.com/<slug>.
// Each entry is written by hand so every page says something specific to its neighbourhood.
// Only facts confirmed for the business are used; local roads and landmarks are well-known public places.

export interface AreaPage {
  slug: string;
  name: string;
  /** Localities this page covers, the area itself first */
  covers: string[];
  /** Short phrase used in titles and the description */
  coversShort: string;
  intro: string;
  localNote: string;
  nearby: string[];
  faqs: { q: string; a: string }[];
}

export const areaPages: AreaPage[] = [
  {
    slug: 'indiranagar',
    name: 'Indiranagar',
    covers: ['Indiranagar', 'HAL 2nd Stage', 'Defence Colony', 'Domlur'],
    coversShort: 'HAL 2nd Stage, Defence Colony and Domlur',
    intro:
      'One-to-one Maths and Physics lessons at your home in Indiranagar, for students in Classes 8, 9 and 10 on the CBSE, ICSE and IGCSE syllabuses.',
    localNote:
      'Whether you live off 100 Feet Road, near CMH Road or in the quieter lanes of HAL 2nd Stage and Defence Colony, classes happen at your own home, so there is no travel through Indiranagar traffic after school.',
    nearby: ['frazer-town', 'ashok-nagar', 'richmond-town', 'vasant-nagar'],
    faqs: [
      {
        q: 'Do you also teach in HAL 2nd Stage, Defence Colony and Domlur?',
        a: 'Yes. All three are covered along with the rest of Indiranagar.',
      },
      {
        q: 'Is the free trial class also held at our home in Indiranagar?',
        a: 'Yes. The trial class is at your home, the same as regular classes, so you can see how lessons work in your own space.',
      },
    ],
  },
  {
    slug: 'jayanagar',
    name: 'Jayanagar',
    covers: ['Jayanagar'],
    coversShort: 'all Jayanagar blocks',
    intro:
      'One-to-one Maths and Physics home tuition in Jayanagar for Classes 8, 9 and 10, covering the CBSE, ICSE and IGCSE syllabuses.',
    localNote:
      'From 1st Block to 9th Block and the streets around the Jayanagar Shopping Complex, lessons come to your home, so your child studies at their own desk instead of travelling to a coaching centre.',
    nearby: ['basavanagudi', 'richmond-town'],
    faqs: [
      {
        q: 'Do you cover every Jayanagar block?',
        a: 'Yes. Home tuition is available across Jayanagar, from 1st Block to 9th Block.',
      },
      {
        q: 'How much is home tuition in Jayanagar?',
        a: '₹600 an hour, the same in every area. The first class is a free trial.',
      },
    ],
  },
  {
    slug: 'sadashivanagar',
    name: 'Sadashivanagar',
    covers: ['Sadashivanagar', 'Palace Orchards', 'Dollars Colony', 'RMV Extension'],
    coversShort: 'Palace Orchards, Dollars Colony and RMV Extension',
    intro:
      'Private Maths and Physics tuition at your home in Sadashivanagar for Classes 8, 9 and 10, on the CBSE, ICSE and IGCSE syllabuses.',
    localNote:
      'Homes around Sankey Tank, in Palace Orchards and across Dollars Colony and RMV Extension are all covered. Each lesson is one to one, so the pace follows your child rather than a batch.',
    nearby: ['malleshwaram', 'vasant-nagar', 'hebbal'],
    faqs: [
      {
        q: 'Do you teach in Dollars Colony and RMV Extension?',
        a: 'Yes. Both are covered, along with Sadashivanagar and Palace Orchards.',
      },
      {
        q: 'Are the classes one to one or in a group?',
        a: 'Always one to one, at your home. There are no batches.',
      },
    ],
  },
  {
    slug: 'malleshwaram',
    name: 'Malleshwaram',
    covers: ['Malleshwaram', 'Vyalikaval', 'Kumara Park', 'Seshadripuram'],
    coversShort: 'Vyalikaval, Kumara Park and Seshadripuram',
    intro:
      'One-to-one home tuition in Maths and Physics for Classes 8, 9 and 10 in Malleshwaram, for CBSE, ICSE and IGCSE students.',
    localNote:
      'From the cross roads off Sampige Road and Margosa Road to Vyalikaval, Kumara Park and Seshadripuram, lessons are held at your home, with board-exam practice built in.',
    nearby: ['sadashivanagar', 'vasant-nagar'],
    faqs: [
      {
        q: 'Is Vyalikaval included?',
        a: 'Yes. Vyalikaval, Kumara Park and Seshadripuram are covered along with Malleshwaram.',
      },
      {
        q: 'Do you prepare students for the Class 10 board exams?',
        a: 'Yes. Practice goes from the textbook up to past board papers, along with board-exam answer writing and time management.',
      },
    ],
  },
  {
    slug: 'vasant-nagar',
    name: 'Vasant Nagar',
    covers: ['Vasant Nagar', 'Cunningham Road', 'High Grounds', 'Jayamahal'],
    coversShort: 'Cunningham Road, High Grounds and Jayamahal',
    intro:
      'Maths and Physics home tuition in Vasant Nagar for Classes 8, 9 and 10, one to one, for CBSE, ICSE and IGCSE students.',
    localNote:
      'Families near the Bangalore Palace grounds, along Cunningham Road and in High Grounds and Jayamahal can have lessons at home, fitted around school days in the heart of the city.',
    nearby: ['sadashivanagar', 'malleshwaram', 'frazer-town', 'ashok-nagar'],
    faqs: [
      {
        q: 'Do you come to Cunningham Road, High Grounds and Jayamahal?',
        a: 'Yes. All three are covered along with Vasant Nagar.',
      },
      {
        q: 'How do I book a class in Vasant Nagar?',
        a: "Send a WhatsApp message with your child's class and board. We fix a time for a free trial class at your home.",
      },
    ],
  },
  {
    slug: 'frazer-town',
    name: 'Frazer Town',
    covers: ['Frazer Town', 'Cox Town', 'Cooke Town', 'Benson Town'],
    coversShort: 'Cox Town, Cooke Town and Benson Town',
    intro:
      'One-to-one Maths and Physics tuition at home in Frazer Town for Classes 8, 9 and 10, across the CBSE, ICSE and IGCSE syllabuses.',
    localNote:
      'Homes off Mosque Road and Coles Road, and in Cox Town, Cooke Town and Benson Town, are all covered. Lessons start with the ideas behind each formula, then move to practice and board-paper questions.',
    nearby: ['vasant-nagar', 'indiranagar', 'kalyan-nagar'],
    faqs: [
      {
        q: 'Do you teach in Cox Town, Cooke Town and Benson Town?',
        a: 'Yes. All three are covered along with Frazer Town.',
      },
      {
        q: 'Which subjects do you teach?',
        a: 'Maths and Physics for Classes 8, 9 and 10, on the CBSE, ICSE and IGCSE (Cambridge) syllabuses.',
      },
    ],
  },
  {
    slug: 'richmond-town',
    name: 'Richmond Town',
    covers: ['Richmond Town', 'Langford Town', 'Shanti Nagar', 'Lavelle Road'],
    coversShort: 'Langford Town, Shanti Nagar and Lavelle Road',
    intro:
      'Home tuition in Maths and Physics in Richmond Town for Classes 8, 9 and 10, one to one, for CBSE, ICSE and IGCSE students.',
    localNote:
      'From Richmond Road to Langford Town, Shanti Nagar and Lavelle Road, lessons come to you, close to many of central Bangalore’s schools.',
    nearby: ['ashok-nagar', 'vasant-nagar', 'jayanagar'],
    faqs: [
      {
        q: 'Do you cover Langford Town, Shanti Nagar and Lavelle Road?',
        a: 'Yes. All three are covered along with Richmond Town.',
      },
      {
        q: 'Do parents get updates on progress?',
        a: 'Yes. Short regular tests show what to work on next, and parents get updates on progress.',
      },
    ],
  },
  {
    slug: 'ashok-nagar',
    name: 'Ashok Nagar',
    covers: ['Ashok Nagar', 'MG Road'],
    coversShort: 'the MG Road area',
    intro:
      'One-to-one Maths and Physics home tuition in Ashok Nagar for Classes 8, 9 and 10, for CBSE, ICSE and IGCSE students.',
    localNote:
      'For families living off Residency Road and Brigade Road and around MG Road, lessons happen at home, so there is no commute through the city centre after school.',
    nearby: ['richmond-town', 'vasant-nagar', 'indiranagar'],
    faqs: [
      {
        q: 'Do you also cover the MG Road area?',
        a: 'Yes. Homes around MG Road are covered along with Ashok Nagar.',
      },
      {
        q: 'What happens in the free trial class?',
        a: 'A first lesson at your home, so you can see how your child is taught before deciding. The trial class is free.',
      },
    ],
  },
  {
    slug: 'kalyan-nagar',
    name: 'Kalyan Nagar',
    covers: ['Kalyan Nagar', 'HRBR Layout', 'HBR Layout'],
    coversShort: 'HRBR Layout and HBR Layout',
    intro:
      'One-to-one Maths and Physics home tuition in Kalyan Nagar for Classes 8, 9 and 10, for CBSE, ICSE and IGCSE students.',
    localNote:
      'Across Kalyan Nagar and the HRBR and HBR Layouts near the Outer Ring Road, lessons are held at your home, which saves the evening commute to a coaching centre.',
    nearby: ['hebbal', 'frazer-town'],
    faqs: [
      {
        q: 'Do you teach in HRBR Layout and HBR Layout?',
        a: 'Yes. Both layouts are covered along with Kalyan Nagar.',
      },
      {
        q: 'Is there a free trial class?',
        a: 'Yes. The first class is a free trial at your home, so you can decide before paying anything.',
      },
    ],
  },
  {
    slug: 'hebbal',
    name: 'Hebbal',
    covers: ['Hebbal', 'Sahakar Nagar', 'Sanjay Nagar', 'RT Nagar'],
    coversShort: 'Sahakar Nagar, Sanjay Nagar and RT Nagar',
    intro:
      'Maths and Physics home tuition in Hebbal for Classes 8, 9 and 10, one to one, on the CBSE, ICSE and IGCSE syllabuses.',
    localNote:
      'Homes near Hebbal and along Bellary Road, as well as Sahakar Nagar, Sanjay Nagar and RT Nagar, are covered. Every lesson is at your home and paced to your child.',
    nearby: ['sadashivanagar', 'kalyan-nagar'],
    faqs: [
      {
        q: 'Do you come to Sahakar Nagar, Sanjay Nagar and RT Nagar?',
        a: 'Yes. All three are covered along with Hebbal.',
      },
      {
        q: 'How much does home tuition cost in Hebbal?',
        a: '₹600 an hour. The first class is a free trial.',
      },
    ],
  },
  {
    slug: 'basavanagudi',
    name: 'Basavanagudi',
    covers: ['Basavanagudi'],
    coversShort: 'Gandhi Bazaar and DVG Road',
    intro:
      'One-to-one home tuition in Maths and Physics for Classes 8, 9 and 10 in Basavanagudi, for CBSE, ICSE and IGCSE students.',
    localNote:
      'Whether you are near Gandhi Bazaar, off DVG Road or close to Bull Temple Road, lessons come to your home, with concepts explained clearly before any drilling.',
    nearby: ['jayanagar', 'richmond-town'],
    faqs: [
      {
        q: 'Do you teach across Basavanagudi?',
        a: 'Yes, including the streets around Gandhi Bazaar, DVG Road and Bull Temple Road.',
      },
      {
        q: 'Which boards do you teach?',
        a: 'CBSE, ICSE and IGCSE (Cambridge), for Maths and Physics in Classes 8, 9 and 10.',
      },
    ],
  },
];

export const areaBySlug = new Map(areaPages.map((a) => [a.slug, a]));
// The area name each page is listed under on the main page, for linking
export const slugByAreaName = new Map(areaPages.map((a) => [a.name, a.slug]));
