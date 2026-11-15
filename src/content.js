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

/* Paste the full web address of each page between the quotes. Buttons only show for the ones you fill in. */
export const social = {
  f: 'https://www.facebook.com/vetcareplusVeterinarystore',
  i: 'https://www.instagram.com/vetcareplusVeterinarystore',
  t: 'https://www.tiktok.com/@vetcareplusveterinary',
  youtube: '',
  x: ''
}
export const socialLabels = { facebook: 'Facebook', instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube', x: 'X' }

export const branches = [
  {
    name: 'Mwanza Michiru', lat: -15.611627072169817, lon: 34.5252705843886,
    place: { en: 'Mwanza Michiru Trading Centre, at the Majete junction to the reserve', ny: 'Mwanza Michiru Trading Centre, pa mphambano yopita ku Majete Reserve' }
  },
  {
    name: 'Jenda', lat: -12.356069225395972, lon: 33.55128014370705,
    place: { en: 'Jenda Trading Centre, Mzimba', ny: 'Jenda Trading Centre, Mzimba' }
  }
]

/* Vacancies: add one block per job. Example:
   { title: { en: 'Shop Assistant', ny: 'Wothandizira m\'sitolo' }, where: 'Jenda', deadline: '30 November 2026', desc: { en: 'Short description', ny: 'Kufotokoza kwachidule' } } */
   export const vacancies = []

/* Clients: set showClients to true and add names. Example: { name: 'Mwanza Poultry Farmers Group', note: { en: 'Poultry farmers', ny: 'Alimi a nkhuku' } } */
export const showClients = false
export const clients = []

export const products = [
  { img: 'nd-lasota.png', name: 'Pro-Vac ND Lasota', cat: 'vaccines',
    kind: { en: 'Poultry vaccine', ny: 'Katemera wa nkhuku' },
    desc: { en: 'Newcastle disease vaccine for poultry, 1,000 dose vials.', ny: 'Katemera wa matenda a Newcastle wa nkhuku, mabotolo a mlingo 1,000.' } },
  { img: 'newcastle-vaccine.jpg', name: 'Live Newcastle Disease Vaccine', cat: 'vaccines',
    kind: { en: 'Poultry vaccine', ny: 'Katemera wa nkhuku' },
    desc: { en: 'Live vaccine (Clone V4/HB92) to protect chickens against Newcastle disease.', ny: 'Katemera wamoyo (Clone V4/HB92) woteteza nkhuku ku matenda a Newcastle.' } },
  { img: 'wellvet-chick-start.jpg', name: 'Wellvet Chick Start', cat: 'poultry',
    kind: { en: 'Chick supplement', ny: 'Chakudya chowonjezera cha anapiye' },
    desc: { en: 'A chick starting formula for instant energy, with the added power of dextrose. 100 g.', ny: 'Chakudya choyambira cha anapiye chopatsa mphamvu mwachangu, chokhala ndi dextrose. 100 g.' } },
  { img: 'wellvet-broiler-booster.jpg', name: 'Wellvet Broiler Booster', cat: 'poultry',
    kind: { en: 'Poultry supplement', ny: 'Chakudya chowonjezera cha nkhuku' },
    desc: { en: 'Water soluble powder. Broiler multivitamin with additional amino acids. 100 g.', ny: 'Ufa wosungunuka m\'madzi. Mavitamini a nkhuku za nyama ndi amino acids owonjezera. 100 g.' } },
  { img: 'trimoxol-vet.jpg', name: 'Trimoxol-Vet Oral Powder', cat: 'poultry',
    kind: { en: 'Poultry medicine', ny: 'Mankhwala a nkhuku' },
    desc: { en: 'Co-trimoxazole water dispersible powder (antibacterial and anticoccidiosis) for infectious coryza, salmonella infections, chronic respiratory disease and caecal coccidiosis. 100 g.', ny: 'Ufa wa co-trimoxazole wosakanikirana ndi madzi (wolimbana ndi mabakiteriya ndi coccidiosis) wa matenda a coryza, salmonella, matenda opuma ndi caecal coccidiosis. 100 g.' } },
  { img: 'pstrepnor-extra.jpg', name: 'P.Strepnor Extra WSP', cat: 'poultry',
    kind: { en: 'Poultry antibiotic', ny: 'Mankhwala opha mabakiteriya a nkhuku' },
    desc: { en: 'Antibiotic water soluble powder. 50 g.', ny: 'Ufa wosungunuka m\'madzi wopha mabakiteriya. 50 g.' } },
  { img: 'fluban.jpg', name: 'Fluban 10% Oral Solution', cat: 'poultry',
    kind: { en: 'Poultry medicine', ny: 'Mankhwala a nkhuku' },
    desc: { en: '10% oral solution for poultry.', ny: 'Mankhwala amadzimadzi a 10% a nkhuku.' } },
  { img: 'dawadime.jpg', name: 'DawaDime 33% Solution', cat: 'poultry',
    kind: { en: 'Poultry medicine', ny: 'Mankhwala a nkhuku' },
    desc: { en: 'Sulfadimidine 33% solution for caecal and acute intestinal coccidiosis, fowl typhoid and fowl cholera in poultry. 125 ml.', ny: 'Sulfadimidine 33% ya caecal ndi acute intestinal coccidiosis, fowl typhoid ndi fowl cholera mu nkhuku. 125 ml.' } },
  { img: 'amprolium.png', name: 'Amprolium 20% w/w', cat: 'poultry',
    kind: { en: 'Poultry and livestock', ny: 'Nkhuku ndi ziweto' },
    desc: { en: 'Amprolium hydrochloride powder for poultry and other livestock. 100 g sachets.', ny: 'Ufa wa amprolium wa nkhuku ndi ziweto zina. Matumba a 100 g.' } },
  { img: 'albevet.png', name: 'Albevet 2.5% and 10%', cat: 'livestock',
    kind: { en: 'Dewormer', ny: 'Mankhwala a mphutsi' },
    desc: { en: 'Albendazole oral drench for liver fluke, tapeworms and roundworms in cattle, camels, sheep and goats. 1 litre.', ny: 'Mankhwala amadzimadzi a albendazole a mphutsi za chiwindi, zamatepi ndi zozungulira mu ng\'ombe, ngamila, nkhosa ndi mbuzi. 1 lita.' } },
  { img: 'albendazole-10.jpg', name: 'Albendazole 10% Worm Drench', cat: 'livestock',
    kind: { en: 'Dewormer', ny: 'Mankhwala a mphutsi' },
    desc: { en: 'For oral treatment of roundworms, lungworms, tapeworms and liver flukes. 1 litre.', ny: 'Mankhwala akumwa a mphutsi zozungulira, za m\'mapapo, zamatepi ndi za chiwindi. 1 lita.' } },
  { img: 'ivanor.jpg', name: 'Ivanor 1%', cat: 'livestock',
    kind: { en: 'Injection', ny: 'Jakisoni' },
    desc: { en: 'Ivermectin injection. 100 ml.', ny: 'Jakisoni wa ivermectin. 100 ml.' } },
  { img: 'oxyfarm-10.jpg', name: 'Oxyfarm 10', cat: 'livestock',
    kind: { en: 'Injection', ny: 'Jakisoni' },
    desc: { en: 'Oxytetracycline injection 10%. 100 ml.', ny: 'Jakisoni wa oxytetracycline 10%. 100 ml.' } },
  { img: 'limoxin-200-la.jpg', name: 'Limoxin 200 LA', cat: 'livestock',
    kind: { en: 'Injection', ny: 'Jakisoni' },
    desc: { en: 'Oxytetracycline 20% injection. 100 ml.', ny: 'Jakisoni wa oxytetracycline 20%. 100 ml.' } },
  { img: 'dawa-penstrep-la.jpg', name: 'Dawa Penstrep LA', cat: 'livestock',
    kind: { en: 'Injection', ny: 'Jakisoni' },
    desc: { en: 'Injection for veterinary use. 100 ml.', ny: 'Jakisoni wa ziweto. 100 ml.' } },
  { img: 'intrafer-100-b12.jpg', name: 'Intrafer 100 B12', cat: 'livestock',
    kind: { en: 'Iron injection', ny: 'Jakisoni wa iron' },
    desc: { en: 'Iron and vitamin B12 injection. 100 ml.', ny: 'Jakisoni wa iron ndi vitamini B12. 100 ml.' } },
  { img: 'dawafer.png', name: 'Dawafer', cat: 'livestock',
    kind: { en: 'Iron injection', ny: 'Jakisoni wa iron' },
    desc: { en: 'Iron dextran 10% injection. 100 ml bottle.', ny: 'Jakisoni wa iron dextran 10%. Botolo la 100 ml.' } },
  { img: 'prolick.jpg', name: 'Prolick Stocklick', cat: 'livestock',
    kind: { en: 'Mineral lick', ny: 'Mchere wa ziweto' },
    desc: { en: 'Mineral lick for livestock. 1 kg.', ny: 'Mchere wa ziweto. 1 kg.' } }
]

export const text = {
  en: {
    nav: { home: 'Home', about: 'About', products: 'Products', services: 'Services', branches: 'Branches', clients: 'Clients', careers: 'Work with us', contact: 'Contact' },
    hero: { kicker: 'Veterinary medicines and animal health', title: 'Healthy animals, thriving farms.', text: 'VetCare Plus supplies trusted veterinary medicines and practical advice to farmers across Malawi.', cta: 'Chat on WhatsApp', cta2: 'See our products' },
    about: { title: 'Your animal health partner', text: 'At VetCare Plus we help farmers keep their poultry and livestock healthy with quality veterinary products and practical advice. Visit either of our two branches, or send us a message.' },
    products: { title: 'Some of our products', intro: 'Ask us on WhatsApp or visit a branch to check what is available.', note: 'For veterinary use only. Ask our team about the right product and dose for your animals.' },
    filters: { all: 'All', poultry: 'Poultry', livestock: 'Livestock', vaccines: 'Vaccines' },
    services: { title: 'What we do', items: [
      { t: 'Veterinary medicines and vaccines', d: 'Medicines and vaccines for poultry and livestock.' },
      { t: 'Poultry and livestock supplies', d: 'Feeders, drinkers and everyday farm supplies.' },
      { t: 'Advice for farmers', d: 'Talk to our team about the right product for your animals.' } ] },
    shops: { title: 'Our shops' },
    branches: { title: 'Our branches', map: 'Open in Google Maps', route: 'Get directions', find: 'Find us' },
    clients: { title: 'Our clients', intro: 'Farmers and partners who trust us.' },
    careers: { title: 'Work with us', intro: 'Want to join our team? We are always glad to hear from people who care about animal health and farmers.',
      none: 'There are no open vacancies right now. Send us your CV and a short message and we will keep it on file.',
      open: 'Open vacancies', where: 'Where', deadline: 'Closing date', apply: 'Send your CV by email', applyWa: 'Message us on WhatsApp' },
    contact: { title: 'Visit or contact us', hours: 'Opening hours', opens: 'Opens', closes: 'Closes', openAt: '7:30 AM', closeAt: '5:30 PM', call: 'Call', email: 'Email', address: 'Postal address', follow: 'Follow us' },
    chat: { open: 'Chat with us', title: 'Chat with VetCare Plus', hello: 'Hello! How can we help you today?', ph: 'Type your message...', send: 'Send on WhatsApp', note: 'Your message opens in WhatsApp.',
      quick: ['I would like to ask about a product', 'Where is your nearest shop?', 'What are your opening hours?'] },
    footer: 'All rights reserved.'
  },
  ny: {
    nav: { home: 'Kunyumba', about: 'Za ife', products: 'Katundu wathu', services: 'Ntchito zathu', branches: 'Nthambi zathu', clients: 'Makasitomala', careers: 'Gwirani ntchito nafe', contact: 'Lumikizanani nafe' },
    hero: { kicker: 'Mankhwala a ziweto ndi thanzi lawo', title: 'Ziweto zathanzi, famu yotukuka.', text: 'VetCare Plus imapereka mankhwala odalirika a ziweto ndi malangizo othandiza kwa alimi ku Malawi konse.', cta: 'Lemberani pa WhatsApp', cta2: 'Onani katundu wathu' },
    about: { title: 'Mnzanu pa thanzi la ziweto', text: 'Ku VetCare Plus timathandiza alimi kusunga nkhuku ndi ziweto zina zili ndi thanzi pogwiritsa ntchito mankhwala abwino ndi malangizo othandiza. Bwerani ku nthambi yathu iliyonse, kapena titumizireni uthenga.' },
    products: { title: 'Katundu wathu wina', intro: 'Tifunseni pa WhatsApp kapena bwerani ku nthambi kuti mudziwe zomwe zilipo.', note: 'Ndi ntchito ya ziweto zokha. Funsani gulu lathu za mankhwala oyenera ndi mlingo woyenera wa ziweto zanu.' },
    filters: { all: 'Zonse', poultry: 'Nkhuku', livestock: 'Ziweto zazikulu', vaccines: 'Katemera' },
    services: { title: 'Zomwe timachita', items: [
      { t: 'Mankhwala ndi katemera wa ziweto', d: 'Mankhwala ndi katemera wa nkhuku ndi ziweto zina.' },
      { t: 'Zipangizo za nkhuku ndi ziweto', d: 'Zodyeramo, zomweramo ndi zipangizo zina za pa famu.' },
      { t: 'Malangizo kwa alimi', d: 'Lankhulani ndi gulu lathu kuti mupeze mankhwala oyenera ziweto zanu.' } ] },
    shops: { title: 'Masitolo athu' },
    branches: { title: 'Nthambi zathu', map: 'Tsegulani pa Google Maps', route: 'Pezani njira', find: 'Mutipeze kuno' },
    clients: { title: 'Makasitomala athu', intro: 'Alimi ndi anzathu amene amatidalira.' },
    careers: { title: 'Gwirani ntchito nafe', intro: 'Mukufuna kulowa nawo m\'gulu lathu? Timakonda kumva kuchokera kwa anthu amene amasamala za thanzi la ziweto ndi alimi.',
      none: 'Pakadali pano palibe ntchito zotsegula. Titumizireni CV yanu ndi uthenga wachidule ndipo tidzaisunga.',
      open: 'Ntchito zotsegula', where: 'Kumene', deadline: 'Tsiku lotsekera', apply: 'Titumizireni CV ndi imelo', applyWa: 'Titumizireni uthenga pa WhatsApp' },
    contact: { title: 'Bwerani kapena mutiyimbire', hours: 'Nthawi yotsegula', opens: 'Timatsegula', closes: 'Timatseka', openAt: '7:30 m\'mawa', closeAt: '5:30 madzulo', call: 'Imbani', email: 'Imelo', address: 'Adilesi ya positi', follow: 'Titsatireni' },
    chat: { open: 'Lankhulani nafe', title: 'Lankhulani ndi VetCare Plus', hello: 'Moni! Tikuthandizeni bwanji lero?', ph: 'Lembani uthenga wanu...', send: 'Tumizani pa WhatsApp', note: 'Uthenga wanu udzatsegulidwa pa WhatsApp.',
      quick: ['Ndikufuna kufunsa za mankhwala', 'Sitolo yanu yapafupi ili kuti?', 'Mumatsegula nthawi yanji?'] },
    footer: 'Maufulu onse ndi osungidwa.'
  }
}

export const sections = ['home', 'about', 'products', 'services', 'branches', 'clients', 'careers', 'contact']