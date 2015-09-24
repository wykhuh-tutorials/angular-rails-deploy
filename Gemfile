source 'https://rubygems.org'

ruby '2.2.2'

gem 'airbrake', '~> 4.3.1'
gem 'bundler', '>= 1.8.4'
gem 'i18n-tasks', '~> 0.8.7'
gem 'newrelic_rpm', '>= 3.9.8'
gem 'pg', '~> 0.18.3'
gem 'rails', '4.2.3'
gem 'recipient_interceptor', '~> 0.1.2'
gem 'sidekiq', '~> 3.5.0'
gem 'unicorn', '~> 4.9.0'

group :development do
  gem 'better_errors', '~> 2.1.1'
  gem 'binding_of_caller', '~> 0.7.2'
  gem 'spring', '~> 1.4.0'
  gem 'spring-commands-rspec', '~> 1.0.4'
  gem 'stairs', '~> 0.9.0'
end

group :development, :test do
  gem 'bundler-audit', '~> 0.4.0', require: false
  gem 'dotenv-rails', '~> 2.0.2'
  gem 'factory_girl_rails', '~> 4.5.0'
  gem 'pry-byebug', '~> 3.2.0'
  gem 'pry-rails', '~> 0.3.4'
  gem 'rspec-rails', '~> 3.1.0'
  gem 'rubocop', '~> 0.34.2'
end

group :test do
  gem 'database_cleaner', '~> 1.5.0'
  gem 'rspec-sidekiq', '~> 2.1.0'
  gem 'shoulda-matchers', '~> 2.8.0', require: false
  gem 'timecop', '~> 0.8.0'
end

group :staging, :production do
  gem 'rails_12factor', '~> 0.0.3'
  gem 'rack-timeout', '~> 0.3.2'
end
