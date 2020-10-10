import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Book } from './Book.entity';

@Entity({name : 'comment'})
export class Comment{
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ name: "libelle", type: "varchar", length: 255, nullable: false })
  libelle: string;

  @Column({ name: "creationDate", type: "date",  nullable: false })
  creationDate: Date;

  @Column({name: "idUser", type: 'int', nullable: false})
  idUser: number;

  @ManyToOne(type => Book, book => book.comment)
  book: Book;

}
