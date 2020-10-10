export interface artworkDto{
  id: number;
  title: string;
  description: string;
  isActive: boolean;
  creationDate: Date;
  updateDate: Date;
  promotion: number;
  categoryId: number[];
}
