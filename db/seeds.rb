# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)'
puts '📃 Seeding data...'
User.create(username: 'rywitz', email: 'rywitz', password: '1234', password_confirmation: '1234')
User.create(username: 'pizzaMan', email: 'pizzaMan@fakemail.com', password: '1234', password_confirmation: '1234')
User.create(username: 'mr.softee', email: 'mr.softee@fakemail.com', password: '1234', password_confirmation: '1234')
User.create(username: 'celia', email: 'celia@fakemail.com', password: '1234', password_confirmation: '1234')
User.create(username: 'person5', email: 'person5@fakemail.com', password: '1234', password_confirmation: '1234')

Shul.create(name: "B'nai Abraham", street_address: '527 Lombard St', city: 'Philadelphia', state: 'PA',
            postal_code: '19147')
Shul.create(name: 'Mamash', street_address: '1601-03 Lombard Street', city: 'Philadelphia', state: 'PA',
            postal_code: '19146')
Shul.create(name: 'Shtiebl', street_address: '1321 South Juniper Street', city: 'Philadelphia', state: 'PA',
            postal_code: '19147')

Service.create(name: 'Shacharit')
Service.create(name: 'Mincha')
Service.create(name: 'Maariv')
puts 'Seeded'
