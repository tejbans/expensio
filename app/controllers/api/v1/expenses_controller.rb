module Api
 module V1
  class ExpensesController < ApplicationController
    skip_before_filter :verify_authenticity_token
    respond_to :json

    def index
      respond_with(Expense.all, include: :category)
    end

    def show
      respond_with(Expense.find(params[:id]), include: :category)
    end

    def create
      @expense = Expense.new(expense_params)
      if @expense.save
        respond_to do |format|
          format.json {render :json => @expense}
        end
      end
    end

  def update
    @expense = Expense.find(params[:id])
    if @expense.update(expense_params)
      respond_to do |format|
        format.json {render :json => @expense}
      end
    end
  end

  def destroy
    respond_with  Expense.destroy(params[:id])
  end

  private
    def expense_params
      params.require(:expense).permit(:name, :amount, :description, :category_id)
    end

  end
end
end