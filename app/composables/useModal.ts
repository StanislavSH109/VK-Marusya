export const useModal = () => {
  return useState<'login' | 'register' | 'done' | null>('modal', () => null);
}