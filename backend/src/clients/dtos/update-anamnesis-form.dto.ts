import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
} from 'class-validator';
import { QuestionDescription } from '../decorators/decorators';

export class UpdateAnamnesisFormDto {
  @IsInt()
  @IsNotEmpty()
  clientId: number;

  @QuestionDescription('Já fez extensão de cílios?')
  @IsBoolean()
  @IsNotEmpty()
  fezExtensaoDeCilios: boolean; // "Já fez extensão de cílios?"

  @QuestionDescription('Usa lente de contato?')
  @IsBoolean()
  @IsNotEmpty()
  usaLentesDeContato: boolean; // "Usa lente de contato?"

  @QuestionDescription('Faz uso de óculos?')
  @IsBoolean()
  @IsNotEmpty()
  fazUsoDeOculos: boolean; // "Faz uso de óculos?"

  @QuestionDescription('Fez algum procedimento recente nos olhos?')
  @IsBoolean()
  @IsNotEmpty()
  fezProcedimentoRecenteNosOlhos: boolean; // "Fez algum procedimento recente nos olhos?"

  @QuestionDescription('Fará alguma cirurgia recentemente?')
  @IsBoolean()
  @IsNotEmpty()
  faraCirurgiaRecentemente: boolean; // "Fará alguma cirurgia recentemente?"

  @QuestionDescription('Faz algum tratamento hormonal?')
  @IsBoolean()
  @IsNotEmpty()
  fazTratamentoHormonal: boolean; // "Faz algum tratamento hormonal?"

  @QuestionDescription('Costuma fazer bronzeamento?')
  @IsBoolean()
  @IsNotEmpty()
  costumaFazerBronzeamento: boolean; // "Costuma fazer bronzeamento?"

  @QuestionDescription(
    'Está grávida, tomando remédios para fertilidade ou é lactante?',
  )
  @IsBoolean()
  @IsNotEmpty()
  estaGravidaOuTomandoRemediosFertilidadeOuLactante: boolean; // "Está grávida, tomando remédios para fertilidade ou é lactante?"

  @QuestionDescription('Possui alergia ao látex, cianoacrilato ou micropore?')
  @IsBoolean()
  @IsNotEmpty()
  possuiAlergiaAoLatexCianoacrilatoOuMicropore: boolean; // "Possui alergia ao látex, cianoacrilato ou micropore?"

  @QuestionDescription('Costuma usar máscara de cílios?')
  @IsBoolean()
  @IsNotEmpty()
  costumaUsarMascaraDeCilios: boolean; // "Costuma usar máscara de cílios?"

  @QuestionDescription(
    'Possui esclerite/blefarite/glaucoma ou algum problema ocular?',
  )
  @IsBoolean()
  @IsNotEmpty()
  possuiEscleriteBlefariteGlaucomaOuProblemaOcular: boolean; // "Possui esclerite/blefarite/glaucoma ou algum problema ocular?"

  @QuestionDescription('Se sim, especifique')
  @IsString()
  @IsOptional()
  especificarProblemaOcular: string; // "Se sim, especifique"

  @QuestionDescription('Deseja fazer o teste alérgico?')
  @IsBoolean()
  @IsNotEmpty()
  desejaFazerTesteAlergico: boolean; // "Deseja fazer o teste alérgico?"

  @QuestionDescription(
    'Existe algum problema que julgue ser necessário informar?',
  )
  @IsBoolean()
  @IsNotEmpty()
  existeProblemaNecessarioInformar: boolean; // "Existe algum problema que julgue ser necessário informar?"

  @QuestionDescription('Autoriza o registro fotográfico?')
  @IsBoolean()
  @IsNotEmpty()
  autorizaRegistroFotografico: boolean; // "Autoriza o registro fotográfico?"

  @QuestionDescription('Já teve COVID-19?')
  @IsBoolean()
  @IsNotEmpty()
  jaTeveCovid19: boolean; // "Já teve COVID-19?"

  @QuestionDescription('Tem filhos?')
  @IsBoolean()
  @IsNotEmpty()
  temFilhos: boolean; // "Tem filhos?"

  @QuestionDescription('Quantos filhos?')
  @IsInt()
  @IsOptional()
  quantosFilhos: number; // "Quantos filhos?"

  @QuestionDescription('Está na menopausa/climatério?')
  @IsBoolean()
  @IsNotEmpty()
  estaNaMenopausaOuClimaterio: boolean; // "Está na menopausa/climatério?"

  @QuestionDescription('Problemas de saúde ocular?')
  @IsBoolean()
  @IsNotEmpty()
  problemasDeSaudeOcular: boolean; // "Problemas de saúde ocular?"

  @QuestionDescription('Se sim, especifique')
  @IsString()
  @IsOptional()
  especificarProblemasDeSaudeOcular: string; // "Se sim, especifique"

  @QuestionDescription('Problemas de saúde?')
  @IsBoolean()
  @IsNotEmpty()
  problemasDeSaude: boolean; // "Problemas de saúde?"

  @QuestionDescription('Usa produtos à base de ácidos no rosto?')
  @IsBoolean()
  @IsNotEmpty()
  usaProdutosComAcidosNoRosto: boolean; // "Usa produtos à base de ácidos no rosto?"

  @QuestionDescription('Está com algum sintoma de COVID-19?')
  @IsBoolean()
  @IsNotEmpty()
  estaComSintomasDeCovid19: boolean; // "Está com algum sintoma de COVID-19?"

  @QuestionDescription('É tabagista?')
  @IsBoolean()
  @IsNotEmpty()
  eTabagista: boolean; // "É tabagista?"

  @QuestionDescription('Ingere bebidas alcoólicas?')
  @IsBoolean()
  @IsNotEmpty()
  ingereBebidasAlcoolicas: boolean; // "Ingere bebidas alcoólicas?"

  @QuestionDescription('Dorme de qual lado?')
  @IsString()
  @IsOptional()
  dormeDeQualLado: string; // "Dorme de qual lado?"

  @QuestionDescription('Está fazendo dieta?')
  @IsBoolean()
  @IsNotEmpty()
  estaFazendoDieta: boolean; // "Está fazendo dieta?"

  @QuestionDescription('Usa maquiagem frequentemente?')
  @IsBoolean()
  @IsNotEmpty()
  usaMaquiagemFrequentemente: boolean; // "Usa maquiagem frequentemente?"

  @QuestionDescription('Pratica natação?')
  @IsBoolean()
  @IsNotEmpty()
  praticaNatacao: boolean; // "Pratica natação?"

  @QuestionDescription('Pratica sauna?')
  @IsBoolean()
  @IsNotEmpty()
  praticaSauna: boolean; // "Pratica sauna?"

  @QuestionDescription('Pratica atividade física?')
  @IsBoolean()
  @IsNotEmpty()
  praticaAtividadeFisica: boolean; // "Pratica atividade física?"

  @QuestionDescription('Tem alergia a cosméticos?')
  @IsBoolean()
  @IsNotEmpty()
  alergiaCosmeticos: boolean; // "Tem alergia a cosméticos?"

  @QuestionDescription('Tem alergia a fita adesiva?')
  @IsBoolean()
  @IsNotEmpty()
  alergiaFitaAdesiva: boolean; // "Tem alergia a fita adesiva?"

  @QuestionDescription('Tem alergia a maquiagem?')
  @IsBoolean()
  @IsNotEmpty()
  alergiaMaquiagem: boolean; // "Tem alergia a maquiagem?"

  @QuestionDescription('Tem alergia a esmaltes?')
  @IsBoolean()
  @IsNotEmpty()
  alergiaEsmaltes: boolean; // "Tem alergia a esmaltes?"
}
