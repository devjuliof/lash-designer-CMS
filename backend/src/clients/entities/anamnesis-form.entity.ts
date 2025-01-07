import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from './client.entity';

@Entity()
export class AnamnesisForm {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Client, (client) => client.anamnesisForm) // One-to-one relationshi
  client: Client;

  @Column({
    type: 'boolean',
    nullable: true,
  })
  usaLentesDeContato: boolean; // Question: "Usa lentes de contato?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  lactante: boolean; // Question: "Lactante?"

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  alergias: string; // Question: "Alergias?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  conjuntivite: boolean; // Question: "Conjuntivite?"
}
