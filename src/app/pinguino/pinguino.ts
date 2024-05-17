export class Pinguino {
    id: number;
    name: string;
    description: string;
    scientific_name: string;
    feeding: number;
    global_distribution: string;
    image: string;

    public constructor(id:number, name:string, description:string, scientific_name:string, feeding:number, global_distribution:string, image:string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.scientific_name = scientific_name;
        this.feeding = feeding;
        this.global_distribution = global_distribution;
        this.image = image;
    }
}
