//Tarea de Christopher Ulloa y Thalia Guzñay
import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    JoinColumn, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import { SucursalEntity } from './ropa.model';


@Entity('sucursalRopa',{schema:'ropaSucursal'})
export class SucursalEntity{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('Ropa_NameSucursal')
    id:string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;

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

    deleteAt:Date;
    
    @OneToMany(() => SucursalEntity, (sucursal) => sucursal.ropa)
    @JoinColumn({name:'sucursales_id'})
    sucursal: Sucursales;
    
    @Column('varchar',{
        name:'Sucursal',
        comment: 'Nombre de la Sucursal',
    })
    sucursal:string;

    @Column('varchar',{
        name:'ubicación',
        comment:'Ubicación de la Sucursal',
    })
    ubicacion:string;
 
    
    @Column('varchar',{
        name:'ubicacion_sucursal',
        comment:'Esta prenda se encuentra en la sucursal de '
    })
    
    numberOfDistrit:string;

}
