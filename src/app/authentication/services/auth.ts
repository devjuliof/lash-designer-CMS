import { redirect } from "next/navigation";


export default async function auth(accessCode: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/${accessCode}`);

  const isAuthorized = response.ok;

  if (isAuthorized) {
    redirect('/calendar')
  }

  if (!isAuthorized) {
    throw new Error('Access code incorrect');
  }
}