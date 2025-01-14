export const formatErrors = (errorMessages: string[]): string[] => {
  const errorMap: { [key: string]: string } = {
    'name should not be empty': 'O nome não pode estar vazio.',
    'name must be longer than or equal to 3 characters': 'O nome deve ter pelo menos 3 caracteres.',
    'aniversario must be a Date instance': 'O aniversário deve ser uma data válida.',
    'Telefone must be a valid Portuguese phone number': 'O telefone deve ser um número português válido.',
    'telefone should not be empty': 'O telefone não pode estar vazio.',
    'email must be longer than or equal to 3 characters': 'O e-mail deve ter pelo menos 3 caracteres.',
    'email must be an email': 'O e-mail deve ser válido.',
    'email should not be empty': 'O e-mail não pode estar vazio.',
  };

  return errorMessages.map((error) => errorMap[error.trim()] || 'Erro desconhecido');
};