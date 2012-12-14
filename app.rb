require 'rubygems'
require 'sinatra'

configure do
  set :public_folder, Proc.new { File.join(root, "static") }
  
end
get '/' do
  erb :get_data
end

get '/about' do
  erb :about
end