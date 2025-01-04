export class AuthService {
  public static async login(accessCode: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ accessCode: accessCode }),
      credentials: 'include',
    });
  
    const isAuthorized = response.ok;
  
    if (isAuthorized) {
      return true;
    }
  
    if (!isAuthorized) {
      return false;
    }
  }
}