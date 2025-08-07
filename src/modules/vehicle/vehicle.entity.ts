import {
  Column,
  DataType,
  Default,
  PrimaryKey,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Model } from 'sequelize-typescript';
import { CarModel } from 'src/modules/car-model/car-model.entity';
import { User } from 'src/modules/user/user.entity';

@Table({
  tableName: 'vehicles',
  timestamps: false,
})
export class Vehicles extends Model<Vehicles> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  public vehicle_id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  plate: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  color: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  yearOfManufacture: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  mileage: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id: string;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => CarModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  carmodel_id: string;

  @BelongsTo(() => CarModel)
  carModel: CarModel;
}
