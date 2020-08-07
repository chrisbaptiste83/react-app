class UsersController < ApplicationController 
    
<<<<<<< HEAD
    wrap_parameters :user, include: [:username, :email, :password, :password_confirmation]

    def create
        @user = User.create!(user_params)
        if @user
            session[:user_id] = @user.id
            render json: {
                status: :created,
                user: @user
            }
=======
    def index
        @users = User.all
        if @users
          render json: {
            users: @users
          }
        else
          render json: {
            status: 500,
            errors: ['no users found']
          }
        end
    end
    def show
        @user = User.find(params[:id])
       if @user
          render json: {
            user: @user
          }
        else
          render json: {
            status: 500,
            errors: ['user not found']
          }
        end
      end
      
      def create
        @user = User.new(user_params)
        if @user.save
          login!
          render json: {
            status: :created,
            user: @user
          }
>>>>>>> parent of a44cced... update for user authentication using session cookies
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
