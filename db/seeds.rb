# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', email: 'admin@email.com', password:'123456')

puts "#{User.count} users created"

@post1 = Post.create!(
  image: 'https://www.imagup.com/wp-content/uploads/2020/02/Korean-Fashion-2.jpg', 
  content: 'Look at my shirt, my shirt is amazing', 
  price:'50', 
  tags:'trendy',
  outfit:'Gucci Shirt', 
  user: @admin
)

puts "#{Post.count} posts created"

@comment1 = Comment.create!(content:'dang i love myself', user: @admin, post: @post1)

puts "#{Comment.count} comments created"
