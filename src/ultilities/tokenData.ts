export const setAccessToken = (token: string) => {
  localStorage.setItem(process.env.NEXT_PUBLIC_TOKEN!, token);
}

export const getAccessToken = () => {
  const token = localStorage.getItem(process.env.NEXT_PUBLIC_TOKEN!) || 'Token not found';
  return token;
}

export const removeAccessToken = () => {
  localStorage.removeItem(process.env.NEXT_PUBLIC_TOKEN!);
}

