# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Clearing Database'

Appointment.destroy_all
Client.destroy_all
Lawyer.destroy_all


puts 'Database Cleared'


puts 'Creating clients'
20.times {Client.create(legal_name: Faker::Name.unique.name,
                        username: Faker::Internet.username(specifier: 5..10),
                        email: Faker::Internet.unique.free_email,
                        date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 165),
                        #<Date: 1986-03-28
                        location: Faker::Address.full_address)}
puts 'Cliets Created '


puts 'Creating lawyers'

specialties = ["Criminal", "Family", "Immigration", "Tax", "Real Estate"]

firms = ["Cravath, Swaine & Moore LLP", "Wachtell, Lipton, Rosen & Katz", "Skadden", "Davis Polk & Wardwell LLP", "Latham & Watkins", "Sullivan & Cromwell LLP", "Kirkland & Ellis", "Simpson Thacher & Bartlett LLP", "Paul, Weiss, Rifkind, Wharton & Garrison LLP", "Gibson Dunn", "Kilpatrick Townsend", "Faegre Drinker", "Hunton Andrews Kurth LLP", "Polsinelli PC", "Blank Rome LLP"]

states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

20.times {Lawyer.create(legal_name: Faker::Name.unique.name,
                        username: Faker::Internet.unique.username(specifier: 5..10),
                        email: Faker::Internet.unique.free_email,
                        date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 165),
                        location: Faker::Address.full_address, 
                        specialty: specialties.sample,
                        alma_mater: Faker::University.name,
                        board_certification: states.sample,
                        law_firm: firms.sample,
                        years_in_practice: rand(1..100), 
                        )}

puts "Lawyers Created"


puts "Creating Appointments"

20.times {Appointment.create(date: Faker::Name.unique.name,
                        time: Faker::Time.between_dates(from: Date.today - 5, to: Date.today + 5, period: :afternoon, format: :default),
                        # #=> "Fri, 19 Oct 2018 15:17:46 -0500"
                        description: Faker::TvShows::MichaelScott.quote,
                        client: Client.all.sample,
                        lawyer: Lawyer.all.sample)}

puts "Appointments created"

puts "Done Seeding"

