/**
 * 更新情報の型定義
 */
export type Update = {
  date: string;
  names: string[];
}

/**
 * プロフィールカードの型定義
 */
export type Profile = {
  id: number;
  name: string;
  title: string;
  catchphrase: string;
  image: string;
  organization?: string;
}

/**
 * お知らせバナーの型定義
 */
export type Notice = {
  date: string;
  oldName: string;
  newName: string;
}
