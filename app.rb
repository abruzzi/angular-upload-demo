require 'sinatra'
require 'haml'
 
get '/' do
	File.open('views/index.html').read
end

# Handle GET-request (Show the upload form)
get "/upload" do
  haml :upload
end      
    
# Handle POST-request (Receive and save the uploaded file)
post "/upload" do 
  File.open('uploads/' + params['file'][:filename], "w") do |f|
    f.write(params['file'][:tempfile].read)
  end
  return "The file was successfully uploaded!"
end
