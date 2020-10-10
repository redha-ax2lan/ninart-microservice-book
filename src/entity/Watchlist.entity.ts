import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Book } from './Book.entity';

@Entity({ name: "watchlist" })
export class Watchlist{
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ name: "name", type: "varchar", length: 255, nullable: false })
  name: string;

  @Column({ name: "idUser", type: "int", nullable: false})
  idUser: number;

  @ManyToMany(type => Book)
  @JoinTable()
  book: Book[];
}
