import Head from 'next/head'
import { createServer } from "miragejs"
import { GetServerSideProps } from 'next'
import { api } from '../services/api'
import React, { useCallback, useEffect, useState } from 'react'
import { HeaderComponent } from '../components/HeaderComponent'
import { IndexPageComponent } from '../components/IndexPageComponent'

createServer({
    routes() {
        this.namespace = "api/V1"
        this.get("/categories", () => ({
            categories: [
                {
                    id: 1,
                    name: "Camisetas",
                    path: "camisetas"
                },
                {
                    id: 2,
                    name: "Calças",
                    path: "calças"
                },
                {
                    id: 3,
                    name: "Calçados",
                    path: "calçados"
                }
            ],
        }))
    }
})

interface CategoriesProps {
    id: number;
    name: string;
}
export default function Home() {

    const [categories, setCategories] = useState<CategoriesProps[]>();

    const getCategories = useCallback(
        async () => {
            try{
                const categoriesResponse = await api.get(`/categories`);
                setCategories(categoriesResponse.data.categories)
            }
            catch(error){
                alert("Erro ao carregar as categorias");
            }
        },
        [categories],
    )

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <>
            <Head>
                <title>Webjump - Desafio Frontend</title>
            </Head>
            <HeaderComponent
                categories={categories}
            />
            <IndexPageComponent 
                categories={categories}
            />
        </>
    )
}
