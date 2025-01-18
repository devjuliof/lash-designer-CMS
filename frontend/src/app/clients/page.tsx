import ClientsPageContent from "./components/ClientsPageContent";
import { ClientsService } from "./services/clientsService";

export default async function ClientsPage() {
  const initialClients = await ClientsService.getAllClients();;

  return <ClientsPageContent initialClients={initialClients.data} />;
}