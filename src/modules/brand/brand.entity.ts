import { Model } from 'sequelize-typescript';
import {
  Column,
  DataType,
  Default,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'brands',
  timestamps: false,
})
export class Brand extends Model<Brand> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  public brand_id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
}
