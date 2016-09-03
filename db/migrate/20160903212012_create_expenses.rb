class CreateExpenses < ActiveRecord::Migration
  def change
    create_table :expenses do |t|
      t.string :name
      t.float :amount

      t.timestamps null: false
    end
  end
end
