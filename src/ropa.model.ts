//Tarea de Christopher Ulloa y Thalia Guzñay
import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import { RopaEntity } from './sucursalRopa.model';

@Entity('SucursalCO',{schema:'ropaSucursal'})

export class RopaEntity{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('NombrePrenda')
    id:string;
    @CreateDateColumn({
        //objeto
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;//atributo

    @UpdateDateColumn({
        name:'update_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamptz',
        nullable:true,
    })

    deleteAt:Date; //el nombre del atributo
    //Relationships
    //paramtrro de entrada =>
    @ManyToOne(() => RopaEntity, (ropa) => ropa.sucursal)
    @JoinColumn({name:'ropa_id'})
    sucursal: CategoryEntity;

    @Column('varchar',{
        name:'name',
        unique:true,
        comment: 'Nombre del colegio',
    })
    NombrePrenda:string;

    @Column('varchar',{
        name:'su prenda es ',
        unique:true,
        comment:'Modelo y talla de la prenda',
    })
    ubicacion:string;
    
    @Column('varchar',{
        name:'typeofcollague',
        unique:true,
        comment:'Tipo de prenda'
    })
    typeOfColague:string;

}