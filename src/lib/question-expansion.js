// Original questions mapped to the four supplied JAMB syllabuses.
// IDs start at 1001 to preserve the original 1–80 question identifiers.
const groups=[];
const add=(subject,topic,rows)=>groups.push({subject,topic,rows});
add('Biology','Classification of Organisms',[
['Which feature distinguishes bacteria from typical plant and animal cells?',['Absence of a membrane-bound nucleus','Presence of chloroplasts in all bacteria','Absence of genetic material','Presence of a cellulose wall in all bacteria'],0,'Bacteria are prokaryotes; their DNA is not enclosed in a membrane-bound nucleus.'],
['Which organism belongs to the fungi?',['Rhizopus','Amoeba','Spirogyra','Maize'],0,'Rhizopus is a fungus that absorbs nutrients from organic material.'],
['Which feature is characteristic of mammals?',['Feathers','Mammary glands','Gills throughout life','Scales covering every species'],1,'Mammary glands produce milk for the young.']
]);
add('Biology','Adaptation',[
['A cactus has leaves reduced to spines mainly to ___.',['Increase water loss','Reduce water loss','Increase leaf surface area','Absorb oxygen from soil'],1,'Reduced leaf area limits transpiration in dry environments.'],
['A stick insect resembles a twig. This adaptation mainly provides ___.',['Camouflage','Photosynthesis','Pollination','Excretion'],0,'Its resemblance to a twig makes it less conspicuous to predators.'],
['The long proboscis of a butterfly is adapted for ___.',['Chewing wood','Sucking nectar','Filtering mud','Piercing bone'],1,'The proboscis reaches and sucks liquid nectar from flowers.']
]);
add('Biology','Respiration',[
['During strenuous exercise, insufficient oxygen in human muscles may lead to production of ___.',['Ethanol','Lactate','Starch','Urea'],1,'Anaerobic glycolysis in muscles produces lactate when oxygen supply cannot meet demand.'],
['The main products of alcoholic fermentation by yeast are ___.',['Ethanol and carbon dioxide','Oxygen and glucose','Urea and water','Starch and oxygen'],0,'Yeast converts sugar to ethanol and carbon dioxide during alcoholic fermentation.'],
['Which feature of alveoli aids gas exchange?',['Thick impermeable walls','Small surface area','Thin walls and rich capillary supply','Dry surfaces without blood vessels'],2,'Thin walls shorten diffusion distance and capillaries maintain concentration gradients.']
]);
add('Biology','Excretion and Osmoregulation',[
['Removal of metabolic waste from an organism is called ___.',['Egestion','Excretion','Ingestion','Assimilation'],1,'Excretion removes wastes produced by metabolism; egestion removes undigested food.'],
['Urea is formed mainly in the mammalian ___.',['Liver','Heart','Lungs','Bladder'],0,'The liver converts toxic ammonia from amino-acid breakdown into urea.'],
['A freshwater Amoeba removes excess water using its ___.',['Nucleus','Contractile vacuole','Cell wall','Chloroplast'],1,'The contractile vacuole collects and expels water entering by osmosis.']
]);
add('Biology','Support and Movement',[
['Which plant tissue provides flexible support in young growing stems?',['Collenchyma','Phloem sieve tubes','Root hairs','Palisade cells'],0,'Collenchyma has unevenly thickened walls that support growing parts flexibly.'],
['Growth of a plant shoot towards light is ___.',['Negative geotropism only','Positive phototropism','Negative phototropism','Hydrotropism'],1,'Positive phototropism is directional growth towards light.'],
['Which joint permits movement mainly in one plane?',['Ball-and-socket joint','Hinge joint','Fixed joint','Pivot joint'],1,'A hinge joint, such as the elbow, permits mainly bending and straightening.']
]);
add('Biology','Reproduction',[
['Fusion of male and female gametes is ___.',['Pollination','Fertilisation','Germination','Dispersal'],1,'Fertilisation forms a zygote through gamete fusion.'],
['Which is an example of natural vegetative propagation?',['Growth of a new plant from a yam tuber','Fusion of gametes','Seed formation after fertilisation','Pollen formation'],0,'A tuber can produce a new plant without gamete fusion.'],
['In a flower, pollen grains are produced in the ___.',['Stigma','Ovary','Anther','Sepal'],2,'Anthers are the pollen-producing parts of the stamens.']
]);
add('Biology','Growth and Germination',[
['Which combination is generally necessary for seed germination?',['Water, oxygen and suitable temperature','Light, soil and fertiliser in every case','Carbon dioxide, salt and darkness','Pollen, nectar and wind'],0,'Viable seeds generally require water, oxygen and a suitable temperature; light requirements vary.'],
['In epigeal germination, the cotyledons ___.',['Remain below the soil','Are carried above the soil','Develop into pollen','Disappear before water is absorbed'],1,'Elongation of the hypocotyl carries the cotyledons above ground.'],
['Growth in a multicellular organism involves a permanent increase in ___.',['Size and dry mass','Water content only','Body temperature only','Movement speed only'],0,'Growth involves irreversible increase in size and biomass, not temporary swelling alone.']
]);
add('Biology','Coordination and Control',[
['The brain and spinal cord together form the ___.',['Peripheral nervous system','Central nervous system','Endocrine system','Digestive system'],1,'The central nervous system consists of the brain and spinal cord.'],
['Which part of the brain mainly coordinates balance and precise movement?',['Cerebellum','Medulla only','Hypothalamus only','Pituitary gland'],0,'The cerebellum coordinates muscular activity and balance.'],
['Hormones are chemical messengers released by endocrine glands into the ___.',['Bloodstream','Alimentary canal only','Air','Urinary bladder'],0,'Endocrine glands release hormones into blood for transport to target tissues.']
]);
add('Biology','Soil and Environmental Conservation',[
['Which soil usually has the smallest mineral particles?',['Sandy soil','Clay soil','Gravel','Coarse sand'],1,'Clay particles are smaller than silt and sand particles.'],
['Planting trees on bare slopes helps reduce ___.',['Soil erosion','Photosynthesis','Soil formation in every case','Rainfall interception'],0,'Roots bind soil and vegetation reduces the erosive impact of rain and runoff.'],
['Which action best conserves biodiversity?',['Protecting natural habitats','Destroying wetlands','Hunting threatened species','Discharging untreated waste'],0,'Habitat protection maintains the conditions needed by many species.']
]);
add('Biology','Evolution and Biotechnology',[
['Natural selection favours organisms that ___.',['Have inherited traits that improve survival and reproduction','Choose to change their genes deliberately','Never vary from their parents','Acquire every useful trait by effort'],0,'Beneficial heritable variation can increase reproductive success in a particular environment.'],
['Fossils are useful evidence of evolution because they ___.',['Show organisms that lived in the past','Prove all organisms are identical','Prevent natural selection','Contain only living animals'],0,'Fossils reveal past life forms and patterns of change through geological time.'],
['Which is an application of biotechnology?',['Using microorganisms to produce insulin','Measuring rainfall with a gauge','Sorting stones by size','Polishing a metal surface'],0,'Biotechnology uses biological systems, including genetically modified microorganisms, to make useful products.']
]);
add('Chemistry','Atomic Structure and Periodicity',[
['Which particle has a negative charge?',['Proton','Neutron','Electron','Nucleus'],2,'Electrons are negatively charged; protons are positive and neutrons are neutral.'],
['Elements in the same group of the periodic table commonly have similar ___.',['Valence electron arrangements','Mass numbers','Numbers of electron shells','Numbers of neutrons'],0,'Similar outer-shell electron arrangements lead to similar chemical behaviour.'],
['Which element is a noble gas?',['Sodium','Chlorine','Neon','Magnesium'],2,'Neon belongs to group 18 and has a filled outer electron shell.']
]);
add('Chemistry','Nuclear Chemistry',[
['An alpha particle consists of ___.',['Two protons and two neutrons','One electron','A photon only','One proton and one neutron'],0,'An alpha particle is a helium-4 nucleus.'],
['Which radiation has the greatest penetrating ability among alpha, beta and gamma?',['Alpha','Beta','Gamma','All are equally penetrating'],2,'Gamma radiation is generally more penetrating than alpha or beta radiation.'],
['A radioactive sample has a half-life of 5 days. How much of an initial 80 g remains after 10 days?',['40 g','20 g','10 g','5 g'],1,'Ten days is two half-lives: 80 × ½ × ½ = 20 g.']
]);
add('Chemistry','Solubility',[
['A saturated solution at a specified temperature contains ___.',['The maximum amount of dissolved solute at equilibrium','No solute','Only insoluble particles','Less solute than every unsaturated solution'],0,'At saturation, the solvent cannot dissolve more of that solute at the specified temperature.'],
['If solubility is 20 g per 100 g of water, what mass dissolves in 50 g of water at that temperature?',['5 g','10 g','20 g','40 g'],1,'The water mass is halved, so 20 × 50/100 = 10 g dissolves.'],
['Crystallisation is useful for obtaining ___.',['A dissolved solid from its solution','Two gases of identical density','A metal from every ore directly','An insoluble solid by filtering only'],0,'A dissolved solid can form crystals as a concentrated solution cools or solvent evaporates.']
]);
add('Chemistry','Environmental Pollution',[
['Which gas is a major contributor to acid rain?',['Sulfur dioxide','Helium','Neon','Hydrogen'],0,'Sulfur dioxide forms acidic products in the atmosphere that contribute to acid rain.'],
['Excess nitrate and phosphate in water can cause ___.',['Eutrophication','Sublimation','Electroplating','Neutralisation only'],0,'Nutrients promote algal growth, whose subsequent decay may reduce dissolved oxygen.'],
['Carbon monoxide is dangerous mainly because it ___.',['Binds strongly to haemoglobin','Is the main component of air','Always smells strongly','Makes oxygen dissolve faster'],0,'Carbon monoxide reduces oxygen transport by binding strongly to haemoglobin.']
]);
add('Chemistry','Acids, Bases and Salts',[
['An acid turns blue litmus ___.',['Red','Green','White','Yellow'],0,'Blue litmus becomes red in an acidic solution.'],
['The reaction of an acid with a base to form salt and water is ___.',['Neutralisation','Cracking','Polymerisation','Sublimation'],0,'Neutralisation is the acid–base reaction producing salt and usually water.'],
['Which substance is an alkali?',['Sodium hydroxide','Sodium chloride','Ethanol','Copper metal'],0,'Sodium hydroxide is a water-soluble base and therefore an alkali.']
]);
add('Chemistry','Redox Reactions',[
['Reduction is the ___.',['Gain of electrons','Loss of electrons','Gain of neutrons','Loss of mass number'],0,'Reduction is electron gain, the counterpart of oxidation.'],
['The oxidation number of oxygen in water is ___.',['+2','−2','0','−1'],1,'Oxygen usually has oxidation number −2 in compounds such as water.'],
['An oxidising agent ___.',['Accepts electrons and is reduced','Donates electrons and is oxidised','Never changes chemically','Only removes neutrons'],0,'An oxidising agent oxidises another species by accepting its electrons.']
]);
add('Chemistry','Electrolysis',[
['During electrolysis, positive ions move towards the ___.',['Cathode','Anode','Salt bridge only','Surface of the solution only'],0,'Cations move to the cathode, where reduction occurs.'],
['The mass deposited in electrolysis is proportional to the ___.',['Charge passed','Colour of the solution','Container height only','Atomic number alone'],0,'Faraday’s first law relates deposited mass to total electric charge passed.'],
['A current of 2 A flows for 60 s. What charge passes?',['30 C','62 C','120 C','3600 C'],2,'Q = It = 2 × 60 = 120 C.']
]);
add('Chemistry','Energy Changes and Equilibrium',[
['An exothermic reaction ___.',['Releases heat to its surroundings','Always absorbs heat','Cannot form products','Has no energy change'],0,'Exothermic reactions transfer energy to the surroundings and have negative enthalpy change.'],
['At dynamic equilibrium in a closed system, forward and reverse reactions ___.',['Occur at equal rates','Both stop completely','Have equal reactant and product concentrations necessarily','Proceed only in the forward direction'],0,'The rates are equal, so concentrations remain constant but need not be equal.'],
['Increasing pressure favours the side of a gaseous equilibrium with ___.',['Fewer gas molecules','More gas molecules','More solid particles always','Higher temperature always'],0,'The equilibrium shifts towards the side with fewer moles of gas when those totals differ.']
]);
add('Chemistry','Metals and Non-metals',[
['Which metal reacts readily with cold water?',['Sodium','Copper','Silver','Gold'],0,'Sodium reacts vigorously with cold water to form sodium hydroxide and hydrogen.'],
['Which gas relights a glowing splint?',['Oxygen','Carbon dioxide','Nitrogen','Hydrogen chloride'],0,'Oxygen supports combustion and relights a glowing splint.'],
['Rusting of iron requires the presence of ___.',['Water and oxygen','Nitrogen only','Dry helium','Oil alone'],0,'Water and oxygen are both needed for ordinary rust formation.']
]);
add('Chemistry','Organic Chemistry and Industry',[
['Which functional group is present in ethanol?',['Hydroxyl group','Carboxyl group','Aldehyde group','Amide group'],0,'Ethanol contains the alcohol hydroxyl group, −OH.'],
['Ethene differs from ethane because ethene contains ___.',['A carbon–carbon double bond','A triple bond only','An oxygen atom','No carbon atoms'],0,'Ethene is an alkene with a C=C bond; ethane is a saturated alkane.'],
['The Haber process is used industrially to manufacture ___.',['Ammonia','Ethanol','Sodium chloride','Sulfur dioxide'],0,'The Haber process combines nitrogen and hydrogen to produce ammonia.']
]);
add('Physics','Scalars and Vectors',[
['Which pair consists entirely of scalar quantities?',['Mass and temperature','Force and displacement','Velocity and acceleration','Momentum and force'],0,'Mass and temperature have magnitude but no direction.'],
['Two perpendicular forces of 3 N and 4 N have resultant magnitude ___.',['1 N','5 N','7 N','12 N'],1,'Pythagoras gives √(3² + 4²) = 5 N.'],
['A person walks 3 m east and then 4 m north. The displacement magnitude is ___.',['7 m','1 m','5 m','12 m'],2,'The displacement is the straight-line distance √(3² + 4²) = 5 m.']
]);
add('Physics','Equilibrium and Moments',[
['The moment of a force equals force multiplied by ___.',['Perpendicular distance from pivot to its line of action','Mass of the body','Time taken','Temperature change'],0,'Moment = force × perpendicular lever arm.'],
['A 10 N force acts 0.2 m perpendicular to a pivot. Its moment is ___.',['0.02 N m','2 N m','20 N m','50 N m'],1,'Moment = 10 × 0.2 = 2 N m.'],
['For a body in complete static equilibrium, resultant force and resultant moment are ___.',['Both zero','Both positive','Equal to its mass','Always in opposite directions'],0,'Zero net force prevents translation; zero net moment prevents angular acceleration.']
]);
add('Physics','Simple Machines and Elasticity',[
['A machine lifts a 100 N load using a 25 N effort. Its mechanical advantage is ___.',['0.25','4','75','125'],1,'Mechanical advantage = load/effort = 100/25 = 4.'],
['Within the elastic limit, Hooke’s law states that extension is proportional to ___.',['Applied force','Time','Temperature always','Original mass only'],0,'For a spring in its linear elastic range, F = kx.'],
['A spring with stiffness 200 N/m stretches by 0.05 m. The force is ___.',['4 N','10 N','40 N','100 N'],1,'F = kx = 200 × 0.05 = 10 N.']
]);
add('Physics','Pressure and Fluid Statics',[
['A force of 100 N acts normally on an area of 0.5 m². The pressure is ___.',['50 Pa','100 Pa','200 Pa','500 Pa'],2,'Pressure = force/area = 100/0.5 = 200 Pa.'],
['Liquid pressure at depth h is given by ___.',['ρgh','mgh','½mv²','Fv'],0,'For a uniform liquid, gauge pressure at depth h is density × gravity × depth.'],
['Archimedes’ principle states that upthrust equals the weight of ___.',['Fluid displaced','The entire container','The object in every case','Air above the liquid'],0,'The buoyant force equals the weight of displaced fluid.']
]);
add('Physics','Thermal Physics and Gas Laws',[
['How much heat raises 0.5 kg of water by 10°C? (c = 4200 J kg⁻¹ K⁻¹)',['210 J','2100 J','21000 J','42000 J'],2,'Q = mcΔT = 0.5 × 4200 × 10 = 21000 J.'],
['During melting at constant pressure, a pure substance normally ___.',['Absorbs heat without a temperature increase','Increases temperature continuously','Releases all its internal energy','Remains entirely solid'],0,'Latent heat changes the state while the temperature remains at the melting point.'],
['At constant pressure, a gas occupies 2 L at 300 K. Its volume at 450 K is ___.',['1 L','2 L','3 L','4 L'],2,'Charles’ law gives V₂ = V₁T₂/T₁ = 2 × 450/300 = 3 L.']
]);
add('Physics','Sound Waves',[
['The pitch of sound depends mainly on its ___.',['Frequency','Amplitude','Loudness','Distance travelled only'],0,'Higher frequency is perceived as higher pitch.'],
['An echo returns 0.4 s after a sound is emitted. How far is the reflecting surface if sound speed is 340 m/s?',['34 m','68 m','136 m','170 m'],1,'The sound travels to the surface and back, so distance = 340 × 0.4/2 = 68 m.'],
['Sound cannot travel through a vacuum because ___.',['It requires a material medium','It is always transverse','Its speed is infinite','Its wavelength is zero'],0,'Sound propagates through vibrations of particles in a material medium.']
]);
add('Physics','Optics and Fibre Optics',[
['When light enters glass from air at an oblique angle, it normally bends ___.',['Towards the normal','Away from the normal','Along the boundary always','Back to its source always'],0,'Light slows in glass and bends towards the normal on entering the optically denser medium.'],
['A converging lens has focal length 0.5 m. Its power is ___.',['+0.5 D','+2 D','−2 D','+5 D'],1,'Lens power = 1/f in metres = 1/0.5 = +2 dioptres.'],
['Optical fibres guide light mainly through ___.',['Total internal reflection','Sound diffraction','Electrical conduction','Magnetic induction'],0,'Repeated total internal reflection confines light within the fibre core.']
]);
add('Physics','Electrostatics and Capacitors',[
['Two positive electric charges ___.',['Repel each other','Attract each other','Have no interaction','Always merge'],0,'Like charges repel; unlike charges attract.'],
['A capacitor stores 12 μC at a potential difference of 6 V. Its capacitance is ___.',['2 μF','6 μF','18 μF','72 μF'],0,'C = Q/V = 12 μC/6 V = 2 μF.'],
['Which quantity is stored by a charged capacitor?',['Electrical energy','Nuclear mass','Sound intensity only','Magnetic poles permanently'],0,'A capacitor stores energy in its electric field.']
]);
add('Physics','Magnetism and Electromagnetic Induction',[
['The magnetic field around a straight current-carrying wire has lines shaped as ___.',['Concentric circles','Parallel straight lines along the wire only','Squares','Random disconnected points'],0,'Field lines encircle the wire, with direction given by the right-hand grip rule.'],
['An emf is induced in a coil when its magnetic flux ___.',['Changes','Remains constant always','Is zero and unchanged','Has no relation to time'],0,'Faraday’s law relates induced emf to the rate of change of magnetic flux linkage.'],
['An ideal transformer has 200 primary turns and 100 secondary turns. For 240 V input, output voltage is ___.',['60 V','120 V','240 V','480 V'],1,'Vₛ/Vₚ = Nₛ/Nₚ; Vₛ = 240 × 100/200 = 120 V.']
]);
add('Physics','Modern Physics and Electronics',[
['Photoelectric emission is the release of electrons from a surface by ___.',['Light of sufficient frequency','Sound of any frequency','Cooling alone','Compression alone'],0,'Photons must supply at least the work function for photoelectric emission.'],
['A semiconductor diode is commonly used for ___.',['Rectification','Measuring mass','Storing water','Producing mechanical leverage'],0,'A diode conducts mainly in one direction and can rectify alternating current.'],
['Nuclear fusion involves ___.',['Combining light nuclei to form a heavier nucleus','Splitting a heavy nucleus only','Joining whole molecules without nuclear change','Removing electrons from a metal only'],0,'Fusion combines light nuclei and can release energy.']
]);
add('Use of English','Synonyms',[
['Choose the word nearest in meaning to meticulous.',['Careful','Reckless','Noisy','Generous'],0,'Meticulous means paying very close attention to detail.'],
['Choose the word nearest in meaning to commence.',['Finish','Begin','Refuse','Delay'],1,'Commence means begin or start.'],
['Choose the word nearest in meaning to candid.',['Secretive','Frank','Confused','Cruel'],1,'Candid means honest and frank in expression.']
]);
add('Use of English','Antonyms',[
['Choose the opposite of temporary.',['Brief','Permanent','Occasional','Short-lived'],1,'Permanent is the opposite of temporary.'],
['Choose the opposite of hostile.',['Friendly','Aggressive','Angry','Unkind'],0,'Friendly contrasts with hostile or unfriendly.'],
['Choose the opposite of expand.',['Extend','Enlarge','Contract','Develop'],2,'Contract means become smaller, the opposite of expand.']
]);
add('Use of English','Concord and Agreement',[
['Each of the candidates ___ a registration slip.',['have','has','are having','were having'],1,'Each is singular and takes has.'],
['The quality of the products ___ improved.',['have','has','are','were'],1,'The subject is the singular noun quality, not products.'],
['Neither Ada nor her brother ___ available.',['are','were','is','have been'],2,'Both subjects are singular; is agrees with the nearer subject, brother.']
]);
add('Use of English','Tenses and Conditionals',[
['By the time we arrived, the bus ___.',['has left','had left','leaves','will leave'],1,'Past perfect marks an event completed before another past event.'],
['If she studies regularly, she ___ improve.',['will','would have','had','has'],0,'A first conditional commonly uses present simple in the if-clause and will in the main clause.'],
['I wish I ___ more time to practise.',['have','had','will have','am having'],1,'Had expresses an unreal or wished-for present situation after I wish.']
]);
add('Use of English','Word Classes and Clauses',[
['In “She spoke quietly”, quietly is an ___.',['Adjective','Adverb','Article','Pronoun'],1,'Quietly modifies the verb spoke and is an adverb.'],
['In “The book that I borrowed is useful”, “that I borrowed” is a ___.',['Relative clause','Main clause','Single adverb','Coordinating conjunction'],0,'The relative clause modifies the noun book.'],
['Which sentence contains an imperative?',['Close the door.','The door is closed.','Did she close the door?','She closed the door.'],0,'An imperative gives a command, instruction or request.']
]);
add('Use of English','Idioms and Figurative Language',[
['To be “in hot water” means to be ___.',['In trouble','On holiday','Very wealthy','Asleep'],0,'The idiom means facing trouble or difficulty.'],
['“The classroom was a beehive of activity” uses ___.',['Metaphor','Literal description of bees','A question tag','An antonym'],0,'The classroom is directly compared to a beehive without like or as.'],
['To “make ends meet” means to ___.',['Manage income to cover expenses','Finish a race','Join two ropes only','Spend without limits'],0,'The idiom describes having enough money for necessary expenses.']
]);
add('Use of English','Spelling and Punctuation',[
['Which spelling is correct for the word meaning not joined?',['Seperate','Separate','Seperete','Separete'],1,'The correct spelling is separate.'],
['Which sentence correctly punctuates a direct question?',['Where are you going.','Where are you going?','Where are you going,','Where are you going;'],1,'A direct question ends with a question mark.'],
['Which phrase means books belonging to several students?',["The students’ books","The student’s books","The students books’","The students book’s"],0,'The plural possessive of students places the apostrophe after s.']
]);
add('Use of English','Vowels, Consonants and Rhymes',[
['Which word has the same initial consonant sound as phone?',['Fan','Pan','Van','Tin'],0,'Phone and fan begin with /f/.'],
['Which pair consists of homophones in standard British English?',['Sea and see','Cat and cut','Food and foot','Ship and sheep'],0,'Sea and see are both pronounced /siː/.'],
['Which word rhymes with day?',['Say','Die','Dough','Do'],0,'Day and say share the ending /eɪ/.']
]);
add('Use of English','Word and Emphatic Stress',[
['Which word normally has primary stress on its first syllable?',['TAble','beGIN','reLAX','aRRIVE'],0,'Table is stressed on the first syllable; the other words are stressed on the second.'],
['In “ADA bought the book”, stressing ADA contrasts Ada with ___.',['Another possible buyer','A different object','A different action','A different time'],0,'Emphasis on the subject identifies who bought the book.'],
['In “Ada bought the BOOK”, stressing BOOK contrasts the book with ___.',['Another item','Another buyer','Another tense','Another pronunciation of Ada'],0,'Emphasis on the object contrasts it with other possible purchases.']
]);
add('Use of English','Summary and Cloze Tests',[
['Read: “The school repaired leaking taps and collected rainwater. These steps reduced waste and improved the water supply.” Choose the best summary.',['The school improved water management','The school stopped using water','The school built a new library','Rainwater damaged all the taps'],0,'The summary combines reduced waste and improved supply without adding new claims.'],
['Complete the sentence: “The students prepared carefully ___ the examination.”',['for','of','with','at'],0,'The standard construction is prepare for an examination.'],
['Complete the sentence: “Despite the delay, the team ___ the work on time.”',['completed','completing','completion','complete yesterday'],0,'Completed is the past-tense verb required for the finished event.']
]);
let nextId=1001;
export default groups.flatMap(({subject,topic,rows})=>rows.map(([q,options,answer,explanation])=>{
 const id=nextId++,shift=(id-1001)%4;
 const rotated=options.map((_,i)=>options[(i+shift)%4]);
 return {id,subject,topic,q,options:rotated,answer:(answer-shift+4)%4,explanation,source:'Original practice • uploaded syllabus'};
}));
