import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Artwork } from './Artwork.entity';

@Entity({ name: "favorite" })
export class Favorite {

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ name: "idUser", type: "int", nullable: false })
  idUser: number;

  @ManyToOne(type => Artwork, artwork => artwork.favorite)
  artwork: Artwork;

}

