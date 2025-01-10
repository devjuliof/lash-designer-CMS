import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Client } from './client.entity';

@Entity()
export class AnamnesisForm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'boolean',
    nullable: true,
  })
  fezExtensaoDeCilios: boolean; // "Já fez extensão de cílios?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  usaLentesDeContato: boolean; // "Usa lente de contato?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  fazUsoDeOculos: boolean; // "Faz uso de óculos?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  fezProcedimentoRecenteNosOlhos: boolean; // "Fez algum procedimento recente nos olhos?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  faraCirurgiaRecentemente: boolean; // "Fará alguma cirurgia recentemente?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  fazTratamentoHormonal: boolean; // "Faz algum tratamento hormonal?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  costumaFazerBronzeamento: boolean; // "Costuma fazer bronzeamento?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  estaGravidaOuTomandoRemediosFertilidadeOuLactante: boolean; // "Está grávida, tomando remédios para fertilidade ou é lactante?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  possuiAlergiaAoLatexCianoacrilatoOuMicropore: boolean; // "Possui alergia ao látex, cianoacrilato ou micropore?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  costumaUsarMascaraDeCilios: boolean; // "Costuma usar máscara de cílios?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  possuiEscleriteBlefariteGlaucomaOuProblemaOcular: boolean; // "Possui esclerite/blefarite/glaucoma ou algum problema ocular?"

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  especificarProblemaOcular: string; // "Se sim, especifique"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  desejaFazerTesteAlergico: boolean; // "Deseja fazer o teste alérgico que deve ser realizado com no mínimo 24h antes do procedimento?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  existeProblemaNecessarioInformar: boolean; // "Existe algum problema que julgue ser necessário informar ao profissional?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  autorizaRegistroFotografico: boolean; // "Autoriza o registro fotográfico do antes e depois?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  jaTeveCovid19: boolean; // "Já teve COVID-19?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  temFilhos: boolean; // "Tem filhos?"

  @Column({
    type: 'int',
    nullable: true,
  })
  quantosFilhos: number; // "Quantos filhos?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  estaNaMenopausaOuClimaterio: boolean; // "Está na menopausa/climatério?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  problemasDeSaudeOcular: boolean; // "Problemas de saúde ocular?"

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  especificarProblemasDeSaudeOcular: string; // "Se sim, especifique"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  problemasDeSaude: boolean; // "Problemas de saúde?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  usaProdutosComAcidosNoRosto: boolean; // "Usa produtos à base de ácidos no rosto?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  estaComSintomasDeCovid19: boolean; // "Está com algum sintoma de COVID-19?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  eTabagista: boolean; // "É tabagista?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  ingereBebidasAlcoolicas: boolean; // "Ingere bebidas alcoólicas?"

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  dormeDeQualLado: string; // "Dorme de qual lado?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  estaFazendoDieta: boolean; // "Está fazendo dieta?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  usaMaquiagemFrequentemente: boolean; // "Usa maquiagem frequentemente?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  praticaNatacao: boolean; // "Pratica natação?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  praticaSauna: boolean; // "Pratica sauna?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  praticaAtividadeFisica: boolean; // "Pratica atividade física?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  alergiaCosmeticos: boolean; // "Tem alergia a cosméticos?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  alergiaFitaAdesiva: boolean; // "Tem alergia a fita adesiva?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  alergiaMaquiagem: boolean; // "Tem alergia a maquiagem?"

  @Column({
    type: 'boolean',
    nullable: true,
  })
  alergiaEsmaltes: boolean; // "Tem alergia a esmaltes?"

  @OneToOne(() => Client, (client) => client.anamnesisForm, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  client: Client;
}
