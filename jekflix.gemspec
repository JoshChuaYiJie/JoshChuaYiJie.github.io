# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekflix"
  spec.version       = "3.4.2"
  spec.authors       = ["Thiago Rossener"]
  spec.email         = ["thiago@rossener.com"]

  spec.summary       = "A Jekyll theme inspired by Netflix."
  spec.homepage      = "https://jekflix.rossener.com/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(_(includes|layouts|sass)/|assets/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i) }

  spec.add_runtime_dependency "rouge", "~> 3.3"
  spec.add_runtime_dependency "jekyll", "~> 4.3.0"  # Updated to Jekyll 4.x
  spec.add_runtime_dependency "jekyll-paginate-v2", "~> 3.0"  # Replaced jekyll-paginate and jekyll-paginate-content
  spec.add_runtime_dependency "bigdecimal", "~> 3.1"  # Added for Ruby 3.x compatibility
  spec.add_runtime_dependency "logger", "~> 1.5"  # Added for Ruby 3.x compatibility

  spec.add_development_dependency "bundler", "~> 2.0"  # Updated to Bundler 2.x
  spec.add_development_dependency "rake", "~> 13.0"  # Updated to Rake 13.x
end