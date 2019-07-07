class UserMailer < ApplicationMailer

  def contact_us_confirmation
    @user = params[:user]
    mail(to: @user.email, subject: 'Thank You')
  end
end
