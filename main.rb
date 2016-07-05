require "rubygems"
require "sinatra"
require "pry"
require "rubyXL"

get "/" do
  erb :home
end

get "/upload" do 
  erb :upload 
end

post '/' do
File.open('public/uploads/' + params['myfile'][:filename], "w") do |f|
    f.write(params['myfile'][:tempfile].read)
  binding.pry
  end
  return "The file was successfully uploaded!"
end

#   @filename = params[:file][:filename]
#   file = params[:file][:tempfile]
#   workbook = RubyXL::Workbook.new
#   workbook.worksheets[0]
#   getcell = RubyXL::Parser.parse[:file]
#   print getcell[0][5][5]
#   File.open("/public/uploads/#{@filename}", 'wb') do |f|
#     f.write(file.read)
#   end
#   erb :home
# end

not_found do
  status 404
  "not found"
end