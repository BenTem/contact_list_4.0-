require 'rake'
require "sinatra/activerecord/rake"
require ::File.expand_path('../config/environment', __FILE__)

Rake::Task["db:create"].clear
Rake::Task["db:drop"].clear

# NOTE: Assumes SQLite3 DB
desc "create the database"
task "db:create" do
  touch 'db/db.sqlite3'
end

desc "drop the database"
task "db:drop" do
  rm_f 'db/db.sqlite3'
end

desc 'Create a new migration file'
  task "db:migration" do
  File.open "#{'db/migrate/'+(`date +"%Y%m%d%H%M%S"`).chomp+'_new_migration.rb'}", "w"
end

desc "populate the test database with sample data"
task "db:populate" do
  PopulateContacts.new
end

desc 'Retrieves the current schema version number'
task "db:version" do
  puts "Current version: #{ActiveRecord::Migrator.current_version}"
end
