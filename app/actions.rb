# Homepage (Root path)
get '/' do
  erb :index
end

get '/search' do
  term = params[:term]
  @contact = Contact.where("first_name LIKE ? OR last_name LIKE ? OR email LIKE ?", "%#{term}%", "%#{term}%", "%#{term}%")
  json @contact 
  # content_type :json
end

get '/contacts/:id' do
  @contact = Contact.find(params[:id])
  json @contact
end

post '/contacts/new' do
  first_name = params[:first_name]
  last_name = params[:last_name]
  email = params[:email]
  @contact = Contact.create(
    first_name: first_name,
    last_name: last_name,
    email: email
    )
  json @contact
end

# post '/contacts/new' do

# end
