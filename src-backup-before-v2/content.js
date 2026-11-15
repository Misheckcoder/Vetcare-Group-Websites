/* Everything you may want to change later is in this file. */
export const business = {
  name: 'VetCare Plus',
  tagline: 'Mamkhwala Aziweto',
  phones: [
    { label: '0996 314 619', tel: '+265996314619' },
    { label: '0890 899 878', tel: '+265890899878' }
  ],
  whatsapp: '265995245729',
  whatsappLabel: '+265 995 24 57 29',
  email: 'plusvetcare@gmail.com',
  address: 'PO Box 100, Blantyre, Malawi'
}

export const products = [
  {
    img: 'nd-lasota.png', name: 'Pro-Vac ND Lasota',
    kind: { en: 'Poultry vaccine', ny: 'Katemera wa nkhuku' },
    desc: { en: 'Newcastle disease vaccine for poultry, 1,000 dose vials.', ny: 'Katemera wa matenda a Newcastle wa nkhuku, mabotolo a mlingo 1,000.' }
  },
  {
    img: 'newcastle-vaccine.jpg', name: 'Live Newcastle Disease Vaccine',
    kind: { en: 'Poultry vaccine', ny: 'Katemera wa nkhuku' },
    desc: { en: 'Live vaccine (Clone V4/HB92) to protect chickens against Newcastle disease.', ny: 'Katemera wamoyo (Clone V4/HB92) woteteza nkhuku ku matenda a Newcastle.' }
  },
  {
    img: 'albevet.png', name: 'Albevet 2.5% and 10%',
    kind: { en: 'Dewormer', ny: 'Mankhwala a mphutsi' },
    desc: { en: 'Albendazole oral drench for liver fluke, tapeworms and roundworms in cattle, camels, sheep and goats. 1 litre.', ny: 'Mankhwala amadzimadzi a albendazole a mphutsi za chiwindi, mphutsi zamatepi ndi zozungulira mu ng\'ombe, ngamila, nkhosa ndi mbuzi. 1 lita.' }
  },
  {
    img: 'amprolium.png', name: 'Amprolium 20% w/w',
    kind: { en: 'Poultry and livestock', ny: 'Nkhuku ndi ziweto' },
    desc: { en: 'Amprolium hydrochloride powder for poultry and other livestock. 100 g sachets.', ny: 'Ufa wa amprolium wa nkhuku ndi ziweto zina. Matumba a 100 g.' }
  },
  {
    img: 'dawafer.png', name: 'Dawafer',
    kind: { en: 'Iron injection', ny: 'Jakisoni wa iron' },
    desc: { en: 'Iron dextran 10% injection. 100 ml bottle.', ny: 'Jakisoni wa iron dextran 10%. Botolo la 100 ml.' }
  }
]

export const text = {
  en: {
    nav: { home: 'Home', about: 'About', products: 'Products', services: 'Services', branches: 'Branches', contact: 'Contact' },
    hero: {
      kicker: 'Veterinary medicines and animal health',
      title: 'Healthy animals, thriving farms.',
      text: 'VetCare Plus supplies trusted veterinary medicines and practical advice to farmers across Malawi.',
      cta: 'Chat on WhatsApp', cta2: 'See our products'
    },
    about: {
      title: 'Your animal health partner',
      text: 'At VetCare Plus we help farmers keep their poultry and livestock healthy with quality veterinary products and practical advice. Visit either of our two branches, or send us a message.'
    },
    products: {
      title: 'Some of our products',
      intro: 'Ask us on WhatsApp or visit a branch to check what is available.',
      note: 'For veterinary use only. Ask our team about the right product and dose for your animals.'
    },
    services: {
      title: 'What we do',
      items: [
        { t: 'Veterinary medicines and vaccines', d: 'Medicines and vaccines for poultry and livestock.' },
        { t: 'Poultry and livestock supplies', d: 'Feeders, drinkers and everyday farm supplies.' },
        { t: 'Advice for farmers', d: 'Talk to our team about the right product for your animals.' }
      ]
    },
    shops: { title: 'Our shops' },
    branches: { title: 'Our branches', address: 'Address to be added' },
    contact: {
      title: 'Visit or contact us', hours: 'Opening hours', opens: 'Opens', closes: 'Closes', openAt: '7:30 AM', closeAt: '5:30 PM',
      call: 'Call', wa: 'WhatsApp', email: 'Email', address: 'Postal address'
    },
    footer: 'All rights reserved.'
  },
  ny: {
    nav: { home: 'Kunyumba', about: 'Za ife', products: 'Katundu wathu', services: 'Ntchito zathu', branches: 'Nthambi zathu', contact: 'Lumikizanani nafe' },
    hero: {
      kicker: 'Mankhwala a ziweto ndi thanzi lawo',
      title: 'Ziweto zathanzi, famu yotukuka.',
      text: 'VetCare Plus imapereka mankhwala odalirika a ziweto ndi malangizo othandiza kwa alimi ku Malawi konse.',
      cta: 'Lemberani pa WhatsApp', cta2: 'Onani katundu wathu'
    },
    about: {
      title: 'Mnzanu pa thanzi la ziweto',
      text: 'Ku VetCare Plus timathandiza alimi kusunga nkhuku ndi ziweto zina zili ndi thanzi pogwiritsa ntchito mankhwala abwino ndi malangizo othandiza. Bwerani ku nthambi yathu iliyonse, kapena titumizireni uthenga.'
    },
    products: {
      title: 'Katundu wathu wina',
      intro: 'Tifunseni pa WhatsApp kapena bwerani ku nthambi kuti mudziwe zomwe zilipo.',
      note: 'Ndi ntchito ya ziweto zokha. Funsani gulu lathu za mankhwala oyenera ndi mlingo woyenera wa ziweto zanu.'
    },
    services: {
      title: 'Zomwe timachita',
      items: [
        { t: 'Mankhwala ndi katemera wa ziweto', d: 'Mankhwala ndi katemera wa nkhuku ndi ziweto zina.' },
        { t: 'Zipangizo za nkhuku ndi ziweto', d: 'Zodyeramo, zomweramo ndi zipangizo zina za pa famu.' },
        { t: 'Malangizo kwa alimi', d: 'Lankhulani ndi gulu lathu kuti mupeze mankhwala oyenera ziweto zanu.' }
      ]
    },
    shops: { title: 'Masitolo athu' },
    branches: { title: 'Nthambi zathu', address: 'Adilesi idzawonjezedwa' },
    contact: {
      title: 'Bwerani kapena mutiyimbire', hours: 'Nthawi yotsegula', opens: 'Timatsegula', closes: 'Timatseka', openAt: '7:30 m\'mawa', closeAt: '5:30 madzulo',
      call: 'Imbani', wa: 'WhatsApp', email: 'Imelo', address: 'Adilesi ya positi'
    },
    footer: 'Maufulu onse ndi osungidwa.'
  }
}

export const branches = ['Mwanza Michiru', 'Jenda']
export const sections = ['home', 'about', 'products', 'services', 'branches', 'contact']