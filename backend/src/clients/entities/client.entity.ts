import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { AnamnesisForm } from './anamnesis-form.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'date',
    nullable: false,
  })
  aniversario: Date;

  @Column({
    type: 'varchar',
    length: 13,
    nullable: false,
  })
  telefone: string;

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  email: string;

  @OneToOne(() => AnamnesisForm, (anamnesisForm) => anamnesisForm.client, {
    cascade: true,
  })
  @JoinColumn()
  anamnesisForm: AnamnesisForm;
}
