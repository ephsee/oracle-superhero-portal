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

batman = Hero.create(name: "Batman", alter_ego: "Bruce Wayne", base: "The Bat Cave", image: "https://i.pinimg.com/originals/d9/7a/ba/d97abaa3ecc0d3aeb48fe80bd0538557.jpg", password: "vengeance")
superman = Hero.create(name: "Superman", alter_ego: "Clark Kent", base: "The Fortress of Solitude", image: "https://cdn.vox-cdn.com/thumbor/trjwyjpHgUzhfnfLIVTJ7WsFpSE=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22802887/IMG_DE272BF718E8_1.jpeg", password: "cryptonight")
wonderWoman = Hero.create(name: "Wonder Woman", alter_ego: "Diana Prince", base: "Themyscira", image: "https://static.wikia.nocookie.net/marvel_dc/images/c/cc/Wonder_Woman_Vol_5_4_Textless.jpg/revision/latest/scale-to-width-down/688?cb=20160810132845", password: "lasso")

puts 'seeding villains'
# Villains
Villain.create(name: 'Joker', alter_ego: 'Unknown', at_large: true, most_wanted: rand(1..10), notes:"Insane", image:"https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/7538232-three-jokers-1-cvr-fnl-1583776056592.jpg", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Catwoman', alter_ego: 'Selina Kyle', at_large: true, most_wanted: rand(1..10), notes:"A Cat", image:"https://static.wikia.nocookie.net/marvel_dc/images/7/7a/Catwoman_0007.jpg/revision/latest?cb=20110523151257", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Killer Moth', alter_ego: 'Drury Walker', at_large: false, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://comicvine.gamespot.com/a/uploads/scale_small/12/124259/8117226-killermoth.jpg", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Carmine Falcone', alter_ego: 'N/A', at_large: false, most_wanted: rand(1..10), notes:"El Rata Alada", image:"https://comicvine.gamespot.com/a/uploads/scale_small/6/66303/3936415-screen%20shot%202014-07-03%20at%209.03.57%20pm.jpg", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Penguin', alter_ego: 'Oswald Cobblepot', at_large: true, most_wanted: rand(1..10), notes:"LA RATA ALADA!!!", image:"https://sportshub.cbsistatic.com/i/2021/10/28/fede2998-5239-465c-8362-17a78d7a0c4e/danny-devito-penguin-comic.jpg", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Red Hood', alter_ego: 'Jason Todd', at_large: true, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://upload.wikimedia.org/wikipedia/en/8/85/RedHood-2016.jpg", hero_id: batman.id, location_id: gotham.id )
Villain.create(name: 'Salvatore Maroni', alter_ego: 'N/A', at_large: false, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://static.wikia.nocookie.net/batman/images/e/e0/Sal_Maroni.jpg/revision/latest?cb=20100409225251", hero_id: batman.id, location_id: gotham.id )

# Superman
Villain.create(name: 'Lex Luthor', alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://www.dccomics.com/sites/default/files/field/image/LexSupergirl_blog_5bee343c50f2e5.09083928.jpg", hero_id: superman.id, location_id: metropolis.id )
Villain.create(name: 'Toyman', alter_ego: 'Winslow Scott', at_large: false, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://comicvine.gamespot.com/a/uploads/scale_medium/0/8190/311623-111211-toyman.jpg", hero_id: superman.id, location_id: metropolis.id )
Villain.create(name: 'Metallo', alter_ego: 'John Corben', at_large: false, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://i.pinimg.com/474x/59/28/4a/59284a273dd29ccb2235c2a43729a94d.jpg", hero_id: superman.id, location_id: metropolis.id )
Villain.create(name: "Whisper A'Daire", alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://comicvine.gamespot.com/a/uploads/original/11144/111442157/8307377-whispera%E2%80%99daire001.jpg", hero_id: superman.id, location_id: metropolis.id )
Villain.create(name: 'Darkseid', alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), notes:"Big Bad", image:"https://www.liveabout.com/thmb/_OlrxZhFxW_egUPgNKX1_tF1ODc=/1075x836/filters:no_upscale():max_bytes(150000):strip_icc()/when-dc-meets-marvel-avengers-justice-league-assemble-605392-56a8ede83df78cf772a206a9.jpg", hero_id: superman.id, location_id: apokolypse.id )
# Wonder Woman
Villain.create(name: 'Cheetah', alter_ego: 'Barbara Ann Minerva', at_large: true, most_wanted: rand(1..10), notes:"Also a Cat", image:"https://static.wikia.nocookie.net/marvel_dc/images/b/b2/DC%27s_Year_of_the_Villain_Special_Vol_1_1_Textless_Cheetah_Variant.jpg/revision/latest/scale-to-width-down/658?cb=20190518135958", hero_id: wonderWoman.id, location_id: dc.id )
Villain.create(name: 'Maxwell Lord', alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://www.previewsworld.com/SiteImage/MainImage/STL152569.jpg", hero_id: wonderWoman.id, location_id: dc.id )
Villain.create(name: 'Giganta', alter_ego: 'Doris Zuell', at_large: false, most_wanted: rand(1..10), notes:"bad or real bad", image:"https://static.wikia.nocookie.net/wonderwoman/images/a/a5/Giganta_-_New_52.jpg/revision/latest?cb=20140416202228", hero_id: wonderWoman.id, location_id: dc.id )
Villain.create(name: 'Queen of Fables', alter_ego: 'Tsarita', at_large: true, most_wanted: rand(1..10), notes:"Brutal", image:"https://kristenbrand.files.wordpress.com/2020/05/qof4.jpg", hero_id: wonderWoman.id, location_id: dc.id )

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

puts 'seeding allies'
#Allies
Ally.create(name: "Robin", alter_ego: "Damien Wayne", city: "Gotham City", image: "https://upload.wikimedia.org/wikipedia/en/e/ee/Robin_%28Damian_Wayne%29.png", hero_id: batman.id, location_id: gotham.id)
Ally.create(name: "Red Robin", alter_ego: "Tim Drake", city: "Gotham City", image: "https://qph.fs.quoracdn.net/main-qimg-2a3ea44dc8b0252a98a5ca5d65edf9b1-pjlq", hero_id: batman.id, location_id: gotham.id)
Ally.create(name: "NightWing", alter_ego: "Dick Grayson", city: "Gotham City", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLb2lluO-spG4CQcSclM3U_LAn-dxDTM7Z2Q&usqp=CAU", hero_id: batman.id, location_id: gotham.id)
Ally.create(name: "Oracle", alter_ego: "Barbara Gordon", city: "Gotham City", image: "https://miro.medium.com/max/1400/0*UU602gpgWg8vecax.", hero_id: batman.id, location_id: gotham.id)
Ally.create(name: "Batgirl", alter_ego: "Cassandra Cain", city: "Gotham City", image: "https://static.wikia.nocookie.net/batman/images/6/64/250px-Knightalone.jpg/revision/latest?cb=20080523235258", hero_id: batman.id, location_id: gotham.id)