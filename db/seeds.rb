# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)'
puts '📃 Seeding data...'
user_1 = User.create!(username: 'rywitz', email: 'rywitz@fakemail.com', password: '1234', password_confirmation: '1234')
user_2 = User.create!(username: 'pizzaMan', email: 'pizzaMan@fakemail.com', password: '1234',
                      password_confirmation: '1234')
user_3 = User.create!(username: 'mr.softee', email: 'mr.softee@fakemail.com', password: '1234',
                      password_confirmation: '1234')
user_4 = User.create!(username: 'celia', email: 'celia@fakemail.com', password: '1234', password_confirmation: '1234')
user_5 = User.create!(username: 'person5', email: 'person5@fakemail.com', password: '1234',
                      password_confirmation: '1234')

Shul.create!(name: "B'nai Abraham", street_address: '527 Lombard St', city: 'Philadelphia', state: 'PA',
             postal_code: '19147')
Shul.create!(name: 'Mamash', street_address: '1601-03 Lombard Street', city: 'Philadelphia', state: 'PA',
             postal_code: '19146')
Shul.create!(name: 'Shtiebl', street_address: '1321 South Juniper Street', city: 'Philadelphia', state: 'PA',
             postal_code: '19147')

Service.create!(name: 'Shacharit', shul_id: 1, date: 8/31/23, time: 7:15)
Service.create!(name: 'Mincha', shul_id: 1, date: 8/31/23, time: 3:30)
Service.create!(name: 'Maariv', shul_id: 1, date: 8/31/23, time: '8:00pm')

user_1.user_services.create(service_id: 1)
# user_3.user_services.create(service_id: 1)
# user_2.user_services.create(service_id: 2)
# user_4.user_services.create(service_id: 2)
# user_5.user_services.create(service_id: 1)
puts 'Seeded'
