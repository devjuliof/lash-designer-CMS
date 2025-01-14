export interface ClientInterface {
  map(arg0: (client: ClientInterface) => import("react").JSX.Element): import("react").ReactNode;
  id: number;
  name: string;
  aniversario: Date;
  telefone: string;
  email: string;
}