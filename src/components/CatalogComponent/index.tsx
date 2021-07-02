import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CatalogSection, Container, Main, Product, SideMenu } from "./style";

interface PageProps {
    category: CategoryProps;
    categories: Array<CategoriesProps>;
    categoryId: number;
}

interface CategoriesProps {
    id: number;
    name: string;
}

interface CategoryProps {
    filter: {
        color: string;
    }
    items: {
        id: number;
        image: string;
        name: string;
        price: number;
    }[]
}

export function CatalogComponent({ categoryId, category, categories }: PageProps) {

    const [categorySelected, setCategorySelected] = useState("");

    useEffect(() => {
    async function getCategoryName() {      
        categories.map(category=>{
            if(category.id===categoryId){
                setCategorySelected(category.name);
            }
        })
    }    
    getCategoryName();
    }, [categoryId])
    
    return (
        <Container>
            <SideMenu>
                <h1>FILTRE POR</h1>

                <h2>CATEGORIAS</h2>
                <menu>
                    {categories &&
                        categories.map(categoryName => {
                            return (
                                <li key={categoryName.id}>
                                    <Link href={`/${categoryName.id}`}>{categoryName.name}</Link>
                                </li>
                            );
                        })
                    }
                </menu>
                <h2>CORES</h2>
                <div>
                    <div className="red"> </div>
                    <div className="orange"> </div>
                    <div className="blue"> </div>
                </div>

                <h2>TIPO</h2>

                <menu>
                    <li>
                        Corrida
                    </li>
                    <li>
                        Caminhada
                    </li>
                    <li>
                        Casual
                    </li>
                    <li>
                        Social
                    </li>
                </menu>
            </SideMenu>

            <CatalogSection>
                <h1>{categorySelected}</h1>
                <Main>
                    {category.items.map(products => {
                        return (

                            <Product>
                                <img src={products.image} alt="" />
                                <p>{products.name}</p>
                                <b>{products.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b>
                                <button>COMPRAR</button>
                            </Product>
                        )
                    })}
                </Main>
            </CatalogSection>

        </Container>
    );
}