import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
} from 'class-validator';

export class CreateAnamnesisFormDto {
  @IsInt()
  @IsNotEmpty()
  clientId: number;

  @IsBoolean()
  @IsNotEmpty()
  fezExtensaoDeCilios: boolean; // "Já fez extensão de cílios?"

  @IsBoolean()
  @IsNotEmpty()
  usaLentesDeContato: boolean; // "Usa lente de contato?"

  @IsBoolean()
  @IsNotEmpty()
  fazUsoDeOculos: boolean; // "Faz uso de óculos?"

  @IsBoolean()
  @IsNotEmpty()
  fezProcedimentoRecenteNosOlhos: boolean; // "Fez algum procedimento recente nos olhos?"

  @IsBoolean()
  @IsNotEmpty()
  faraCirurgiaRecentemente: boolean; // "Fará alguma cirurgia recentemente?"

  @IsBoolean()
  @IsNotEmpty()
  fazTratamentoHormonal: boolean; // "Faz algum tratamento hormonal?"

  @IsBoolean()
  @IsNotEmpty()
  costumaFazerBronzeamento: boolean; // "Costuma fazer bronzeamento?"

  @IsBoolean()
  @IsNotEmpty()
  estaGravidaOuTomandoRemediosFertilidadeOuLactante: boolean; // "Está grávida, tomando remédios para fertilidade ou é lactante?"

  @IsBoolean()
  @IsNotEmpty()
  possuiAlergiaAoLatexCianoacrilatoOuMicropore: boolean; // "Possui alergia ao látex, cianoacrilato ou micropore?"

  @IsBoolean()
  @IsNotEmpty()
  costumaUsarMascaraDeCilios: boolean; // "Costuma usar máscara de cílios?"

  @IsBoolean()
  @IsNotEmpty()
  possuiEscleriteBlefariteGlaucomaOuProblemaOcular: boolean; // "Possui esclerite/blefarite/glaucoma ou algum problema ocular?"

  @IsString()
  @IsOptional()
  especificarProblemaOcular: string; // "Se sim, especifique"

  @IsBoolean()
  @IsNotEmpty()
  desejaFazerTesteAlergico: boolean; // "Deseja fazer o teste alérgico?"

  @IsBoolean()
  @IsNotEmpty()
  existeProblemaNecessarioInformar: boolean; // "Existe algum problema que julgue ser necessário informar?"

  @IsBoolean()
  @IsNotEmpty()
  autorizaRegistroFotografico: boolean; // "Autoriza o registro fotográfico?"

  @IsBoolean()
  @IsNotEmpty()
  jaTeveCovid19: boolean; // "Já teve COVID-19?"

  @IsBoolean()
  @IsNotEmpty()
  temFilhos: boolean; // "Tem filhos?"

  @IsInt()
  @IsOptional()
  quantosFilhos: number; // "Quantos filhos?"

  @IsBoolean()
  @IsNotEmpty()
  estaNaMenopausaOuClimaterio: boolean; // "Está na menopausa/climatério?"

  @IsBoolean()
  @IsNotEmpty()
  problemasDeSaudeOcular: boolean; // "Problemas de saúde ocular?"

  @IsString()
  @IsOptional()
  especificarProblemasDeSaudeOcular: string; // "Se sim, especifique"

  @IsBoolean()
  @IsNotEmpty()
  problemasDeSaude: boolean; // "Problemas de saúde?"

  @IsBoolean()
  @IsNotEmpty()
  usaProdutosComAcidosNoRosto: boolean; // "Usa produtos à base de ácidos no rosto?"

  @IsBoolean()
  @IsNotEmpty()
  estaComSintomasDeCovid19: boolean; // "Está com algum sintoma de COVID-19?"

  @IsBoolean()
  @IsNotEmpty()
  eTabagista: boolean; // "É tabagista?"

  @IsBoolean()
  @IsNotEmpty()
  ingereBebidasAlcoolicas: boolean; // "Ingere bebidas alcoólicas?"

  @IsString()
  @IsOptional()
  dormeDeQualLado: string; // "Dorme de qual lado?"

  @IsBoolean()
  @IsNotEmpty()
  estaFazendoDieta: boolean; // "Está fazendo dieta?"

  @IsBoolean()
  @IsNotEmpty()
  usaMaquiagemFrequentemente: boolean; // "Usa maquiagem frequentemente?"

  @IsBoolean()
  @IsNotEmpty()
  praticaNatacao: boolean; // "Pratica natação?"

  @IsBoolean()
  @IsNotEmpty()
  praticaSauna: boolean; // "Pratica sauna?"

  @IsBoolean()
  @IsNotEmpty()
  praticaAtividadeFisica: boolean; // "Pratica atividade física?"

  @IsBoolean()
  @IsNotEmpty()
  alergiaCosmeticos: boolean; // "Tem alergia a cosméticos?"

  @IsBoolean()
  @IsNotEmpty()
  alergiaFitaAdesiva: boolean; // "Tem alergia a fita adesiva?"

  @IsBoolean()
  @IsNotEmpty()
  alergiaMaquiagem: boolean; // "Tem alergia a maquiagem?"

  @IsBoolean()
  @IsNotEmpty()
  alergiaEsmaltes: boolean; // "Tem alergia a esmaltes?"
}
