const BANK=[];
function add(subject,topic,rows){rows.forEach(([q,options,answer,explanation])=>BANK.push({id:BANK.length+1,subject,topic,q,options,answer,explanation,source:'Original practice • uploaded syllabus'}));}
add('Use of English','Lexis and Structure',[
['Choose the word nearest in meaning to diligent.',['Careless','Hard-working','Angry','Wealthy'],1,'Diligent means showing care and effort in work.'],
['Choose the opposite of scarce.',['Rare','Limited','Abundant','Expensive'],2,'Abundant means plentiful, the opposite of scarce.'],
['Neither the teacher nor the students ___ absent.',['is','was','are','has'],2,'With neither…nor, the verb agrees with the nearer subject: students.'],
['She has lived here ___ 2020.',['for','since','during','by'],1,'Since introduces the starting point of a continuing period.'],
['If I had known, I ___ helped you.',['will have','would have','would','shall'],1,'The third conditional uses would have plus a past participle.'],
['He rarely arrives late, ___?',['does he','doesn’t he','is he','isn’t he'],0,'Rarely has a negative meaning, so the tag is positive.'],
['To spill the beans means to ___.',['waste food','reveal a secret','make a mistake','start an argument'],1,'The idiom means to disclose secret information.'],
['Choose the correctly spelt word.',['Accomodation','Acommodation','Accommodation','Acomodation'],2,'Accommodation has double c and double m.'],
['The committee ___ reached its decision.',['have been','has','are','were'],1,'Here the committee acts as a single unit, taking has.'],
['The book belongs to Ada. It is ___.',['her','hers','she','herself'],1,'Hers is the possessive pronoun used without a following noun.'],
['He insisted ___ paying for the meal.',['at','to','on','with'],2,'The standard expression is insist on doing something.'],
['Choose the word nearest in meaning to reluctant.',['Unwilling','Excited','Certain','Rapid'],0,'Reluctant means unwilling or hesitant.']
]);
add('Use of English','Oral Forms',[
['Which word rhymes with light?',['Late','Height','Let','Lit'],1,'Light and height share the ending sound /aɪt/.'],
['Which word has the same vowel sound as seat?',['Sit','Set','Feet','Sat'],2,'Seat and feet contain the long vowel /iː/.'],
['Which word begins with a silent consonant?',['Know','Go','Top','Move'],0,'The k in know is silent.'],
['Which word has stress on its second syllable?',['TAble','DOCtor','aBOUT','WINdow'],2,'About is pronounced with stress on the second syllable.']
]);
add('Use of English','Comprehension',[
['Read: “Although the rain delayed planting, the farmers used the extra time to repair their tools.” What did the farmers do during the delay?',['Abandoned farming','Repaired their tools','Sold their land','Harvested crops'],1,'The passage explicitly says they repaired their tools.'],
['Read: “The library extended its opening hours because many students needed a quiet place to study.” Why were the hours extended?',['To sell books','To provide more study time','To reduce visitors','To employ farmers'],1,'Longer hours gave students greater access to a quiet study space.'],
['Read: “Bola checked the forecast and packed an umbrella before leaving.” What can reasonably be inferred?',['Bola expected possible rain','It had already flooded','Bola dislikes sunshine','Bola was travelling abroad'],0,'Checking the forecast and carrying an umbrella suggest preparing for possible rain.'],
['Read: “Solar lamps reduced fuel costs and made evening study easier.” Which summary best captures both benefits?',['Solar lamps were costly','Solar lamps saved money and supported study','Fuel became free','Students stopped studying'],1,'The summary combines the two stated benefits without adding unsupported details.']
]);
add('Biology','Cell Biology',[
['Which organelle is the main site of aerobic respiration in a eukaryotic cell?',['Ribosome','Mitochondrion','Nucleus','Vacuole'],1,'Mitochondria produce most ATP during aerobic respiration.'],
['Which structure is present in a typical plant cell but absent from an animal cell?',['Cell membrane','Cytoplasm','Cellulose cell wall','Nucleus'],2,'Plant cells have a cellulose cell wall; animal cells do not.'],
['The movement of water through a selectively permeable membrane from higher to lower water potential is ___.',['Diffusion of salt','Osmosis','Active transport','Transpiration'],1,'Osmosis describes this movement of water.'],
['Which cell structure controls most cell activities and contains genetic material?',['Nucleus','Cell wall','Ribosome','Lysosome'],0,'The nucleus houses DNA and regulates gene expression.'],
['Which sequence shows increasing biological organisation?',['Organ → cell → tissue → system','Cell → tissue → organ → system','Tissue → organ → cell → system','System → organ → tissue → cell'],1,'Similar cells form tissues; tissues form organs; organs work in systems.']
]);
add('Biology','Nutrition and Transport',[
['The main site of photosynthesis in a leaf cell is the ___.',['Mitochondrion','Chloroplast','Nucleus','Ribosome'],1,'Chloroplasts contain chlorophyll and the machinery for photosynthesis.'],
['Which tissue carries water and mineral salts from roots?',['Phloem','Xylem','Epidermis','Cambium'],1,'Xylem conducts water and dissolved minerals.'],
['Which reagent is used to test for starch?',['Benedict’s solution','Iodine solution','Biuret reagent','Ethanol'],1,'Iodine turns blue-black in the presence of starch.'],
['Most absorption of digested nutrients occurs in the ___.',['Oesophagus','Stomach','Small intestine','Large intestine'],2,'Villi in the small intestine provide a large absorptive surface.'],
['Which blood component primarily transports oxygen?',['Platelets','Red blood cells','Plasma proteins','White blood cells'],1,'Haemoglobin in red blood cells binds oxygen.']
]);
add('Biology','Ecology and Genetics',[
['The first trophic level in a typical food chain consists of ___.',['Carnivores','Producers','Decomposers only','Parasites'],1,'Producers convert light or chemical energy into organic matter.'],
['An organism with two identical alleles for a gene is ___.',['Heterozygous','Homozygous','Hybrid only','Hemizygous always'],1,'Homozygous means having identical alleles at a gene locus.'],
['In a cross Aa × Aa, what fraction of offspring is expected to be aa?',['1/2','1/4','3/4','1'],1,'The possible genotypes are AA, Aa, Aa and aa.'],
['Which process releases water vapour from aerial parts of plants?',['Transpiration','Translocation','Germination','Pollination'],0,'Transpiration is the loss of water vapour, mainly through stomata.'],
['Which organism is a decomposer?',['Grass','Rabbit','Saprophytic fungus','Hawk'],2,'Saprophytic fungi break down dead organic matter.'],
['The functional unit of the mammalian kidney is the ___.',['Neuron','Nephron','Alveolus','Villus'],1,'Nephrons filter blood and form urine.'],
['Which hormone lowers blood glucose?',['Adrenaline','Insulin','Glucagon','Thyroxine'],1,'Insulin promotes glucose uptake and storage.'],
['Transfer of pollen from anther to stigma is ___.',['Fertilisation','Pollination','Dispersal','Germination'],1,'Pollination is pollen transfer; fertilisation is fusion of gametes.'],
['Which disease is transmitted by an infected female Anopheles mosquito?',['Cholera','Malaria','Tuberculosis','Measles'],1,'The mosquito transmits Plasmodium parasites that cause malaria.'],
['Which feature helps a fish obtain oxygen from water?',['Lungs','Gills','Feathers','Stomata'],1,'Gills provide a large surface for gas exchange in water.']
]);
add('Chemistry','Separation and Atomic Structure',[
['Which method separates an insoluble solid from a liquid?',['Filtration','Fractional distillation','Sublimation','Chromatography only'],0,'Filtration retains the insoluble solid while the liquid passes through.'],
['Which method is most suitable for separating miscible liquids with close boiling points?',['Decantation','Fractional distillation','Magnetisation','Filtration'],1,'Repeated vaporisation and condensation separate the liquids.'],
['An atom has atomic number 11 and mass number 23. How many neutrons does it have?',['11','12','23','34'],1,'Neutrons = mass number − atomic number = 23 − 11 = 12.'],
['Isotopes of an element have the same number of ___ but different numbers of neutrons.',['Protons','Nucleons','Shells always','Neutrons'],0,'Atomic number, the number of protons, defines the element.'],
['The electron arrangement of a neutral sodium atom (Z = 11) is ___.',['2,8,1','2,7,2','2,8,2','2,6,3'],0,'The first two shells hold 2 and 8 electrons; one remains.']
]);
add('Chemistry','Moles and Gas Laws',[
['How many moles are in 18 g of water? (H = 1, O = 16)',['0.5','1','2','18'],1,'Molar mass of water is 18 g/mol, so n = 18/18 = 1 mol.'],
['What mass is 0.5 mol of CO₂? (C = 12, O = 16)',['11 g','22 g','44 g','88 g'],1,'Molar mass = 44 g/mol; mass = 0.5 × 44 = 22 g.'],
['At constant temperature, the volume of a fixed mass of gas is inversely proportional to its ___.',['Pressure','Temperature','Mass','Density squared'],0,'This is Boyle’s law: PV is constant.'],
['A gas occupies 4 dm³ at 100 kPa. At constant temperature, its volume at 200 kPa is ___.',['8 dm³','4 dm³','2 dm³','1 dm³'],2,'P₁V₁ = P₂V₂, so V₂ = 100 × 4/200 = 2 dm³.'],
['Which expression is the ideal gas equation?',['PV = nRT','P = nRVT','PV = n/R','PT = nRV'],0,'The ideal gas relation is PV = nRT.']
]);
add('Chemistry','Bonding and Reactions',[
['A covalent bond is formed by ___.',['Sharing electron pairs','Transferring protons','Sharing neutrons','Removing nuclei'],0,'Covalent bonds involve shared pairs of electrons.'],
['What is the shape of methane, CH₄?',['Linear','Bent','Tetrahedral','Trigonal planar'],2,'Four bonding pairs around carbon arrange tetrahedrally.'],
['A solution of pH 2 is ___.',['Acidic','Neutral','Alkaline','Always a salt'],0,'A pH below 7 indicates an acidic aqueous solution at ordinary temperatures.'],
['Oxidation can be defined as ___.',['Gain of electrons','Loss of electrons','Loss of protons','Gain of neutrons'],1,'Oxidation is electron loss; reduction is electron gain.'],
['A catalyst increases reaction rate by ___.',['Increasing activation energy','Lowering activation energy','Changing the final equilibrium constant','Being consumed completely'],1,'A catalyst provides an alternative pathway with lower activation energy.'],
['Which gas turns limewater milky?',['Oxygen','Hydrogen','Carbon dioxide','Nitrogen'],2,'CO₂ forms a white precipitate of calcium carbonate in limewater.'],
['Which compound belongs to the alkane series?',['C₂H₆','C₂H₄','C₂H₂','C₂H₅OH'],0,'Alkanes have the general formula CₙH₂ₙ₊₂.'],
['The products of complete combustion of methane are ___.',['CO and H₂','CO₂ and H₂O','C and H₂','CH₃OH only'],1,'Complete combustion produces carbon dioxide and water.'],
['Which change is chemical?',['Melting ice','Rusting iron','Boiling water','Crushing glass'],1,'Rusting forms new iron compounds; the others are physical changes.'],
['Which substance conducts electricity when molten because of mobile ions?',['Sodium chloride','Sugar','Sulfur','Paraffin wax'],0,'Molten sodium chloride contains mobile Na⁺ and Cl⁻ ions.']
]);
add('Physics','Measurements and Motion',[
['Which is the SI unit of force?',['Joule','Newton','Watt','Pascal'],1,'Force is measured in newtons, equivalent to kg m s⁻².'],
['Which quantity is a vector?',['Speed','Mass','Displacement','Time'],2,'Displacement has both magnitude and direction.'],
['A car travels 150 m in 10 s. Its average speed is ___.',['5 m/s','10 m/s','15 m/s','1500 m/s'],2,'Average speed = distance/time = 150/10 = 15 m/s.'],
['A 2 kg body accelerates at 3 m/s². The resultant force is ___.',['1.5 N','5 N','6 N','9 N'],2,'F = ma = 2 × 3 = 6 N.'],
['A body starts from rest and accelerates uniformly at 2 m/s² for 5 s. Its final speed is ___.',['2 m/s','5 m/s','10 m/s','25 m/s'],2,'v = u + at = 0 + 2 × 5 = 10 m/s.'],
['The momentum of a 3 kg body moving at 4 m/s is ___.',['7 kg m/s','12 kg m/s','1.33 kg m/s','48 kg m/s'],1,'Momentum p = mv = 3 × 4 = 12 kg m/s.']
]);
add('Physics','Energy and Heat',[
['A force of 10 N moves a body 5 m in the force direction. The work done is ___.',['2 J','15 J','50 J','100 J'],2,'Work = force × displacement = 10 × 5 = 50 J.'],
['What is the kinetic energy of a 2 kg body moving at 3 m/s?',['3 J','6 J','9 J','18 J'],2,'KE = ½mv² = ½ × 2 × 9 = 9 J.'],
['A machine does 600 J of work in 20 s. Its power is ___.',['12 W','30 W','300 W','12000 W'],1,'Power = work/time = 600/20 = 30 W.'],
['Heat transfer through a vacuum occurs by ___.',['Conduction','Convection','Radiation','Diffusion'],2,'Radiation can travel through a vacuum as electromagnetic waves.'],
['Which instrument measures temperature?',['Barometer','Thermometer','Ammeter','Hydrometer'],1,'A thermometer measures temperature.'],
['A 2 kg mass is raised 5 m. Find its gain in gravitational potential energy (g = 10 m/s²).',['10 J','25 J','50 J','100 J'],3,'PE = mgh = 2 × 10 × 5 = 100 J.']
]);
add('Physics','Waves and Electricity',[
['A wave has frequency 50 Hz and wavelength 2 m. Its speed is ___.',['25 m/s','48 m/s','52 m/s','100 m/s'],3,'Wave speed v = fλ = 50 × 2 = 100 m/s.'],
['Sound waves in air are ___.',['Longitudinal','Transverse only','Electromagnetic','Unable to carry energy'],0,'Air particles oscillate parallel to the direction of propagation.'],
['A resistor carries 2 A at 12 V. Its resistance is ___.',['6 Ω','10 Ω','14 Ω','24 Ω'],0,'R = V/I = 12/2 = 6 Ω.'],
['Two resistors of 3 Ω and 5 Ω connected in series have total resistance ___.',['1.875 Ω','2 Ω','8 Ω','15 Ω'],2,'Series resistances add: 3 + 5 = 8 Ω.'],
['An appliance operates at 10 V and 3 A. Its power is ___.',['3.33 W','13 W','30 W','100 W'],2,'Electrical power P = VI = 10 × 3 = 30 W.'],
['The image formed by a plane mirror is ___.',['Real and enlarged','Virtual and the same size','Real and inverted','Virtual and smaller always'],1,'A plane mirror forms a virtual, upright image of equal size.'],
['The SI unit of electric charge is the ___.',['Ampere','Volt','Coulomb','Ohm'],2,'Electric charge is measured in coulombs.'],
['A radioactive sample has a half-life of 4 hours. What fraction remains after 8 hours?',['1/2','1/4','1/8','3/4'],1,'Two half-lives leave (½)² = ¼ of the initial undecayed nuclei.']
]);

export default BANK;
