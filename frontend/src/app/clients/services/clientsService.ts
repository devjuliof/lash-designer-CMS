export class ClientsService {
  public static async getAllClients() {
    const results = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clients/?limit=10&page=1`).then(res => res.json());
    
    return results;
  }

  public static async getSearchClientsByName(inputText: string) {
    const results = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clients/search-clients/?name=${inputText}`).then(res => res.json());

    return results;
  }
}