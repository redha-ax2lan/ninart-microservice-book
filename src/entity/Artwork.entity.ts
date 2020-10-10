import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { Category } from './Category.entity';
import { Book } from './Book.entity';
import { Favorite } from './Favorite.entity';
import { Watchlist } from './Watchlist.entity';

@Entity({name : 'artwork'})
export class Artwork{
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'title', type: "varchar", length: 255, nullable: false })
  title: string;

  @Column({name: 'description', type: "varchar", length: 255, nullable:false})
  description: string;

  @Column({name: 'isActive', type:'boolean', nullable:false})
  isActive: boolean;

  @Column({name: 'creationDate', type:'date', nullable:false})
  creationDate: Date;

  @Column({name: 'updateDate', type:'date', nullable:false})
  updateDate: Date;

  @Column({name: 'promotion', type:'int',  nullable:true})
  promotion: number;

  @ManyToMany(type => Category)
  @JoinTable()
  category: Category[];

  @OneToMany(type => Book, book => book.artwork)
  books: Book[];

  @OneToMany(type => Favorite, favorite => favorite.artwork)
  favorite: Favorite[];

}
