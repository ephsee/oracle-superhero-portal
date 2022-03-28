puts 'seeding locations...'
# Locations
gotham = Location.create(name: 'Gotham City', image:"pic goes here")
metropolis = Location.create(name: 'Metropolis', image:"pic goes here")
dc = Location.create(name: 'Washington D.C.', image:"pic goes here")
apokolypse = Location.create(name: 'Apokolypse', image:"pic goes here")
puts 'seeding heroes...'
# Heroes
batman = Hero.create(name: "Batman", alter_ego: "Bruce Wayne", base: "The Bat Cave", image: "pic goes here", password: "vengeance")
superman = Hero.create(name: "Superman", alter_ego: "Clark Kent", base: "The Fortress of Solitude", image: "pic goes here", password: "cryptonight")
wonderWoman = Hero.create(name: "Wonder Woman", alter_ego: "Diana of Themyscira", base: "Themyscira", image: "pic goes here", password: "lasso")

puts 'seeding villains'
# Batman
Villain.create(name: 'Joker', alter_ego: 'Unknown', at_large: true, most_wanted: rand(1..10), notes:"Insane", image:"pic goes here", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Catwoman', alter_ego: 'Selina Kyle', at_large: true, most_wanted: rand(1..10), notes:"A Cat", image:"pic goes here", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Killer Moth', alter_ego: 'Drury Walker', at_large: false, most_wanted: rand(1..10), notes:"bad or real bad", image:"pic goes here", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Carmine Falcone', alter_ego: 'N/A', at_large: false, most_wanted: rand(1..10), notes:"El Rata Alada", image:"pic goes here", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Penguin', alter_ego: 'Oswald Cobblepot', at_large: true, most_wanted: rand(1..10), notes:"LA RATA ALADA!!!", image:"pic goes here", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Red Hood', alter_ego: 'Jason Todd', at_large: true, most_wanted: rand(1..10), notes:"bad or real bad", image:"pic goes here", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Salvatore Maroni', alter_ego: 'N/A', at_large: false, most_wanted: rand(1..10), notes:"bad or real bad", image:"pic goes here", hero_id: batman.id, location_id: gotham.id )
# Superman
Villain.create(name: 'Lex Luthor', alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), notes:"bad or real bad", image:"pic goes here", hero_id: superman.id, location_id: metropolis.id )
Villain.create(name: 'Toyman', alter_ego: 'Winslow Scott', at_large: false, most_wanted: rand(1..10), notes:"bad or real bad", image:"pic goes here", hero_id: superman.id, location_id: metropolis.id )
Villain.create(name: 'Metallo', alter_ego: 'John Corben', at_large: false, most_wanted: rand(1..10), notes:"bad or real bad", image:"pic goes here", hero_id: superman.id, location_id: metropolis.id )
Villain.create(name: "Whisper A'Daire", alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), notes:"bad or real bad", image:"pic goes here", hero_id: superman.id, location_id: metropolis.id )
Villain.create(name: 'Darkseid', alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), notes:"Big Bad", image:"pic goes here", hero_id: superman.id, location_id: apokolypse.id )
# Wonder Woman
Villain.create(name: 'Cheetah', alter_ego: 'Barbara Ann Minerva', at_large: true, most_wanted: rand(1..10), notes:"Also a Cat", image:"pic goes here", hero_id: wonderWoman.id, location_id: dc.id )
Villain.create(name: 'Maxwell Lord', alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), notes:"bad or real bad", image:"pic goes here", hero_id: wonderWoman.id, location_id: dc.id )
Villain.create(name: 'Giganta', alter_ego: 'Doris Zuell', at_large: false, most_wanted: rand(1..10), notes:"bad or real bad", image:"pic goes here", hero_id: wonderWoman.id, location_id: dc.id )
Villain.create(name: 'Queen of Fables', alter_ego: 'Tsarita', at_large: true, most_wanted: rand(1..10), notes:"Brutal", image:"pic goes here", hero_id: wonderWoman.id, location_id: dc.id )

puts 'seeding gadgets...'
# Batman
Gadget.create(item_name: 'Forensics Kit', quantity: 1, image: 'pic goes here', hero_id: batman.id)
Gadget.create(item_name: 'Batarang', quantity: 15, image: 'pic goes here', hero_id: batman.id)
Gadget.create(item_name: 'Grappling Gun', quantity: 1, image: 'pic goes here', hero_id: batman.id)
Gadget.create(item_name: 'Smoke Capsules', quantity: 20, image: 'pic goes here', hero_id: batman.id)
Gadget.create(item_name: 'First Aid Kit', quantity: 1, image: 'pic goes here', hero_id: batman.id)
Gadget.create(item_name: 'Tear Gas Pellets', quantity: 15, image: 'pic goes here', hero_id: batman.id)
Gadget.create(item_name: 'Laser Torch', quantity: 1, image: 'pic goes here', hero_id: batman.id)
Gadget.create(item_name: 'Handcuffs', quantity: 5, image: 'pic goes here', hero_id: batman.id)
Gadget.create(item_name: 'Rebreather', quantity: 1, image: 'pic goes here', hero_id: batman.id)
Gadget.create(item_name: 'Trackers', quantity: 6, image: 'pic goes here', hero_id: batman.id)
Gadget.create(item_name: 'Taser', quantity: 1, image: 'pic goes here', hero_id: batman.id)
# Superman
Gadget.create(item_name: 'These Hands', quantity: 2, image: 'pic goes here', hero_id: superman.id)
# Wonder Woman
Gadget.create(item_name: 'Lasso of Truth', quantity: 1, image: 'pic goes here', hero_id: wonderWoman.id)
Gadget.create(item_name: 'Bracelets of Submission', quantity: 2, image: 'pic goes here', hero_id: wonderWoman.id)
Gadget.create(item_name: 'Sword of Athena', quantity: 1, image: 'pic goes here', hero_id: wonderWoman.id)