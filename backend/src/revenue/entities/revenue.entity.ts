import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Revenue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'decimal',
    nullable: false,
    precision: 10,
    scale: 2,
  })
  value: number;

  @Column({
    type: 'date',
    nullable: false,
  })
  date: Date;
}
