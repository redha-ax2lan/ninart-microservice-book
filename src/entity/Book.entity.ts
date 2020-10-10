import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Artwork } from './Artwork.entity';
import { Watchlist } from './Watchlist.entity';

@Entity({ name: "book"})
export class Book{
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ name: "name", type: "varchar", length: 255, nullable: false })
  name: string;

  @Column({name: 'number', type:'int', nullable: false})
  number: number;

  @Column({name: 'description', type: "varchar", nullable: false})
  description: string;

  @ManyToOne(type => Artwork, artwork => artwork.books)
  artwork: Artwork;

  @OneToMany(type => Book, book => book.comment)
  comment: Comment[];

}
