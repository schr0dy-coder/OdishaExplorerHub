const heritageAndArts = [
    {
        id: 'pattachitra',
        name: 'Pattachitra Folk Art',
        image: 'images/Heritage & Art/Pattachitra Folk Art/images.jpg',
        description: 'Ancient scroll paintings that tell mythological and folk stories on a traditional cloth canvas.',
        origin: 'Raghurajpur',
        specialty: 'Natural colors on treated cloth',
        learn_more_link: 'https://en.wikipedia.org/wiki/Pattachitra'
    },
    {
        id: 'silver_filigree',
        name: 'Silver Filigree (Tarakasi)',
        image: 'images/Heritage & Art/Silver Filigree (Tarakasi)/images.jpg',
        description: 'Delicate silver wire artistry creating intricate jewelry and decorative masterpieces.',
        origin: 'Cuttack',
        specialty: 'Handcrafted silver jewelry',
        learn_more_link: 'https://en.wikipedia.org/wiki/Tarakasi'
    },
    {
        id: 'odissi_dance',
        name: 'Odissi Classical Dance',
        image: 'images/Heritage & Art/Odissi Classical Dance/images.jpg',
        description: 'Graceful classical dance expressing devotion through elegant movements and expressions.',
        origin: 'Temple traditions of Odisha',
        specialty: 'Tribhangi posture',
        learn_more_link: 'https://en.wikipedia.org/wiki/Odissi'
    },
    {
        id: 'sambalpuri_ikat',
        name: 'Sambalpuri Ikat Handloom',
        image: 'images/Heritage & Art/Sambalpuri Ikat Handloom/images.jpg',
        description: 'A traditional tie-dye weaving technique (Bandha) creating beautiful, blurry patterns.',
        origin: 'Sambalpur, Bargarh',
        specialty: 'Intricate patterns and rich colors',
        learn_more_link: 'https://en.wikipedia.org/wiki/Sambalpuri_sari'
    },
    {
        id: 'pipili_applique',
        name: 'Pipili Applique (Chandua)',
        image: 'images/Heritage & Art/Pipili Applique (Chandua)/images.jpg',
        description: 'Colorful and decorative fabric work used for temple rituals, canopies, and handicrafts.',
        origin: 'Pipili',
        specialty: 'Vibrant patchwork and embroidery',
        learn_more_link: 'https://en.wikipedia.org/wiki/Pipili_Applique'
    },
    {
        id: 'stone_carving',
        name: 'Stone Carving',
        image: 'images/Heritage & Art/Stone Carving/images.jpg',
        description: 'An ancient art form seen in temples like Konark and Lingaraj, now used for sculptures and decor.',
        origin: 'Puri, Bhubaneswar',
        specialty: 'Sandstone and soapstone sculptures',
        learn_more_link: 'https://en.wikipedia.org/wiki/Stone_carving_in_Odisha'
    },
    {
        id: 'dhokra_casting',
        name: 'Dhokra Metal Casting',
        image: 'images/Heritage & Art/Dhokra Metal Casting/img.jpg', // Placeholder
        description: 'A non-ferrous metal casting technique using the lost-wax method to create tribal motifs.',
        origin: 'Sadeibareni, Dhenkanal',
        specialty: 'Brass figurines and artifacts',
        learn_more_link: 'https://en.wikipedia.org/wiki/Dhokra'
    },
    {
        id: 'palm_leaf_etching',
        name: 'Palm Leaf Etching (Talapatra)',
        image: 'images/Heritage & Art/Palm Leaf Etching (Talapatra)/images.jpg',
        description: 'An ancient form of writing and art where text and designs are etched onto dried palm leaves.',
        origin: 'Raghurajpur, Puri',
        specialty: 'Intricate manuscript illustrations',
        learn_more_link: 'https://en.wikipedia.org/wiki/Palm-leaf_manuscript' // Using a more general link for now
    },
    {
        id: 'horn_craft',
        name: 'Horn Craft',
        image: 'images/Heritage & Art/Horn Craft/images.jpg',
        description: 'Creating decorative and utility items like combs, birds, and animals from cattle horns.',
        origin: 'Paralakhemundi',
        specialty: 'Polished and dynamic sculptures',
        learn_more_link: 'https://en.wikipedia.org/wiki/Horn_craft_in_Odisha'
    }
];

const famousDishes = [
    {
        id: 'pakhala_bhata',
        name: 'Pakhala Bhata',
        image: 'images/Famous Dishes/Pakhala Bhata.jpg',
        description: 'A humble and cooling dish of fermented rice with water, a staple in Odia households, especially in summer.',
        type: 'Main Course',
        key_ingredients: 'Rice, Water, Curd, Spices',
        learn_more_link: 'https://en.wikipedia.org/wiki/Pakhala'
    },
    {
        id: 'dalma',
        name: 'Dalma',
        image: 'images/Famous Dishes/Dalma.jpg',
        description: 'A nutritious and flavorful curry made with lentils and a mix of vegetables, tempered with ghee and spices.',
        type: 'Main Course / Side Dish',
        key_ingredients: 'Toor Dal, Vegetables, Ghee, Coconut',
        learn_more_link: 'https://en.wikipedia.org/wiki/Dalma'
    },
    {
        id: 'chhena_poda',
        name: 'Chhena Poda',
        image: 'images/Famous Dishes/Chhena Poda.jpg',
        description: 'The "burnt cheese" dessert of Odisha, a caramelized delight made from fresh cottage cheese (chhena).',
        type: 'Dessert',
        key_ingredients: 'Chhena, Sugar, Cardamom, Nuts',
        learn_more_link: 'https://en.wikipedia.org/wiki/Chhena_Poda'
    },
    {
        id: 'dahi_bara_aloo_dum',
        name: 'Dahi Bara Aloo Dum',
        image: 'images/Famous Dishes/Dahi Bara Aloo Dum.jpg',
        description: 'A unique and beloved street food combining soft lentil vadas (dahi bara) with a spicy potato curry (aloo dum).',
        type: 'Snack / Street Food',
        key_ingredients: 'Urad Dal, Potato, Yogurt, Spices',
        learn_more_link: 'https://en.wikipedia.org/wiki/Dahi_Bara_Aloo_Dum'
    },
    {
        id: 'khicede',
        name: 'Khicede (Khichdi)',
        image: 'images/Famous Dishes/Khicede.jpg',
        description: 'A wholesome one-pot meal of rice and lentils, offered as the main prasad at the Jagannath Temple.',
        type: 'Main Course / Prasad',
        key_ingredients: 'Rice, Moong Dal, Ghee, Ginger',
        learn_more_link: 'https://en.wikipedia.org/wiki/Khichdi'
    },
    {
        id: 'rasabali',
        name: 'Rasabali',
        image: 'images/Famous Dishes/Rasabali.jpg',
        description: 'Deep-fried patties of chhena soaked in a thick, sweetened, and flavored milk (rabri).',
        type: 'Dessert',
        key_ingredients: 'Chhena, Milk, Sugar, Cardamom',
        learn_more_link: 'https://en.wikipedia.org/wiki/Rasabali'
    }
];