import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Mineral {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identifikation: string;

  @Column()
  mineral: string;

  @Column()
  fundortZeile1: string;

  @Column()
  fundortZeile2: string;

  @Column()
  fundortZeile3: string;

  @Column()
  datum: string;


  @Column()
  wert: number;


  @Column()
  woher: string;

  @Column()
  größe: string;

  @Column()
  altesEtikett: string;

  @Column()
  bemerkung: string;

  @Column()
  gedruckt: Date;

  @Column()
  begeleitmineral: string;
}
