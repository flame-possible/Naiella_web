import product01 from '../assets/product_01.png'
import product02 from '../assets/product_02.png'
import product03 from '../assets/product_03.png'
import product04 from '../assets/product_04.png'
import product05 from '../assets/product_05.png'
import product06 from '../assets/product_06.png'

import p01d01 from '../assets/product_detail/product_01_01.png'
import p01d02 from '../assets/product_detail/product_01_02.png'
import p01d03 from '../assets/product_detail/product_01_03.png'
import p01d04 from '../assets/product_detail/product_01_04.png'

import p02d01 from '../assets/product_detail/product_02_01.png'
import p02d02 from '../assets/product_detail/product_02_02.png'
import p02d03 from '../assets/product_detail/product_02_03.png'
import p02d04 from '../assets/product_detail/product_02_04.png'

import p03d01 from '../assets/product_detail/product_03_01.png'
import p03d02 from '../assets/product_detail/product_03_02.png'
import p03d03 from '../assets/product_detail/product_03_03.png'
import p03d04 from '../assets/product_detail/product_03_04.png'

import p04d01 from '../assets/product_detail/product_04_01.png'
import p04d02 from '../assets/product_detail/product_04_02.png'
import p04d03 from '../assets/product_detail/product_04_03.png'
import p04d04 from '../assets/product_detail/product_04_04.png'

import p05d01 from '../assets/product_detail/product_05_01.png'
import p05d02 from '../assets/product_detail/product_05_02.png'
import p05d03 from '../assets/product_detail/product_05_03.png'
import p05d04 from '../assets/product_detail/product_05_04.png'

import p06d01 from '../assets/product_detail/product_06_01.png'
import p06d02 from '../assets/product_detail/product_06_02.png'
import p06d03 from '../assets/product_detail/product_06_03.png'
import p06d04 from '../assets/product_detail/product_06_04.png'

import p01t01 from '../assets/product_thumbnail/product_01_01.png'
import p01t02 from '../assets/product_thumbnail/product_01_02.png'
import p01t03 from '../assets/product_thumbnail/product_01_03.png'
import p01t04 from '../assets/product_thumbnail/product_01_04.png'
import p01t05 from '../assets/product_thumbnail/product_01_05.png'

import p02t01 from '../assets/product_thumbnail/product_02_01.png'
import p02t02 from '../assets/product_thumbnail/product_02_02.png'
import p02t03 from '../assets/product_thumbnail/product_02_03.png'
import p02t04 from '../assets/product_thumbnail/product_02_04.png'
import p02t05 from '../assets/product_thumbnail/product_02_05.png'

import p03t01 from '../assets/product_thumbnail/product_03_01.png'
import p03t02 from '../assets/product_thumbnail/product_03_02.png'
import p03t03 from '../assets/product_thumbnail/product_03_03.png'
import p03t04 from '../assets/product_thumbnail/product_03_04.png'
import p03t05 from '../assets/product_thumbnail/product_03_05.png'

import p04t01 from '../assets/product_thumbnail/product_04_01.png'
import p04t02 from '../assets/product_thumbnail/product_04_02.png'
import p04t03 from '../assets/product_thumbnail/product_04_03.png'
import p04t04 from '../assets/product_thumbnail/product_04_04.png'
import p04t05 from '../assets/product_thumbnail/product_04_05.png'

import p05t01 from '../assets/product_thumbnail/product_05_01.png'
import p05t02 from '../assets/product_thumbnail/product_05_02.png'
import p05t03 from '../assets/product_thumbnail/product_05_03.png'
import p05t04 from '../assets/product_thumbnail/product_05_04.png'

import p06t01 from '../assets/product_thumbnail/product_06_01.png'
import p06t02 from '../assets/product_thumbnail/product_06_02.png'
import p06t03 from '../assets/product_thumbnail/product_06_03.png'
import p06t04 from '../assets/product_thumbnail/product_06_04.png'
import p06t05 from '../assets/product_thumbnail/product_06_05.png'

const products = [
  {
    id: 1,
    name: 'Root-Infused Cleanser',
    desc: 'A gentle cleanser that removes skin impurities while leaving a moist, protective hydration layer.',
    price: '$17',
    volume: '120 mL / 4.06 fl.oz',
    image: product01,
    thumbnails: [p01t01, p01t02, p01t03, p01t04, p01t05],
    detailImages: [p01d01, p01d02, p01d03, p01d04],
    efficacy: `- Low-irritation cleansing — Fine foam based on stearic acid and myristic acid cleanses the skin thoroughly.
- Moisture & elasticity care — Glycerin and hydrolyzed collagen help relieve dryness even after washing.
- Soothing & protection — Extracts of allantoin, panthenol, carrot, blueberry, radish, spinach, and cabbage help keep the skin calm and comfortable.`,
    howToUse: `Dispense an appropriate amount onto your hands and lather well. Gently massage over the entire face, then rinse thoroughly with lukewarm water. Avoid the eye area.`,
    ingredients: `Water, Stearic Acid, Lauric Acid, Myristic Acid, Potassium Hydroxide, Glycerin, Cocamidopropyl Betaine, PEG-100 Stearate, Beeswax, Hydrolyzed Collagen, Daucus Carota Sativa (Carrot) Root Extract, Vaccinium Angustifolium (Blueberry) Fruit Extract, Raphanus Sativus (Radish) Root Extract, Spinacia Oleracea (Spinach) Leaf Extract, Brassica Oleracea Capitata (Cabbage) Leaf Extract, Glyceryl Stearate, Glycol Distearate, Glycol Stearate, Sodium Chloride, Caprylyl Glycol, Phenoxyethanol, Butylene Glycol, Allantoin, Panthenol, 1,2-Hexanediol, Disodium EDTA, Fragrance.`,
  },
  {
    id: 2,
    name: 'Aqueous Rhythm Toner',
    desc: 'A hydrating toner that refines the skin\'s texture after cleansing and boosts moisture absorption.',
    price: '$20',
    volume: '300 mL / 10.14 fl.oz',
    image: product02,
    thumbnails: [p02t01, p02t02, p02t03, p02t04, p02t05],
    detailImages: [p02d01, p02d02, p02d03, p02d04],
    efficacy: `- Enhanced moisture layering — Three types of hyaluronic acid and glycerin deliver quick and deep hydration to the skin.
- Soothing care — Centella asiatica, matricaria, allantoin, and panthenol help calm and comfort irritated skin.
- Plant extract complex — Carrot, blueberry, radish, spinach, and cabbage extracts help promote a vibrant and well-balanced complexion.`,
    howToUse: `After cleansing, apply an appropriate amount to a cotton pad or your palms. Gently smooth over the skin following its texture, then pat lightly to aid absorption.`,
    ingredients: `Aqua (Water), Glycerin, Propanediol, 1,2-Hexanediol, Panthenol,  PEG-60 Hydrogenated Castor Oil, Sodium Citrate,  Butylene Glycol, Sodium Hyaluronate,  Ethylhexylglycerin,  Betaine, Allantoin, Caprylyl Glycol,  Citric Acid, Laminaria Japonica Extract, Chamomilla Recutita (Matricaria) Flower Extract, Centella Asiatica Extract, Disodium EDTA,  Hydrolyzed Glycosaminoglycans, Hydrolyzed Hyaluronic Acid, Daucus Carota Sativa (Carrot) Root Extract, Vaccinium Angustifolium (Blueberry) Fruit Extract, Raphanus Sativus (Radish) Root Extract, Spinacia Oleracea (Spinach) Leaf Extract, Brassica Oleracea Capitata (Cabbage) Leaf Extract, Aloe Barbadensis Leaf Extract,  Hydrogenated Lecithin, Ceramide NP, Linoleic Acid, Macadamia Integrifolia Seed Oil, Squalane,  Cholesterol, Brassica Campestris (Rapeseed) Sterols, Hyaluronic Acid, Carthamus Tinctorius (Safflower) Seed Oil, Raspberry Ketone.`,
  },
  {
    id: 3,
    name: 'Fluid Balance Emulsion',
    desc: 'A lightweight yet deeply moisturizing daily nutrition lotion.',
    price: '$27',
    volume: '130 mL / 4.39 fl.oz',
    image: product03,
    thumbnails: [p03t01, p03t02, p03t03, p03t04, p03t05],
    detailImages: [p03d01, p03d02, p03d03, p03d04],
    efficacy: `- Moisture & nutrition balance — Squalane, ceramide, and sunflower seed oil deliver a balanced supply of hydration and nourishment.
- Soothing & protection — Allantoin, panthenol, and Centella asiatica extract help keep sensitive skin calm and comfortable.
- Botanical moisturizing energy — Carrot, blueberry, radish, spinach, and cabbage extracts help maintain a clear and radiant complexion.`,
    howToUse: `After cleansing, gently apply an appropriate amount to the face and neck and allow it to absorb. You may use it after toner or serum as part of your skincare routine.`,
    ingredients: `Aqua (Water), Glycerin, Propanediol, Dimethicone, Cetearyl Ethylhexanoate,  1,2-Hexanediol, Helianthus Annuus (Sunflower) Seed Oil, Cetearyl Alcohol,  Glyceryl Glucoside, Diisostearyl Malate, Hydrolyzed Collagen, Daucus Carota Sativa (Carrot) Root Extract, Vaccinium Angustifolium (Blueberry) Fruit Extract, Raphanus Sativus (Radish) Root Extract, Spinacia Oleracea (Spinach) Leaf Extract, Brassica Oleracea Capitata (Cabbage) Leaf Extract, Glyceryl Stearate SE,  Acrylates/Ammonium Acrylate Copolymer, Acrylates Copolymer, Tromethamine,  Allantoin, Panthenol, Ethylhexylglycerin, Xanthan Gum, Caprylyl Glycol, Ceramide NP, Hydrogenated Lecithin, Madecassoside, Asiaticoside,  Sodium Hyaluronate, Disodium EDTA, Fragrance.`,
  },
  {
    id: 4,
    name: 'Vital Essence Serum',
    desc: 'A deeply hydrating serum formulated with concentrated moisture ingredients that penetrate the skin for long-lasting hydration.',
    price: '$30',
    volume: '50 mL / 1.69 fl.oz',
    image: product04,
    thumbnails: [p04t01, p04t02, p04t03, p04t04, p04t05],
    detailImages: [p04d01, p04d02, p04d03, p04d04],
    efficacy: `- Multi-hyaluronic acid moisture delivery — High-, medium-, and low-molecular-weight hyaluronic acids, along with a hyaluronic crosspolymer, help build a strong, multi-layered moisture barrier.
- Elasticity & hydration synergy — Glycosaminoglycans, trehalose, and betaine work together to keep the skin supple, firm, and moisturized.
- Soothing botanical complex — Centella asiatica, matricaria, and a blend of botanical extracts help care for skin balance and comfort.`,
    howToUse: `After cleansing, apply an appropriate amount evenly over the entire face and allow it to absorb. You may also use it after toner as part of your skincare routine.`,
    ingredients: `Aqua (Water), Butylene Glycol, Glycerin, 1,2-Hexanediol, Dipropylene Glycol, Daucus Carota Sativa (Carrot) Root Extract, Vaccinium Angustifolium (Blueberry) Fruit Extract, Raphanus Sativus (Radish) Root Extract, Spinacia Oleracea (Spinach) Leaf Extract, Brassica Oleracea Capitata (Cabbage) Leaf Extract,  Panthenol, Arginine, Carbomer, Polyglyceryl-10 Laurate,  Polyglyceryl-4 Laurate, Sodium Hyaluronate, Betaine, Allantoin,  Xanthan Gum, Caprylyl Glycol, Trehalose, Laminaria Japonica Extract, Chamomilla Recutita (Matricaria) Flower Extract, Centella Asiatica Extract, Disodium EDTA, Propanediol,  Sodium Hyaluronate Crosspolymer, Hydrolyzed Glycosaminoglycans,  Benzyl Glycol, Hydrolyzed Hyaluronic Acid,  Madecassoside, Asiaticoside, Ethylhexylglycerin,  Hyaluronic Acid, Raspberry Ketone.`,
  },
  {
    id: 5,
    name: 'Deep Barrier Moisturizing Cream',
    desc: 'A high-moisture cream that forms a protective hydration barrier to keep the skin moisturized all day.',
    price: '$27',
    volume: '50 mL / 1.69 fl.oz',
    image: product05,
    thumbnails: [p05t01, p05t02, p05t03, p05t04],
    detailImages: [p05d01, p05d02, p05d03, p05d04],
    efficacy: `- Moisture-locking barrier — Squalane, sunflower seed oil, ceramide NP, cholesterol, and linoleic acid help build a strong and lasting moisture barrier.
- Soft hydrating texture — Glycerin, trehalose, and betaine help leave the skin smooth, supple, and deeply hydrated.
- Botanical extract complex — A blend of plant-derived ingredients supports skin vitality and balance.`,
    howToUse: `As the final step of your skincare routine, apply an appropriate amount evenly over the entire face and allow it to absorb.`,
    ingredients: `Aqua (Water), Glycerin, Butylene Glycol, Squalane, 1,2-Hexanediol,  Cetearyl Alcohol, Caprylyl Methicone, Helianthus Annuus (Sunflower) Seed Oil, Daucus Carota Sativa (Carrot) Root Extract, Vaccinium Angustifolium (Blueberry) Fruit Extract, Raphanus Sativus (Radish) Root Extract, Spinacia Oleracea (Spinach) Leaf Extract, Brassica Oleracea Capitata (Cabbage) Leaf Extract,  Glyceryl Stearate SE, Arginine, Carbomer,  Glyceryl Stearate, Panthenol, Betaine, Allantoin,  Ethylhexylglycerin, Caprylyl Glycol, Trehalose,  Disodium EDTA, Sodium Hyaluronate, Hydrogenated Lecithin,  Ceramide NP, Linoleic Acid, Macadamia Integrifolia Seed Oil,  Cholesterol, Brassica Campestris (Rapeseed) Sterols, Carthamus Tinctorius (Safflower) Seed Oil, Raspberry Ketone.`,
  },
  {
    id: 6,
    name: 'Active Vitalizing Collagen Gel Mask',
    desc: 'A high-moisture sheet mask infused with a rich essence that adheres closely to the skin, delivering instant hydration.',
    price: '$25',
    volume: '25 mL x 5 ea',
    image: product06,
    thumbnails: [p06t01, p06t02, p06t03, p06t04, p06t05],
    detailImages: [p06d01, p06d02, p06d03, p06d04],
    efficacy: `- Collagen moisture recharge — Hydrolyzed collagen and three types of hyaluronic acid provide deep, lasting hydration.
- Soothing & barrier care — Centella asiatica, matricaria, allantoin, and panthenol help relieve skin stress and support a healthy skin barrier.
- Botanical extract complex — A blend of plant-derived ingredients helps maintain skin vitality and balance.
- Provides a firming, lifting effect for a more sculpted and youthful-looking complexion.`,
    howToUse: `After cleansing, prepare the skin with toner, then apply the mask evenly over the face. Remove after 10–20 minutes and gently pat the remaining essence until absorbed.`,
    ingredients: `Aqua (Water), Glycerin, Butylene Glycol, Panthenol, 1,2-Hexanediol, Daucus Carota Sativa (Carrot) Root Extract, Vaccinium Angustifolium (Blueberry) Fruit Extract, Raphanus Sativus (Radish) Root Extract, Spinacia Oleracea (Spinach) Leaf Extract, Brassica Oleracea Capitata (Cabbage) Leaf Extract, Aloe Barbadensis Leaf Extract, PEG-60 Hydrogenated Castor Oil, Hydroxyethylcellulose, Sodium Citrate, Camellia Sinensis Leaf Extract, Ethylhexylglycerin,  Betaine, Allantoin, Caprylyl Glycol, Citric Acid, Laminaria Japonica Extract, Chamomilla Recutita (Matricaria) Flower Extract, Centella Asiatica Extract, Sodium Hyaluronate, Disodium EDTA,  Sodium Nitrate, Hydrolyzed Glycosaminoglycans, Benzyl Glycol, Hydrolyzed Hyaluronic Acid, Madecassoside, Asiaticoside, Hydrogenated Lecithin, Ceramide NP, Linoleic Acid, Macadamia Integrifolia Seed Oil, Squalane, Cholesterol, Brassica Campestris (Rapeseed) Sterols, Hyaluronic Acid, Carthamus Tinctorius (Safflower) Seed Oil, Raspberry Ketone.`,
  },
]

export default products
