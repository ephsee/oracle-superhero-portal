puts 'seeding locations...'
# Locations
gotham = Location.create(name: 'Gotham City', image:"pic goes here")
metropolis = Location.create(name: 'Metropolis', image:"pic goes here")
dc = Location.create(name: 'Washington D.C.', image:"pic goes here")
apokolypse = Location.create(name: 'Apokolypse', image:"pic goes here")
puts 'seeding heroes...'
# Heroes

# i think we have image rights issues
# "https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg/revision/latest?cb=20200502132734" - old
# "https://i.pinimg.com/originals/d9/7a/ba/d97abaa3ecc0d3aeb48fe80bd0538557.jpg" - new

batman = Hero.create(name: "Batman", alter_ego: "Bruce Wayne", base: "The Bat Cave", image: "https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651718/Oracle/Batman_mw5cz3.jpg", password: "vengeance")
superman = Hero.create(name: "Superman", alter_ego: "Clark Kent", base: "The Fortress of Solitude", image: "https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651720/Oracle/Superman_ae3nau.jpg", password: "cryptonight")
wonderWoman = Hero.create(name: "Wonder Woman", alter_ego: "Diana Prince", base: "Themyscira", image: "https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651719/Oracle/WonderWoman_x2om5w.jpg", password: "lasso")

puts 'seeding villains'
# Villains
Villain.create(name: 'Joker', alter_ego: 'Unknown', at_large: true, most_wanted: rand(1..10), notes:"Insane", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651722/Oracle/Villains/Joker_cd87ny.jpg", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Catwoman', alter_ego: 'Selina Kyle', at_large: true, most_wanted: rand(1..10), notes:"A Cat", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651723/Oracle/Villains/Catwoman_uum1yz.jpg", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Killer Moth', alter_ego: 'Drury Walker', at_large: false, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651722/Oracle/Villains/KillerMoth_obrfbc.jpg", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Carmine Falcone', alter_ego: 'N/A', at_large: false, most_wanted: rand(1..10), notes:"El Rata Alada", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651721/Oracle/Villains/Falcone_aeknvg.jpg", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Penguin', alter_ego: 'Oswald Cobblepot', at_large: true, most_wanted: rand(1..10), notes:"LA RATA ALADA!!!", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651722/Oracle/Villains/Penguin_rxargc.jpg", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Red Hood', alter_ego: 'Jason Todd', at_large: true, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651722/Oracle/Villains/Red_Hood_iskjso.jpg", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Salvatore Maroni', alter_ego: 'N/A', at_large: false, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651720/Oracle/Villains/Maroni_aenmrp.jpg", hero_id: batman.id, location_id: gotham.id )

# Superman
Villain.create(name: 'Lex Luthor', alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651723/Oracle/Villains/LexLuthor_flqngn.jpg", hero_id: superman.id, location_id: metropolis.id )
Villain.create(name: 'Toyman', alter_ego: 'Winslow Scott', at_large: false, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651724/Oracle/Villains/ToyMaker_qmej6z.jpg", hero_id: superman.id, location_id: metropolis.id )
Villain.create(name: 'Metallo', alter_ego: 'John Corben', at_large: false, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651723/Oracle/Villains/Metallo_olofm6.jpg", hero_id: superman.id, location_id: metropolis.id )
Villain.create(name: "Whisper A'Daire", alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651723/Oracle/Villains/Whisper_zzwhph.jpg", hero_id: superman.id, location_id: metropolis.id )
Villain.create(name: 'Darkseid', alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), notes:"Big Bad", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651721/Oracle/Villains/Darkseid_krhuyu.jpg", hero_id: superman.id, location_id: apokolypse.id )
# Wonder Woman
Villain.create(name: 'Cheetah', alter_ego: 'Barbara Ann Minerva', at_large: true, most_wanted: rand(1..10), notes:"Also a Cat", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651722/Oracle/Villains/Cheetah_t4qsik.jpg", hero_id: wonderWoman.id, location_id: dc.id )
Villain.create(name: 'Maxwell Lord', alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651722/Oracle/Villains/MaxwellLord_rx8vvx.jpg", hero_id: wonderWoman.id, location_id: dc.id )
Villain.create(name: 'Giganta', alter_ego: 'Doris Zuell', at_large: false, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651720/Oracle/Villains/Giganta_lnbk1z.jpg", hero_id: wonderWoman.id, location_id: dc.id )
Villain.create(name: 'Queen of Fables', alter_ego: 'Tsarita', at_large: true, most_wanted: rand(1..10), notes:"Brutal", image:"https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651721/Oracle/Villains/QueenOfFables_kavttq.jpg", hero_id: wonderWoman.id, location_id: dc.id )

puts 'seeding gadgets...'
# Batman
Gadget.create(item_name: 'Forensics Kit', quantity: 1, image: 'https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648653663/Oracle/Gadgets/Forensic_ku3ntn.jpg', hero_id: batman.id)
Gadget.create(item_name: 'Batarang', quantity: 15, image: 'https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648653662/Oracle/Gadgets/Batarang_euxddn.jpg', hero_id: batman.id)
Gadget.create(item_name: 'Grappling Gun', quantity: 1, image: 'https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648653662/Oracle/Gadgets/GrappleGun_jwinih.jpg', hero_id: batman.id)
Gadget.create(item_name: 'Smoke Capsules', quantity: 20, image: 'https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648653663/Oracle/Gadgets/SmokeCap_nkgird.jpg', hero_id: batman.id)
Gadget.create(item_name: 'First Aid Kit', quantity: 1, image: 'https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648653662/Oracle/Gadgets/FirstAid_dwqccf.jpg', hero_id: batman.id)
Gadget.create(item_name: 'Tear Gas Pellets', quantity: 15, image: 'https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648653664/Oracle/Gadgets/GasPellets_vsrih8.jpg', hero_id: batman.id)
Gadget.create(item_name: 'Laser Torch', quantity: 1, image: 'https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648653664/Oracle/Gadgets/Torch_kzeqvm.jpg', hero_id: batman.id)
Gadget.create(item_name: 'Handcuffs', quantity: 5, image: 'https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648653662/Oracle/Gadgets/BatCuff_jmvvcc.jpg', hero_id: batman.id)
Gadget.create(item_name: 'Rebreather', quantity: 1, image: 'https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648653663/Oracle/Gadgets/Rebreather_mwrx4q.jpg', hero_id: batman.id)
Gadget.create(item_name: 'Trackers', quantity: 6, image: 'https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648653664/Oracle/Gadgets/Tracker_n7oesg.jpg', hero_id: batman.id)
Gadget.create(item_name: 'Taser', quantity: 1, image: 'https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648653663/Oracle/Gadgets/Taser_crkixx.jpg', hero_id: batman.id)
# Superman
Gadget.create(item_name: 'These Hands', quantity: 2, image: 'https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648653664/Oracle/Gadgets/TheseFists_d3c2cf.jpg', hero_id: superman.id)
# Wonder Woman
Gadget.create(item_name: 'Lasso of Truth', quantity: 1, image: 'https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648653664/Oracle/Gadgets/LassoOfTruth_rigwes.jpg', hero_id: wonderWoman.id)
Gadget.create(item_name: 'Bracelets of Submission', quantity: 2, image: 'https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648653663/Oracle/Gadgets/BraceletsSubm_k99klo.jpg', hero_id: wonderWoman.id)
Gadget.create(item_name: 'Sword of Athena', quantity: 1, image: 'https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648653663/Oracle/Gadgets/SwordAthena_nemztd.jpg', hero_id: wonderWoman.id)

puts 'seeding allies'
#Allies
Ally.create(name: "Robin", alter_ego: "Damien Wayne", city: "Gotham City", image: "https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651718/Oracle/Allies/DamienWayne_m2zby7.jpg", hero_id: batman.id, location_id: gotham.id)
Ally.create(name: "Red Robin", alter_ego: "Tim Drake", city: "Gotham City", image: "https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651719/Oracle/Allies/RedRobin_iyrnmh.jpg", hero_id: batman.id, location_id: gotham.id)
Ally.create(name: "NightWing", alter_ego: "Dick Grayson", city: "Gotham City", image: "https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651718/Oracle/Allies/NightWing_xttbp9.jpg", hero_id: batman.id, location_id: gotham.id)
Ally.create(name: "Oracle", alter_ego: "Barbara Gordon", city: "Gotham City", image: "https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651720/Oracle/Allies/Oracle_u1jmwt.jpg", hero_id: batman.id, location_id: gotham.id)
Ally.create(name: "Batgirl", alter_ego: "Cassandra Cain", city: "Gotham City", image: "https://res.cloudinary.com/dvhmsjuqe/image/upload/v1648651719/Oracle/Allies/Batgirl_zgr1yz.jpg", hero_id: batman.id, location_id: gotham.id)