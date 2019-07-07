# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview
  def contact_us_confirmation
    UserMailer.with(user: User.all.first).contact_us_confirmation
  end
end
