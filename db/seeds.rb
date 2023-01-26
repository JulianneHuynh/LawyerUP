# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Clearing Database'

Appointment.destroy_all
User.destroy_all
Message.destroy_all

puts 'Database Cleared'

puts 'Creating users'

specialties = ["Criminal", "Family", "Labour", "Immigration", "Health Care", "Tax", "Coporate", "Business", "Administrative", "International", "Enviromental", "Constitutional", "Entertainment", "Insurance", "Property","Patent"]

firms = ["Cravath, Swaine & Moore LLP", "Wachtell, Lipton, Rosen & Katz", "Skadden", "Davis Polk & Wardwell LLP", "Latham & Watkins", "Sullivan & Cromwell LLP", "Kirkland & Ellis", "Simpson Thacher & Bartlett LLP", "
  Paul, Weiss, Rifkind, Wharton & Garrison LLP", "Gibson Dunn", "Kilpatrick Townsend", "Faegre Drinker", "Hunton Andrews Kurth LLP", "Polsinelli PC", "Blank Rome LLP"]

states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

boolean = [true, false] 

20.times {User.create(name: Faker::Name.unique.name,
                      email: Faker::Internet.unique.free_email,
                      date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 70),
                      address: Faker::Address.full_address, 
                      # :city_state
                      profile_picture: Faker::Avatar.image,
                      is_lawyer: boolean.sample,
                      specialty: specialties.sample,
                      law_firm: firms.sample,
                      years_in_practice: rand(1..50),
                      alma_mater: Faker::University.name,
                      board_certification: states.sample, 
                      password_digest: states.sample
                      )}

puts "Users Created"

puts "Creating Messages"

10.times {Message.create(body: Faker::TvShows::BigBangTheory.quote,
                          recipient: User.all.sample,
                          sender: User.all.sample,
                          timestamp: Faker::Time.unique.between(from: DateTime.now - 1, to: DateTime.now, format: :short),
                          is_new: boolean.sample
                          )}

puts "Creating Appointments"

20.times {Appointment.create(date: Faker::Date.in_date_period,
                            time:Faker::Time.unique.between(from: DateTime.now - 1, to: DateTime.now, format: :short),
                            #=> "15 Oct 10:48 AM"
                            description: Faker::TvShows::MichaelScott.quote,
                            user: User.all.sample,)}

puts "Appointments created"


puts "Done Seeding"

