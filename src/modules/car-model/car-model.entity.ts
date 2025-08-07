import { BelongsTo, ForeignKey, Model } from 'sequelize-typescript';
import {
  Column,
  DataType,
  Default,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Brand } from '../brand/brand.entity';

@Table({
  tableName: 'car_models',
  timestamps: false,
})
export class CarModel extends Model<CarModel> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  public id_model: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  yearmanufacture: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price: number;

  @ForeignKey(() => Brand)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  brand_id: string;

  @BelongsTo(() => Brand)
  brand: Brand;
}
