const touristLocations = [
    {
        id: 'jagannath_temple',
        name: 'Jagannath Temple, Puri',
        coords: { lat: 19.8047, lng: 85.8315 },
        image: 'images/jagannath-temple.jpg',
        short_desc: 'A sacred pilgrimage site, one of the Char Dhams, where spirituality meets the ocean breeze.',
        details: {
            history: 'Constructed in the 12th century by King Anantavarman Chodaganga Deva of the Eastern Ganga Dynasty.',
            importance: 'Famous for its annual Rath Yatra, or chariot festival, which attracts millions of devotees from around the world.',
            nature: 'Located on the coast of the Bay of Bengal, offering a unique blend of spiritual ambiance and natural seaside beauty.',
            heritage: 'A monumental example of Kalinga architecture, with its towering main temple (deula) and intricate carvings.'
        },
        wiki_link: 'https://en.wikipedia.org/wiki/Jagannath_Temple,_Puri'
    },
    {
        id: 'konark_sun_temple',
        name: 'Konark Sun Temple',
        coords: { lat: 19.8876, lng: 86.0947 },
        image: 'images/konark-sun-temple.jpg',
        short_desc: 'A 13th-century UNESCO World Heritage site, an architectural marvel in the form of a colossal chariot.',
        details: {
            history: 'Built by King Narasimhadeva I of the Eastern Ganga Dynasty around 1250 CE as a temple to the Sun God, Surya.',
            importance: 'Its geometric precision and detailed carvings make it a pinnacle of ancient Indian architectural and artistic achievement.',
            nature: 'Situated near the Chandrabhaga Beach, its original location was on the seashore, though the sea has since receded.',
            heritage: 'The temple is designed as a giant chariot with 24 intricately carved stone wheels and is pulled by seven horses.'
        },
        wiki_link: 'https://en.wikipedia.org/wiki/Konark_Sun_Temple'
    },
    {
        id: 'chilika_lake',
        name: 'Chilika Lake',
        coords: { lat: 19.7154, lng: 85.3206 },
        image: 'images/chilika-lake.jpg',
        short_desc: 'Asia\'s largest brackish water lagoon, a paradise for bird watchers and nature lovers.',
        details: {
            history: 'Geological evidence suggests Chilika was part of the Bay of Bengal. It has been a vital fishing ground for centuries.',
            importance: 'It is the largest wintering ground for migratory birds on the Indian sub-continent, hosting over 160 species.',
            nature: 'Home to the rare Irrawaddy dolphins, diverse aquatic life, and stunning islands like Kalijai and Nalabana Bird Sanctuary.',
            heritage: 'The lake and its surroundings are deeply intertwined with the local culture and livelihood, especially for the fishing communities.'
        },
        wiki_link: 'https://en.wikipedia.org/wiki/Chilika_Lake'
    },
    {
        id: 'lingaraj_temple',
        name: 'Lingaraj Temple, Bhubaneswar',
        coords: { lat: 20.2394, lng: 85.8336 },
        image: 'images/lingaraj-temple.jpg',
        short_desc: 'An ancient, magnificent temple dedicated to Lord Shiva, dominating the Bhubaneswar skyline.',
        details: {
            history: 'Believed to be built by the kings of the Somavamsi dynasty and later modified by the Ganga rulers in the 11th century.',
            importance: 'It is the largest temple in Bhubaneswar and a revered pilgrimage site for Shaivites.',
            nature: 'Surrounded by the Bindusagar Lake, which is believed to contain holy water from every sacred river in India.',
            heritage: 'A quintessential example of the Kalinga style of architecture, featuring a 55-meter high central tower (vimana).'
        },
        wiki_link: 'https://en.wikipedia.org/wiki/Lingaraj_Temple'
    },
    {
        id: 'udayagiri_khandagiri_caves',
        name: 'Udayagiri & Khandagiri Caves',
        coords: { lat: 20.2618, lng: 85.7885 },
        image: 'images/udayagiri-khandagiri-caves.jpg',
        short_desc: 'Twin hills with ornate rock-cut caves, once serving as residences for Jain monks.',
        details: {
            history: 'Carved during the reign of King Kharavela of the Mahameghavahana dynasty in the 1st century BCE.',
            importance: 'The Hathigumpha inscription in Udayagiri is a primary source of information about King Kharavela\'s reign.',
            nature: 'The caves are carved into the hillsides, offering panoramic views of Bhubaneswar from the top.',
            heritage: 'These caves are significant for their architectural features and detailed carvings depicting court scenes, royal processions, and mythology.'
        },
        wiki_link: 'https://en.wikipedia.org/wiki/Udayagiri_and_Khandagiri_Caves'
    },
    {
        id: 'dhauli_shanti_stupa',
        name: 'Dhauli Shanti Stupa',
        coords: { lat: 20.1919, lng: 85.8397 },
        image: 'images/dhauli-shanti-stupa.jpg',
        short_desc: 'A white peace pagoda on the site of the historic Kalinga War, symbolizing peace and non-violence.',
        details: {
            history: 'Built in the 1970s by the Japan Buddha Sangha and the Kalinga Nippon Buddha Sangha.',
            importance: 'It marks the location where Emperor Ashoka renounced violence after the bloody Kalinga War and embraced Buddhism.',
            nature: 'Located on the banks of the Daya River, the serene environment complements its message of peace.',
            heritage: 'The stupa features beautiful statues of Buddha and panels depicting his life. Nearby rock edicts of Ashoka are a major historical artifact.'
        },
        wiki_link: 'https://en.wikipedia.org/wiki/Dhauli'
    },
    {
        id: 'bhitarkanika_national_park',
        name: 'Bhitarkanika National Park',
        coords: { lat: 20.7369, lng: 86.8958 },
        image: 'images/bhitarkanika-national-park.jpg',
        short_desc: 'A vibrant mangrove ecosystem, home to saltwater crocodiles and a rich diversity of flora and fauna.',
        details: {
            history: 'The area was the hunting grounds of the erstwhile King of Kanika. It was designated a national park in 1988.',
            importance: 'It holds the Guinness World Record for the largest saltwater crocodile in captivity (23 feet).',
            nature: 'One of India\'s most significant mangrove forests, crisscrossed by rivers and creeks, and a haven for kingfishers, pythons, and deer.',
            heritage: 'The park includes Gahirmatha Beach, the world\'s largest nesting ground for Olive Ridley sea turtles.'
        },
        wiki_link: 'https://en.wikipedia.org/wiki/Bhitarkanika_National_Park'
    },
    {
        id: 'simlipal_national_park',
        name: 'Simlipal National Park',
        coords: { lat: 21.9333, lng: 86.3833 },
        image: 'images/simlipal-national-park.jpg',
        short_desc: 'A vast tiger reserve and national park with dense forests, rolling hills, and spectacular waterfalls.',
        details: {
            history: 'Formerly the hunting ground for the Maharajas of Mayurbhanj, it was declared a tiger reserve in 1973.',
            importance: 'It is part of the UNESCO World Network of Biosphere Reserves and is crucial for tiger and elephant conservation.',
            nature: 'Features stunning waterfalls like Barehipani and Joranda, and is home to tigers, elephants, gaurs, and a variety of orchids.',
            heritage: 'The name "Simlipal" comes from the abundance of "Simul" or Red Silk Cotton trees that bloom vividly in spring.'
        },
        wiki_link: 'https://en.wikipedia.org/wiki/Simlipal_National_Park'
    },
    {
        id: 'raghurajpur_heritage_village',
        name: 'Raghurajpur Heritage Village',
        coords: { lat: 19.8910, lng: 85.8300 },
        image: 'images/raghurajpur-heritage-village.jpg',
        short_desc: 'A living museum where every house is an artist\'s studio, famous for Pattachitra paintings.',
        details: {
            history: 'This village has a long lineage of artists who have practiced traditional art forms for generations.',
            importance: 'It is the birthplace of the legendary Odissi dance guru, Kelucharan Mohapatra.',
            nature: 'Set in a serene rural landscape with coconut groves, providing a tranquil environment for artists.',
            heritage: 'Famous for Pattachitra (cloth-based scroll painting), palm leaf engraving (Tala Pattachitra), and stone carvings.'
        },
        wiki_link: 'https://en.wikipedia.org/wiki/Raghurajpur'
    },
    {
        id: 'pipili_applique_work',
        name: 'Pipili Applique Work',
        coords: { lat: 20.1200, lng: 85.8300 },
        image: 'images/pipili-applique-work.jpg',
        short_desc: 'A vibrant town famous for its colorful and intricate applique craft, known as "Chandua".',
        details: {
            history: 'The craft originated as a temple art, used to create canopies and umbrellas for the Jagannath Temple\'s Rath Yatra.',
            importance: 'Pipili is the primary center for this craft, which has a Geographical Indication (GI) tag for its uniqueness.',
            nature: 'The craft often uses motifs inspired by nature, such as flowers, birds, and animals.',
            heritage: 'This traditional sewing technique involves stitching patches of colored cloth onto a base layer to create decorative items.'
        },
        wiki_link: 'https://en.wikipedia.org/wiki/Pipili,_Odisha'
    },
    {
        id: 'gopalpur_on_sea',
        name: 'Gopalpur-on-Sea',
        coords: { lat: 19.2641, lng: 84.8983 },
        image: 'images/gopalpur-on-sea.jpg',
        short_desc: 'A tranquil beach town with a historic lighthouse and remnants of a colonial-era seaport.',
        details: {
            history: 'It was a bustling seaport during the British Raj, with trade connections to Burma. The old jetty and buildings reflect its past.',
            importance: 'It is a quieter alternative to Puri, known for its golden sands and calm atmosphere.',
            nature: 'The beach is perfect for watching sunrise and sunset. The backwaters offer a serene boating experience.',
            heritage: 'The iconic lighthouse, built in 1871, offers panoramic views of the coastline and the town.'
        },
        wiki_link: 'https://en.wikipedia.org/wiki/Gopalpur,_Odisha'
    },
    {
        id: 'ratnagiri_buddhist_site',
        name: 'Ratnagiri Buddhist Site',
        coords: { lat: 20.6444, lng: 86.3358 },
        image: 'images/ratnagiri-buddhist-site.jpg',
        short_desc: 'An excavated Buddhist monastery complex, part of the "Diamond Triangle" of Buddhist sites.',
        details: {
            history: 'Flourished from the 5th to the 13th century as a major center for Mahayana and later Vajrayana Buddhism.',
            importance: 'Excavations have revealed a large stupa, monasteries, temples, and a rich collection of Buddhist sculptures.',
            nature: 'Located on a hill, it offers a peaceful setting with views of the surrounding green plains.',
            heritage: 'The intricately carved green stone doorways and numerous votive stupas highlight the artistic excellence of the era.'
        },
        wiki_link: 'https://en.wikipedia.org/wiki/Ratnagiri,_Jajpur'
    }
];