export type Track = {
  name: string,
  sourceUrl: string,
  length: string,
  date: string,
}

export type Author = {
  id: number,
  name: string,
  description: string,
  imageUrl: string,
  tracks: Track[]
}