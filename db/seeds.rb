# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# source material for self referential tables: https://apugia.medium.com/rails-self-referential-tables-ac642d7d5082 

puts 'Clearing Database'

Appointment.destroy_all
User.destroy_all
Message.destroy_all

puts 'Database Cleared'

puts 'Creating users'

specialties = ["Criminal", "Family", "Immigration", "Tax", "Real Estate"]

firms = ["Cravath, Swaine & Moore LLP", "Wachtell, Lipton, Rosen & Katz", "Skadden", "Davis Polk & Wardwell LLP", "Latham & Watkins", "Sullivan & Cromwell LLP", "Kirkland & Ellis", "Simpson Thacher & Bartlett LLP", "Paul, Weiss, Rifkind, Wharton & Garrison LLP", "Gibson Dunn", "Kilpatrick Townsend", "Faegre Drinker", "Hunton Andrews Kurth LLP", "Polsinelli PC", "Blank Rome LLP"]

states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

boolean = [true, false]

address = ['310 Hillside Avenue, New Hyde Park, NY 11040', '109 Emerson Ave, Floral Park, NY 11001', '70 Floral Pkwy, Floral Park, NY 11001', '46 209th St, Queens, NY 11428', '1510 Terrace Blvd, New Hyde Park, NY 11040', '14 Jefferson St, New Hyde Park, NY 11040', '217th St, Flushing, NY 11361', '46-08 Springfield Blvd, Queens, NY 11361', '167-02 45th Ave, Queens, NY 11358', '215-01 Hillside Avenue, Jamaica, NY 11427', '79th Ave, Queens, NY 11367', '11 Webb Hill Rd, Great Neck, NY 11020', '63-27 253rd St, Queens, NY 11362', '57-26 156th St, Flushing, NY 11355', '57-11 162nd St, Queens, NY 11365','38th Ave, Bayside, NY 11361', '35-24 171st St, Flushing, NY 11358', '84th Ave, Jamaica, NY 11435']

address = ['310 Hillside Avenue, New Hyde Park, NY 11040', '109 Emerson Ave, Floral Park, NY 11001', '70 Floral Pkwy, Floral Park, NY 11001', '46 209th St, Queens, NY 11428', '1510 Terrace Blvd, New Hyde Park, NY 11040', '14 Jefferson St, New Hyde Park, NY 11040', '217th St, Flushing, NY 11361', '46-08 Springfield Blvd, Queens, NY 11361', '167-02 45th Ave, Queens, NY 11358', '215-01 Hillside Avenue, Jamaica, NY 11427', '79th Ave, Queens, NY 11367', '11 Webb Hill Rd, Great Neck, NY 11020', '63-27 253rd St, Queens, NY 11362', '57-26 156th St, Flushing, NY 11355', '57-11 162nd St, Queens, NY 11365','38th Ave, Bayside, NY 11361', '35-24 171st St, Flushing, NY 11358', '84th Ave, Jamaica, NY 11435']

10.times{User.create( name: Faker::Name.unique.name,
                      email: Faker::Internet.unique.free_email,
                      date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 70),
                      address: address.sample, 
                      profile_picture: Faker::Avatar.image,
                      is_lawyer?: false,
                      specialty: nil,
                      law_firm: nil,
                      years_in_practice: nil,
                      alma_mater: nil,
                      board_certification: nil,
                      password: "123"
                      location: nil
                      )}

10.times{User.create( name: Faker::Name.unique.name,
                      email: Faker::Internet.unique.free_email,
                      date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 75),
                      address: address.sample,
                      profile_picture: Faker::Avatar.image,
                      is_lawyer?: true,
                      specialty: specialties.sample,
                      law_firm: firms.sample,
                      alma_mater: Faker::University.name,
                      board_certification: states.sample,
                      password: "123",
                      location: nil
                      )}

puts "Users Created"

puts "Creating Messages"

10.times {Message.create( body: Faker::TvShows::BigBangTheory.quote,
                          recipient_id: rand(1..20),
                          sender_id: rand(1..20),
                          is_new?: boolean.sample 
                          )}

puts "Creating Appointments"

20.times {Appointment.create( date: Faker::Date.in_date_period,
                              time: "12:00 PM",
                              description: Faker::TvShows::MichaelScott.quote,
                              client_id: rand(1..10),
                              lawyer_id: rand(11..20)
                            )}

puts "Appointments created"

puts "Done Seeding"
