import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "category" })
export class Category {

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ name: "name", type: "varchar", length: 255, nullable: false })
  name: string;

}

