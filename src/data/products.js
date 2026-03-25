import itemBox from '../assets/Item_Box.png'

const products = [
  {
    id: 1,
    name: 'Root-Infused Cleanser',
    desc: 'Revitalizing bio-energy concentrate for radiant skin.',
    price: '$120',
    image: itemBox,
    fullDesc: 'A gentle yet effective cleanser rooted in botanical intelligence. Formulated with bio-active plant extracts, it removes impurities while preserving the skin\'s natural moisture barrier. Leaves skin clean, balanced, and softly luminous.',
    howToUse: 'Apply a small amount to damp skin and massage in gentle circular motions. Rinse thoroughly with lukewarm water. Use morning and evening.',
    keyIngredients: [
      { name: 'Centella Asiatica Extract', desc: 'Soothes and strengthens the skin barrier while reducing redness.' },
      { name: 'Botanical Amino Complex', desc: 'Gently cleanses without stripping natural oils.' },
      { name: 'Green Tea Polyphenols', desc: 'Antioxidant-rich protection against environmental stressors.' },
    ],
  },
  {
    id: 2,
    name: 'Aqueous Rhythm Toner',
    desc: 'Lightweight floral extract for deep hydration.',
    price: '$95',
    image: itemBox,
    fullDesc: 'A hydrating toner that works in harmony with the skin\'s natural moisture cycle. Infused with floral water and plant-derived humectants, it replenishes and balances the skin\'s pH while preparing it to absorb subsequent skincare steps.',
    howToUse: 'After cleansing, apply to a cotton pad or pour directly into palms. Gently press into skin until fully absorbed. Layer for deeper hydration.',
    keyIngredients: [
      { name: 'Rose Floral Water', desc: 'Hydrates and tones while providing a delicate botanical scent.' },
      { name: 'Hyaluronic Acid', desc: 'Draws moisture into the skin for immediate and lasting hydration.' },
      { name: 'Niacinamide', desc: 'Minimizes pores and evens skin tone over time.' },
    ],
  },
  {
    id: 3,
    name: 'Fluid Balance Emulsion',
    desc: 'Rich molecular barrier cream for lasting moisture.',
    price: '$140',
    image: itemBox,
    fullDesc: 'A lightweight yet deeply nourishing emulsion that reinforces the skin\'s lipid barrier. Its fluid texture melts seamlessly into skin, delivering lasting moisture and a refined, velvety finish.',
    howToUse: 'After toner, apply 2–3 drops to fingertips and smooth over face and neck. Pat gently until absorbed. Use morning and evening.',
    keyIngredients: [
      { name: 'Ceramide Complex', desc: 'Restores and fortifies the natural skin barrier.' },
      { name: 'Squalane', desc: 'Lightweight emollient that mimics the skin\'s natural sebum.' },
      { name: 'Lotus Root Extract', desc: 'Brightens and refines skin texture with continued use.' },
    ],
  },
  {
    id: 4,
    name: 'Vital Essence Serum',
    desc: 'Calming botanical toner to balance skin rhythm.',
    price: '$75',
    image: itemBox,
    fullDesc: 'A concentrated serum powered by bio-inspired actives. Designed to target visible signs of fatigue and environmental stress, it restores vitality and supports the skin\'s natural renewal process for a radiant, healthy glow.',
    howToUse: 'Apply 3–4 drops to clean skin before moisturizer. Gently press into face, neck, and décolletage. Best used morning and evening.',
    keyIngredients: [
      { name: 'Bakuchiol', desc: 'Plant-derived retinol alternative that smooths and firms without irritation.' },
      { name: 'Vitamin C Derivative', desc: 'Brightens and protects against oxidative damage.' },
      { name: 'Peptide Blend', desc: 'Supports collagen synthesis for firmer, more resilient skin.' },
    ],
  },
  {
    id: 5,
    name: 'Deep Barrier Moisturizing Cream',
    desc: 'Ultra-fine botanical oil for luminous finish.',
    price: '$110',
    image: itemBox,
    fullDesc: 'A rich, enveloping cream that delivers profound moisture to dry and compromised skin. Its molecular complex works deep within the skin layers to reinforce density and resilience, while the surface stays smooth and radiant.',
    howToUse: 'As the final step in your routine, warm a small amount between fingertips and press gently into skin. Use morning and/or evening.',
    keyIngredients: [
      { name: 'Shea Butter', desc: 'Deeply nourishes and softens while sealing in moisture.' },
      { name: 'Madecassoside', desc: 'Calms irritation and accelerates skin recovery.' },
      { name: 'Sea Buckthorn Oil', desc: 'Rich in omega fatty acids for intensive barrier repair.' },
    ],
  },
  {
    id: 6,
    name: 'Active Vitalizing Collagen Gel Mask',
    desc: 'Mild foam cleanser with natural botanical blend.',
    price: '$65',
    image: itemBox,
    fullDesc: 'An intensive treatment mask infused with marine collagen and botanical actives. The cooling gel texture delivers an immediate surge of hydration while firming and plumping skin for a visibly revitalized complexion.',
    howToUse: 'Apply a generous layer to clean, dry skin. Leave on for 15–20 minutes. Remove with a damp cloth or rinse thoroughly. Use 2–3 times per week.',
    keyIngredients: [
      { name: 'Marine Collagen', desc: 'Plumps and firms while improving skin elasticity.' },
      { name: 'Aloe Vera Gel', desc: 'Soothes, cools, and deeply hydrates the skin.' },
      { name: 'Licorice Root Extract', desc: 'Brightens and evens skin tone with continued use.' },
    ],
  },
]

export default products
