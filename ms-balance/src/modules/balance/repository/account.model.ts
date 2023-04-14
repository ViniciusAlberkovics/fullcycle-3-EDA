import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
  tableName: "accounts",
  timestamps: false,
})
export class AccountModel extends Model {
  @PrimaryKey
  @Column({ allowNull: false })
  declare id: string;

  @Column({ allowNull: false })
  declare balance: number;
}