import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
} from 'class-validator';
import { CompleteQuestion } from '../decorators/decorators';

export class UpdateAnamnesisFormDto {
  @IsInt()
  @IsNotEmpty()
  clientId: number;

  @CompleteQuestion('Já fez extensão de cílios?')
  @IsBoolean()
  @IsNotEmpty()
  fezExtensaoDeCilios: boolean; // "Já fez extensão de cílios?"

  @CompleteQuestion('Usa lente de contato?')
  @IsBoolean()
  @IsNotEmpty()
  usaLentesDeContato: boolean; // "Usa lente de contato?"

  @CompleteQuestion('Faz uso de óculos?')
  @IsBoolean()
  @IsNotEmpty()
  fazUsoDeOculos: boolean; // "Faz uso de óculos?"

  @CompleteQuestion('Fez algum procedimento recente nos olhos?')
  @IsBoolean()
  @IsNotEmpty()
  fezProcedimentoRecenteNosOlhos: boolean; // "Fez algum procedimento recente nos olhos?"

  @CompleteQuestion('Fará alguma cirurgia recentemente?')
  @IsBoolean()
  @IsNotEmpty()
  faraCirurgiaRecentemente: boolean; // "Fará alguma cirurgia recentemente?"

  @CompleteQuestion('Faz algum tratamento hormonal?')
  @IsBoolean()
  @IsNotEmpty()
  fazTratamentoHormonal: boolean; // "Faz algum tratamento hormonal?"

  @CompleteQuestion('Costuma fazer bronzeamento?')
  @IsBoolean()
  @IsNotEmpty()
  costumaFazerBronzeamento: boolean; // "Costuma fazer bronzeamento?"

  @CompleteQuestion(
    'Está grávida, tomando remédios para fertilidade ou é lactante?',
  )
  @IsBoolean()
  @IsNotEmpty()
  estaGravidaOuTomandoRemediosFertilidadeOuLactante: boolean; // "Está grávida, tomando remédios para fertilidade ou é lactante?"

  @CompleteQuestion('Possui alergia ao látex, cianoacrilato ou micropore?')
  @IsBoolean()
  @IsNotEmpty()
  possuiAlergiaAoLatexCianoacrilatoOuMicropore: boolean; // "Possui alergia ao látex, cianoacrilato ou micropore?"

  @CompleteQuestion('Costuma usar máscara de cílios?')
  @IsBoolean()
  @IsNotEmpty()
  costumaUsarMascaraDeCilios: boolean; // "Costuma usar máscara de cílios?"

  @CompleteQuestion(
    'Possui esclerite/blefarite/glaucoma ou algum problema ocular?',
  )
  @IsBoolean()
  @IsNotEmpty()
  possuiEscleriteBlefariteGlaucomaOuProblemaOcular: boolean; // "Possui esclerite/blefarite/glaucoma ou algum problema ocular?"

  @CompleteQuestion('Se sim, especifique')
  @IsString()
  @IsOptional()
  especificarProblemaOcular: string; // "Se sim, especifique"

  @CompleteQuestion('Deseja fazer o teste alérgico?')
  @IsBoolean()
  @IsNotEmpty()
  desejaFazerTesteAlergico: boolean; // "Deseja fazer o teste alérgico?"

  @CompleteQuestion('Existe algum problema que julgue ser necessário informar?')
  @IsBoolean()
  @IsNotEmpty()
  existeProblemaNecessarioInformar: boolean; // "Existe algum problema que julgue ser necessário informar?"

  @CompleteQuestion('Autoriza o registro fotográfico?')
  @IsBoolean()
  @IsNotEmpty()
  autorizaRegistroFotografico: boolean; // "Autoriza o registro fotográfico?"

  @CompleteQuestion('Já teve COVID-19?')
  @IsBoolean()
  @IsNotEmpty()
  jaTeveCovid19: boolean; // "Já teve COVID-19?"

  @CompleteQuestion('Tem filhos?')
  @IsBoolean()
  @IsNotEmpty()
  temFilhos: boolean; // "Tem filhos?"

  @CompleteQuestion('Quantos filhos?')
  @IsInt()
  @IsOptional()
  quantosFilhos: number; // "Quantos filhos?"

  @CompleteQuestion('Está na menopausa/climatério?')
  @IsBoolean()
  @IsNotEmpty()
  estaNaMenopausaOuClimaterio: boolean; // "Está na menopausa/climatério?"

  @CompleteQuestion('Problemas de saúde ocular?')
  @IsBoolean()
  @IsNotEmpty()
  problemasDeSaudeOcular: boolean; // "Problemas de saúde ocular?"

  @CompleteQuestion('Se sim, especifique')
  @IsString()
  @IsOptional()
  especificarProblemasDeSaudeOcular: string; // "Se sim, especifique"

  @CompleteQuestion('Problemas de saúde?')
  @IsBoolean()
  @IsNotEmpty()
  problemasDeSaude: boolean; // "Problemas de saúde?"

  @CompleteQuestion('Usa produtos à base de ácidos no rosto?')
  @IsBoolean()
  @IsNotEmpty()
  usaProdutosComAcidosNoRosto: boolean; // "Usa produtos à base de ácidos no rosto?"

  @CompleteQuestion('Está com algum sintoma de COVID-19?')
  @IsBoolean()
  @IsNotEmpty()
  estaComSintomasDeCovid19: boolean; // "Está com algum sintoma de COVID-19?"

  @CompleteQuestion('É tabagista?')
  @IsBoolean()
  @IsNotEmpty()
  eTabagista: boolean; // "É tabagista?"

  @CompleteQuestion('Ingere bebidas alcoólicas?')
  @IsBoolean()
  @IsNotEmpty()
  ingereBebidasAlcoolicas: boolean; // "Ingere bebidas alcoólicas?"

  @CompleteQuestion('Dorme de qual lado?')
  @IsString()
  @IsOptional()
  dormeDeQualLado: string; // "Dorme de qual lado?"

  @CompleteQuestion('Está fazendo dieta?')
  @IsBoolean()
  @IsNotEmpty()
  estaFazendoDieta: boolean; // "Está fazendo dieta?"

  @CompleteQuestion('Usa maquiagem frequentemente?')
  @IsBoolean()
  @IsNotEmpty()
  usaMaquiagemFrequentemente: boolean; // "Usa maquiagem frequentemente?"

  @CompleteQuestion('Pratica natação?')
  @IsBoolean()
  @IsNotEmpty()
  praticaNatacao: boolean; // "Pratica natação?"

  @CompleteQuestion('Pratica sauna?')
  @IsBoolean()
  @IsNotEmpty()
  praticaSauna: boolean; // "Pratica sauna?"

  @CompleteQuestion('Pratica atividade física?')
  @IsBoolean()
  @IsNotEmpty()
  praticaAtividadeFisica: boolean; // "Pratica atividade física?"

  @CompleteQuestion('Tem alergia a cosméticos?')
  @IsBoolean()
  @IsNotEmpty()
  alergiaCosmeticos: boolean; // "Tem alergia a cosméticos?"

  @CompleteQuestion('Tem alergia a fita adesiva?')
  @IsBoolean()
  @IsNotEmpty()
  alergiaFitaAdesiva: boolean; // "Tem alergia a fita adesiva?"

  @CompleteQuestion('Tem alergia a maquiagem?')
  @IsBoolean()
  @IsNotEmpty()
  alergiaMaquiagem: boolean; // "Tem alergia a maquiagem?"

  @CompleteQuestion('Tem alergia a esmaltes?')
  @IsBoolean()
  @IsNotEmpty()
  alergiaEsmaltes: boolean; // "Tem alergia a esmaltes?"
}
