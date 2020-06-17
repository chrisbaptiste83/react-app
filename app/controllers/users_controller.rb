class UsersController < ApplicationController 
    
    wrap_parameters :user, include: [:username, :email, :password, :password_confirmation]

    def create
        @user = User.create!(user_params)
        if @user
            session[:user_id] = @user.id
            render json: {
                status: :created,
                user: @user
            }
        else 
            render json: {
                status: 500,
                errors: @user
            }
        end
    end 

    def index
        @users = User.all
        if @users 
            render json: {
                status: 200,
                users: @users
            } 
        end

    end

    private 
    def user_params
        params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end

end
