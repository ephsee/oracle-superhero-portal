# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
10.times do
    Hero.create(name: Faker::Name.name, alter_ego: Faker::Name.name, base: Faker::Name.name, image: "pic goes here")
end

10.times do
    Villain.create(name: Faker::Name.name, alter_ego: Faker::Name.name, at_large: false, most_wanted: rand(1..10), alignment:"bad bad", image:"pic goes here", hero_id: Hero.all.sample.id )
end

10.times do
    Location.create(name: Faker::Nation.capital_city, villain_id: Villain.all.sample.id)
end

10.times do
    Gadget.create(item_name:"", quantity:rand(1..10), hero_id: Hero.all.sample.id, image:"pic goes here")
end

10.times do
    Ally.create(name: Faker::Name.name, affiliation:"good good", image:"pic goes here", hero_id: Hero.all.sample.id)
end