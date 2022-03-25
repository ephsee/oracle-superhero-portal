# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# 10.times do
#     Hero.create(name: Faker::Name.name, alter_ego: Faker::Name.name, base: Faker::Nation.capital_city, image: "pic goes here")
# end

# 10.times do
#     Villain.create(name: Faker::Name.name, alter_ego: Faker::Name.name, at_large: false, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
# end

# 10.times do
#     Location.create(name: Faker::Nation.capital_city, villain_id: Villain.all.sample.id)
# end

# 10.times do
#     Gadget.create(item_name:"", quantity:rand(1..10), hero_id: Hero.all.sample.id, image:"pic goes here")
# end

# 10.times do
#     Ally.create(name: Faker::Name.name, affiliation:"good or bad", image:"pic goes here", hero_id: Hero.all.sample.id)
# end
puts 'seeding locations...'
# Locations
Location.create(name: 'Gotham City', villain_id: Villain.all.sample.id)
Location.create(name: 'Metropolis', villain_id: Villain.all.sample.id)
Location.create(name: 'Washington D.C.', villain_id: Villain.all.sample.id)
Location.create(name: 'Apokolypse', villain_id: Villain.all.sample.id)
puts 'seeding heroes...'
# Heroes
Hero.create(name: "Batman", alter_ego: "Bruce Wayne", base: Faker::Nation.capital_city, image: "pic goes here")
Hero.create(name: "Superman", alter_ego: "Clark Kent", base: Faker::Nation.capital_city, image: "pic goes here")
Hero.create(name: "Wonder Woman", alter_ego: "Diana of Themyscira", base: Faker::Nation.capital_city, image: "pic goes here")

puts 'seeding villains'
# Villains
Villain.create(name: 'Joker', alter_ego: 'Unknown', at_large: true, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
Villain.create(name: 'Catwoman', alter_ego: 'Selina Kyle', at_large: true, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
Villain.create(name: 'Killer Moth', alter_ego: 'Drury Walker', at_large: false, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
Villain.create(name: 'Carmine Falcone', alter_ego: 'N/A', at_large: false, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
Villain.create(name: 'Penguin', alter_ego: 'Oswald Cobblepot', at_large: true, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
Villain.create(name: 'Red Hood', alter_ego: 'Jason Todd', at_large: true, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
Villain.create(name: 'Salvatore Maroni', alter_ego: 'N/A', at_large: false, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
Villain.create(name: 'Darkseid', alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
# Superman
Villain.create(name: 'Lex Luthor', alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
Villain.create(name: 'Toyman', alter_ego: 'Winslow Scott', at_large: false, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
Villain.create(name: 'Metallo', alter_ego: 'John Corben', at_large: false, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
Villain.create(name: "Whisper A'Daire", alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
Villain.create(name: 'Darkseid', alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
# Wonder Woman
Villain.create(name: 'Cheetah', alter_ego: 'Barbara Ann Minerva', at_large: true, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
Villain.create(name: 'Maxwell Lord', alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
Villain.create(name: 'Giganta', alter_ego: 'Doris Zuell', at_large: false, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
Villain.create(name: 'Queen of Fables', alter_ego: 'Tsarita', at_large: true, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )
Villain.create(name: 'Darkseid', alter_ego: 'N/A', at_large: true, most_wanted: rand(1..10), alignment:"bad or real bad", image:"pic goes here", hero_id: Hero.all.sample.id )