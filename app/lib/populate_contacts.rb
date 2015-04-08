# require 'faker'
class PopulateContacts
  def initialize
    contacts = []
    20.times do |i|
      contacts << Contact.create(
          first_name: Faker::Name.first_name,
          last_name: Faker::Name.last_name,
          email: Faker::Internet.email
      )
    end
  end
end