export default function auth(accessCode: string) {
  const token = fetch(`${process.env.API}/auth/${accessCode}`)
}